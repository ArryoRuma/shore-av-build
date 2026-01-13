// Configuration for contact information and company details
// Update these values once and they'll be reflected across all slides

const CONFIG = {
  company: {
    name: "Shore Christian Church",
    tagline: "AV System Design Proposal",
    sector: "Sanctuary AV System Design (Design-Only)"
  },
  contact: {
    preparedBy: "Your Name / Company",
    email: "contact@example.com",
    phone: "(555) 123-4567",
    website: "www.example.com"
  },
  proposal: {
    date: "January 2026",
    title: "AV System Design Proposal"
  }
};

// Slide metadata for navigation and index generation
const SLIDES = [
  { number: 1, title: "Cover", url: "./slides/1.html" },
  { number: 2, title: "Welcome", url: "./slides/2.html" },
  { number: 3, title: "Project Understanding", url: "./slides/3.html" },
  { number: 4, title: "Design Principles", url: "./slides/4.html" },
  { number: 5, title: "Scope (Part 1)", url: "./slides/5.html" },
  { number: 6, title: "Scope (Part 2)", url: "./slides/6.html" },
  { number: 7, title: "Deliverables", url: "./slides/7.html" },
  { number: 8, title: "Timeline", url: "./slides/8.html" },
  { number: 9, title: "Investment", url: "./slides/9.html" },
  { number: 10, title: "Why Choose Us", url: "./slides/10.html" },
  { number: 11, title: "Next Steps", url: "./slides/11.html" }
];

// Make config and slides available globally
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = CONFIG;
  window.SLIDES = SLIDES;
}
