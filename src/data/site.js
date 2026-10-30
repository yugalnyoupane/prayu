/*
 * All editable site content lives here.
 * Change text, contact details, clients or links without touching the components.
 */

/*
 * The live domain. Used for canonical URLs, the sitemap, Open Graph tags and
 * structured data. A SITE_URL environment variable on the host overrides it.
 */
export const siteUrl = "https://prayudigital.com";

export const business = {
  name: "Prayu Digital",
  legalName: "Prayu Digital",
  founders: ["Yugal Nyoupane", "Prabal Koirala"],
  locality: "Kathmandu",
  region: "Bagmati Province",
  country: "NP",
};

export const contact = {
  email: "digitalprayu@gmail.com",
  phones: [
    { name: "Yugal Nyoupane", display: "+977 984-0033640", tel: "+9779840033640" },
    { name: "Prabal Koirala", display: "+977 984-5166661", tel: "+9779845166661" },
  ],
  location: "Kathmandu, Nepal",
};

export const socials = {
  linkedin: "#",
  facebook: "#",
  instagram: "#",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#clients", label: "Trusted By" },
  { href: "/#about", label: "About" },
];

export const industries = [
  { icon: "Building", title: "Construction", text: "BOQ, measurement book, IPC, site reports, equipment.", href: "/construction-erp-software/" },
  { icon: "Hotel", title: "Hospitality", text: "Hotel and resort websites, reservations, operations.", href: "/web-design-nepal/" },
  { icon: "Cart", title: "Retail & Distribution", text: "Sales, inventory, orders, customers." },
  { icon: "Briefcase", title: "Professional Services", text: "Clients, projects, billing, team management." },
];

export const featuredWork = [
  {
    id: "ramex",
    category: "Custom software",
    title: "Ramex Excavating",
    subtitle: "Operations Management System",
    description:
      "A custom operations platform built to replace paper-based field processes and give management a central view of equipment, work orders, crews and operations.",
    tags: ["Operations", "Fleet", "Work Orders"],
    url: "https://ramexexcavating.com/",
  },
  {
    id: "peak-cabin",
    category: "Website design",
    title: "Peak Cabin",
    subtitle: "Website Design & Development",
    description:
      "A modern, booking-ready website for a luxury mountain cabin, designed to showcase the rooms, amenities and the experience of staying there.",
    tags: ["Website", "Development", "Branding"],
    url: "http://thepeakcabin.com/",
  },
  {
    id: "erp",
    category: "ERP system",
    title: "Prayu Construction ERP",
    subtitle: "Construction Management Platform",
    description: "One system for projects, procurement, inventory, teams and business operations.",
    tags: ["ERP", "Projects", "Inventory"],
    url: "#software",
  },
];

/* `logo` is the file name in src/assets/clients/. Clients without a logo file show as a name tile. */
export const clients = [
  { name: "Northeast Fence", domain: "northeast-fence.com", url: "https://northeast-fence.com/", logo: "northeast-fence.com.webp" },
  { name: "Ramex Excavating", domain: "ramexexcavating.com", url: "https://ramexexcavating.com/", logo: "ramexexcavating.com.webp" },
  { name: "Ridgeline Payments", domain: "ridgelinepayments.com", url: "https://ridgelinepayments.com/", logo: "ridgelinepayments.com.webp" },
  { name: "Guardian Tree Insurance", domain: "gtreeinsurance.com", url: "https://gtreeinsurance.com/", logo: "gtreeinsurance.com.webp" },
  { name: "Paragon Surfaces", domain: "paragonsurfaces.com", url: "https://paragonsurfaces.com/", logo: "paragonsurfaces.com.webp" },
  { name: "Echelon Exteriors", domain: "echelonexteriorsco.com", url: "https://echelonexteriorsco.com/", logo: "echelonexteriorsco.com.webp" },
  { name: "PacWest Equipment Rentals", domain: "pacwestequipmentrentals.com", url: "https://pacwestequipmentrentals.com/", logo: "pacwestequipmentrentals.com.webp" },
  { name: "The Home Remodeling Guys", domain: "homeremodelinguys.com", url: "https://homeremodelinguys.com/", logo: "homeremodelinguys.com.webp" },
  { name: "Tony's Fence & Co.", domain: "tonysfencenj.com", url: "https://tonysfencenj.com/", logo: "tonysfencenj.com.webp" },
  { name: "California Landscape Co.", domain: "californialandscape.co", url: "https://californialandscape.co/", logo: "californialandscape.co.webp", invert: true },
  { name: "Peak Cabin", domain: "thepeakcabin.com", url: "http://thepeakcabin.com/", logo: "thepeakcabin.com.webp" },
  { name: "Offer Max Houses", domain: "offermaxhouses.com", url: "https://offermaxhouses.com/", logo: "offermaxhouses.com.webp" },
  { name: "4 Lakes Landscape", domain: "4lakeslandscapes.com", url: "https://www.4lakeslandscapes.com/", logo: "4lakeslandscapes.com.webp" },
  { name: "Columbia Pro Services", domain: "columbiaproservices.com", url: "https://columbiaproservices.com/", logo: "columbiaproservices.com.webp" },
  { name: "QA Painting", domain: "qapainting.ca", url: "https://qapainting.ca/", logo: "qapainting.ca.webp" },
  { name: "CVW Developments", domain: "cvwdevelopments.org", url: "https://cvwdevelopments.org/", logo: "cvwdevelopments.org.webp" },
  { name: "Kathmandu Global School", domain: "Kathmandu, Nepal", icon: "GraduationCap" },
  { name: "Tensor", domain: "IOE Thapathali Campus", icon: "Cube" },
];

export const processSteps = [
  { title: "Understand", text: "We learn how your business operates today." },
  { title: "Design", text: "We map the workflows and design the experience." },
  { title: "Build", text: "Our team turns the plan into working software." },
  { title: "Launch", text: "We deploy, train your team and keep improving." },
];

export const whyPrayu = [
  { icon: "Target", title: "Built around you", text: "No unnecessary features. Just what you need." },
  { icon: "Users", title: "Designed for people", text: "Easy to use, for the people who use it every day." },
  { icon: "TrendUp", title: "Built to grow", text: "Start small, scale fast, when you're ready." },
];

export const erpModules = [
  { icon: "Folder", label: "Projects" },
  { icon: "Banknote", label: "Finance" },
  { icon: "Package", label: "Inventory" },
  { icon: "User", label: "People" },
  { icon: "Truck", label: "Equipment" },
  { icon: "BarChart", label: "Reporting" },
  { icon: "Workflow", label: "Workflows" },
];
