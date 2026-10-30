# Prayu Digital — website

Company website for Prayu Digital, built with **React 18** and **Vite 5**.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deploy

**Vercel:** push this folder to a GitHub repo, then "Add New Project" in Vercel and import it. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).

**Netlify:** "Add new site" → import the repo, with build command `npm run build` and publish directory `dist`. Or run `npm run build` and drag the `dist` folder into Netlify.

**cPanel or any static host:** run `npm run build` and upload the contents of `dist/` to `public_html`.

## Project structure

```
src/
  main.jsx                 entry point
  App.jsx                  page layout: the order of sections
  data/site.js             ALL editable content: contact details, socials, clients, work, industries, process
  components/
    Header.jsx             sticky header with mobile menu
    Hero.jsx
    Services.jsx
    Industries.jsx
    FeaturedWork.jsx
    TrustedBy.jsx          client logo grid
    WebsiteFeature.jsx
    CustomSoftware.jsx
    Process.jsx
    WhyPrayu.jsx
    About.jsx
    CallToAction.jsx
    Footer.jsx
    SectionHead.jsx        shared section heading
    Icons.jsx              line icons
    mockups/Mockups.jsx    laptop, phone, dashboard and browser mockups (pure HTML/CSS)
  hooks/useReveal.js       fade-in on scroll
  styles/global.css        all styles; colors and fonts are variables at the top
  assets/
    hero-himalaya.svg      hero and About illustration
    logo-mark.svg
    clients/               client logos
  pages/                   Home and the shared service landing page template
  data/pages.js            SEO landing page content
  entry-server.jsx         server render entry used by the pre-renderer
scripts/prerender.mjs      writes static HTML, meta tags, sitemap.xml, robots.txt
public/
  favicon.svg, og-image.jpg, apple-touch-icon.png
```

## SEO

`npm run build` pre-renders every page to static HTML (`scripts/prerender.mjs`), so Google, Bing,
social previews and AI crawlers see the full content without running JavaScript. It also writes the
per-page title, description, canonical URL, Open Graph tags, JSON-LD structured data,
`sitemap.xml` and `robots.txt`.

- **Set the domain first:** change `siteUrl` in `src/data/site.js` (or set `SITE_URL` in the host's
  environment variables). Canonicals, sitemap and structured data all use it.
- **Landing pages:** each entry in `src/data/pages.js` becomes its own URL
  (`/web-design-nepal/`, `/custom-software-development-nepal/`, `/erp-software-nepal/`,
  `/construction-erp-software/`). Add a page by adding an entry; it is linked from the footer automatically.
- **Social profiles:** fill in `socials` in `src/data/site.js`; they are added to the structured data as `sameAs`.
- **Images:** use WebP, under ~200 KB each.
- After launch: verify the domain in Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.

## Common edits

- **Text, phone numbers, email, clients, work items:** edit `src/data/site.js`.
- **Social links:** set the URLs in `socials` in `src/data/site.js` (they are `#` for now).
- **Add a client logo:** put the image in `src/assets/clients/` and add an entry to `clients` in `src/data/site.js` with `logo` set to the file name.
- **Kathmandu Global School / Tensor logos:** add their logo files the same way and replace `icon` with `logo` on those two entries.
- **Use a real hero photo:** put it in `src/assets/` and change the `url(...)` in `.hero-media` and `.about-media` in `src/styles/global.css`.
- **Reorder or remove sections:** edit `src/App.jsx`.
