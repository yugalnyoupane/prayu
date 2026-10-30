/*
 * SEO landing pages. Each entry becomes its own pre-rendered URL with its own
 * title, description, canonical, structured data and on-page copy.
 *
 * Keep every claim here true. Search engines (and customers) reward pages that
 * answer a real question in plain words; they punish thin or padded copy.
 */

export const servicePages = [
  {
    path: "/web-design-nepal/",
    navLabel: "Web Design",
    serviceType: "Website design and development",
    title: "Website Design & Development Company in Kathmandu, Nepal | Prayu Digital",
    description:
      "Prayu Digital designs and builds fast, mobile-first, SEO-ready websites for businesses in Nepal and abroad. Hotels, resorts, construction firms, schools and service companies.",
    eyebrow: "Web design · Kathmandu, Nepal",
    h1: "Website design and development for businesses in Nepal",
    lede:
      "We design and build fast, mobile-first websites that explain what you do, earn trust and turn visitors into enquiries. Built in Kathmandu for clients in Nepal, the United States and Canada.",
    sections: [
      {
        h2: "What every website we build includes",
        items: [
          ["Mobile-first design", "Most visitors in Nepal arrive on a phone. We design for the small screen first, then scale up."],
          ["Speed", "Compressed images, lean code and good hosting, so pages load quickly even on mobile data."],
          ["Search-ready structure", "Clean headings, page titles, meta descriptions, structured data, a sitemap and Google Search Console setup."],
          ["Clear calls to action", "Phone, WhatsApp, email and enquiry forms placed where people look for them."],
          ["Content you can update", "We hand over a site you can keep current, or we look after it for you."],
          ["Google Business Profile", "We help set up or tidy your profile so you show up on Google Maps for local searches."],
        ],
      },
      {
        h2: "Websites for the industries we know",
        text:
          "We have built websites for construction and excavation companies, landscaping and fencing contractors, a luxury mountain cabin, insurance and payments companies, and schools. For hotels, resorts and homestays in Nepal we focus on room pages, photo galleries, location details and direct booking enquiries, so guests can book with you instead of only through a travel portal.",
      },
    ],
    faq: [
      ["How long does it take to build a website?", "A typical business website takes two to four weeks from the first meeting to launch. Larger sites with many pages, bookings or custom features take longer; we agree a timeline before we start."],
      ["Will my website show up on Google?", "We build every site so search engines can read it properly and we submit it to Google Search Console. Ranking also depends on your content, your Google Business Profile and other sites linking to you, and we advise on all three."],
      ["Do you build websites for clients outside Nepal?", "Yes. Most of our website clients are in the United States and Canada. We work across time zones by email, video calls and shared project boards."],
      ["Can you redesign my existing website?", "Yes. We review what you have, keep what works, fix speed and search problems, and move your content to the new design without losing the pages Google already knows."],
    ],
  },
  {
    path: "/custom-software-development-nepal/",
    navLabel: "Custom Software",
    serviceType: "Custom software development",
    title: "Custom Software Development Company in Nepal | Prayu Digital",
    description:
      "Custom business software built around how your team already works: operations systems, field apps, dashboards and internal tools. From a software company in Kathmandu.",
    eyebrow: "Custom software · Nepal",
    h1: "Custom software development, built around your business",
    lede:
      "When spreadsheets, paper forms and off-the-shelf tools stop keeping up, we build software that fits the way your team actually works: web apps, mobile field apps, dashboards and internal tools.",
    sections: [
      {
        h2: "What we build",
        items: [
          ["Operations systems", "Work orders, crews, equipment and job status in one place instead of paper and phone calls."],
          ["Field and mobile apps", "Progressive web apps your staff can use on site from a phone, including with a weak connection."],
          ["Dashboards and reporting", "Live numbers for owners and managers, without waiting for someone to compile a spreadsheet."],
          ["Internal tools", "Approvals, inventory, client records, billing and the small tools that remove repetitive work."],
          ["Integrations", "Connecting the systems you already use so data is entered once."],
          ["Secure multi-user access", "Roles and permissions so each person sees and changes only what they should."],
        ],
      },
      {
        h2: "Example: replacing paper in the field",
        text:
          "For Ramex Excavating in the United States we built an operations platform that replaced paper-based field processes and gives management one view of equipment, work orders, crews and day-to-day operations.",
      },
    ],
    faq: [
      ["Why custom software instead of an off-the-shelf product?", "Off-the-shelf tools make you change your process to fit them. Custom software is built around the way you already work, includes only what you use, and can grow with you."],
      ["How much does custom software cost?", "It depends on scope. We usually start with a small first version that solves the most painful problem, then add to it, so you see value early and spend in stages."],
      ["Who owns the software?", "You do. We agree ownership, hosting and handover in writing before the project starts."],
      ["Do you provide support after launch?", "Yes. We deploy, train your team and stay on to fix issues and add features as your business changes."],
    ],
  },
  {
    path: "/erp-software-nepal/",
    navLabel: "ERP Software",
    serviceType: "ERP software development and implementation",
    title: "ERP Software for Businesses in Nepal | Prayu Digital",
    description:
      "ERP systems for Nepali businesses that connect projects, finance, inventory, people and reporting in one place, built around your workflows by Prayu Digital in Kathmandu.",
    eyebrow: "ERP systems · Nepal",
    h1: "ERP software for growing businesses in Nepal",
    lede:
      "An ERP connects the parts of your business that usually live in separate spreadsheets: projects, finance, inventory, people and reporting. We build ERP systems around your workflows instead of forcing you into someone else's.",
    sections: [
      {
        h2: "Modules we build",
        items: [
          ["Projects", "Plans, milestones, progress and costs for every job or project."],
          ["Finance", "Bills, payments, certifications and the reports your accountant and bank ask for."],
          ["Inventory and procurement", "Stock, purchase requests, suppliers and what was issued where."],
          ["People", "Staff records, attendance, roles and approvals."],
          ["Equipment", "Machines, usage and maintenance across sites."],
          ["Reporting", "Dashboards for owners and managers, updated as work is recorded."],
        ],
      },
      {
        h2: "Industries",
        text:
          "We build ERP systems for construction, hospitality, retail and distribution, and professional services firms. Our most developed product is a construction ERP, used by construction companies in Nepal.",
        link: { href: "/construction-erp-software/", label: "See our construction ERP" },
      },
    ],
    faq: [
      ["What is an ERP system?", "ERP (enterprise resource planning) software brings a company's main operations, such as projects, finance, stock and staff, into one system so everyone works from the same up-to-date information."],
      ["Is ERP only for large companies?", "No. Many small and mid-sized companies in Nepal start with two or three modules that solve their biggest problems and add more as they grow."],
      ["Can staff use it on their phones?", "Yes. Our systems work in the browser on desktop and mobile, and field staff can use a mobile app on site."],
      ["How is our data kept separate and secure?", "Each company's data is isolated, access is controlled by user roles, and every user signs in with their own account."],
    ],
  },
  {
    path: "/construction-erp-software/",
    navLabel: "Construction ERP",
    serviceType: "Construction ERP software",
    title: "Construction ERP Software in Nepal: BOQ, Measurement Book, IPC | Prayu Digital",
    description:
      "Construction ERP for Nepali contractors: BOQ, measurement book, interim payment certificates (IPC), daily site reports, a mobile field app and a live project dashboard.",
    eyebrow: "Construction ERP · Nepal",
    h1: "Construction ERP software for contractors in Nepal",
    lede:
      "Prayu Construction ERP follows the way construction work is measured and billed in Nepal: from the bill of quantities to the measurement book to the interim payment certificate, with site reports coming in from a mobile app.",
    sections: [
      {
        h2: "What it does today",
        items: [
          ["BOQ", "Enter the bill of quantities for each project and track quantities against it."],
          ["Measurement book", "Record measured work against BOQ items as the job progresses."],
          ["Interim payment certificates", "Draft, certify and print IPCs calculated from the measurement book."],
          ["Daily site reports", "Site engineers record progress, labour and issues every day."],
          ["Mobile field app", "Works on a phone on site, so reports are filed from the job instead of the office."],
          ["Live dashboard", "Project progress and billing status across all your sites in one view."],
        ],
      },
      {
        h2: "Coming next",
        text:
          "Equipment management, subcontractor bills, procurement and stock are the next modules on the roadmap. Each company's data is kept separate, and access is controlled by roles such as owner, project manager and site engineer.",
      },
    ],
    faq: [
      ["Who is this construction ERP for?", "Construction companies and contractors in Nepal that run several projects at once and want measurement, billing and site reporting in one system instead of spreadsheets."],
      ["Does it follow the BOQ, measurement book and IPC process?", "Yes. That flow is the core of the system: quantities come from the BOQ, measured work is recorded in the measurement book, and IPCs are calculated from it."],
      ["Can site engineers use it on a phone?", "Yes. The field app is built for phones, so daily site reports are submitted from the site."],
      ["Can we try it?", "Yes. Contact us for a walkthrough with sample data, and we will show how it fits your projects."],
    ],
  },
];
