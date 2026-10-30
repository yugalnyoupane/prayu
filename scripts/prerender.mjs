/*
 * Pre-renders every route to static HTML after `vite build`, so search engines,
 * social previews and AI crawlers see the full page content without running JS.
 * Also writes per-page meta tags, JSON-LD structured data, sitemap.xml and robots.txt.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssr = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const { render, servicePages, business, contact, socials, clients } = ssr;
const siteUrl = (process.env.SITE_URL || ssr.siteUrl).replace(/\/$/, "");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const sameAs = Object.values(socials).filter((u) => u && u !== "#");
const orgId = `${siteUrl}/#organization`;

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": orgId,
  name: business.name,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/apple-touch-icon.png`,
  image: `${siteUrl}/og-image.jpg`,
  description: "Web design, custom software and ERP company in Kathmandu, Nepal.",
  email: contact.email,
  telephone: contact.phones[0].tel,
  address: { "@type": "PostalAddress", addressLocality: business.locality, addressRegion: business.region, addressCountry: business.country },
  areaServed: ["Nepal", "United States", "Canada"],
  founder: business.founders.map((name) => ({ "@type": "Person", name })),
  knowsAbout: ["Web design", "Website development", "Custom software development", "ERP software", "Construction ERP"],
  ...(sameAs.length ? { sameAs } : {}),
};

const pages = [
  {
    path: "/",
    title: "Prayu Digital | Web Design, Custom Software & ERP Company in Nepal",
    description:
      "Prayu Digital is a web design and software company in Kathmandu, Nepal. We build websites, custom software and ERP systems for businesses in Nepal, the US and Canada.",
    schema: [
      organization,
      { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: business.name, publisher: { "@id": orgId } },
    ],
    priority: "1.0",
  },
  ...servicePages.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    priority: "0.8",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: p.h1,
        serviceType: p.serviceType,
        description: p.description,
        url: `${siteUrl}${p.path}`,
        provider: { "@id": orgId },
        areaServed: { "@type": "Country", name: "Nepal" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: p.navLabel, item: `${siteUrl}${p.path}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
      organization,
    ],
  })),
];

const today = new Date().toISOString().slice(0, 10);

for (const page of pages) {
  const url = `${siteUrl}${page.path}`;
  const head = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:image" content="${siteUrl}/og-image.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Prayu Digital, web design and software company in Kathmandu, Nepal" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${siteUrl}/og-image.jpg" />`,
    ...page.schema.map(jsonld),
  ].join("\n    ");

  const html = template
    .replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);

  const outDir = path.join(dist, page.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${page.path}`);
}

fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${siteUrl}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`).join("\n")}
</urlset>
`
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`sitemap.xml and robots.txt written for ${siteUrl}`);
