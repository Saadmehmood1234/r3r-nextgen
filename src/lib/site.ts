export const site = {
  name: "R3R NextGen (OPC) Pvt. Ltd.",
  short: "R3R NextGen",
  url: "https://www.r3rnextgen.com",
  tagline: "Crafting sustainable play for the next generation.",
  description:
    "R3R NextGen manufactures safe, sustainable wooden toys and children's furniture for families, retailers and institutions in India and across the world.",
  email: "info@r3rnextgen.com",
  phone: "+91 97129 80864",
  address: "Greater Noida, India",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing & Global Supply", href: "/manufacturing" },
  { label: "OEM & White Label", href: "/oem-white-label" },
  { label: "Quality & Sustainability", href: "/quality-sustainability" },
  { label: "Contact", href: "/contact" },
];

export const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export type Item = { icon: string; title: string; text?: string };

export const heroFeatures: Item[] = [
  {
    icon: "shield",
    title: "Safe & Natural",
    text: "Crafted with child-safe, non-toxic materials.",
  },
  {
    icon: "leaf",
    title: "Built for a Brighter Future",
    text: "Durable, eco-friendly designs.",
  },
  {
    icon: "brain",
    title: "Imagination in Every Play",
    text: "Toys that inspire creativity and learning.",
  },
  {
    icon: "hammer",
    title: "Responsible Manufacturing",
    text: "Ethical, sustainable and quality-driven production.",
  },
];

export const aboutPills: Item[] = [
  { icon: "leaf", title: "Our Story" },
  { icon: "target", title: "Vision & Mission" },
  { icon: "gem", title: "Our Values" },
  { icon: "users", title: "Leadership" },
  { icon: "network", title: "Our Ecosystem" },
];

export const products = [
  {
    title: "Wooden Toys",
    text: "Classic, durable and engaging",
    img: "toys.png",
  },
  {
    title: "Educational & Activity Products",
    text: "Learn. Play. Grow.",
    img: "educational.png",
  },
  {
    title: "Play Systems",
    text: "Active play for growing minds",
    img: "play-systems.png",
  },
  {
    title: "Children's Furniture",
    text: "Functional. Safe. Beautiful.",
    img: "furniture.png",
  },
  {
    title: "Custom Products",
    text: "Tailored to your needs",
    img: "custom.png",
  },
];

export const why: Item[] = [
  { icon: "leaf", title: "Sustainable Materials" },
  { icon: "shield", title: "Safe & Child-Friendly" },
  { icon: "lightbulb", title: "Innovative Designs" },
  { icon: "settings", title: "Modern Manufacturing" },
  { icon: "globe", title: "Global Business Focus" },
];

export const process: Item[] = [
  { icon: "lightbulb", title: "Concept" },
  { icon: "pen", title: "Design" },
  { icon: "box", title: "Prototype" },
  { icon: "check", title: "Testing" },
  { icon: "factory", title: "Manufacturing" },
  { icon: "settings", title: "Quality Control" },
  { icon: "package", title: "Packaging" },
];

export const mfgPoints: Item[] = [
  { icon: "check", title: "Quality Focused" },
  { icon: "settings", title: "Production Processes" },
  { icon: "factory", title: "Scalable Manufacturing" },
];

export const oem: Item[] = [
  { icon: "wrench", title: "Custom Product Development" },
  { icon: "tag", title: "Private Label Manufacturing" },
  { icon: "layers", title: "Bulk Manufacturing" },
  { icon: "building", title: "Institutional Supply" },
  { icon: "support", title: "Buyer Support" },
  { icon: "globe", title: "Flexible Solutions" },
];

export const quality: Item[] = [
  { icon: "shield", title: "Quality & Safety" },
  { icon: "check", title: "Compliance" },
  { icon: "leaf", title: "Sustainable Materials" },
  { icon: "recycle", title: "Responsible Manufacturing" },
  { icon: "package", title: "Sustainable Packaging" },
  { icon: "heart", title: "Social Impact" },
];

export const markets: Item[] = [
  { icon: "map", title: "Domestic Supply" },
  { icon: "building", title: "Bulk & Institutional Supply" },
  { icon: "globe", title: "Global Markets (Export-Ready)" },
];
