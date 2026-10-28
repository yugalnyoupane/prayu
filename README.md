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
public/
  favicon.svg
```

## Common edits

- **Text, phone numbers, email, clients, work items:** edit `src/data/site.js`.
- **Social links:** set the URLs in `socials` in `src/data/site.js` (they are `#` for now).
- **Add a client logo:** put the image in `src/assets/clients/` and add an entry to `clients` in `src/data/site.js` with `logo` set to the file name.
- **Kathmandu Global School / Tensor logos:** add their logo files the same way and replace `icon` with `logo` on those two entries.
- **Use a real hero photo:** put it in `src/assets/` and change the `url(...)` in `.hero-media` and `.about-media` in `src/styles/global.css`.
- **Reorder or remove sections:** edit `src/App.jsx`.
