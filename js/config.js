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

// Make config available globally
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = CONFIG;
}
