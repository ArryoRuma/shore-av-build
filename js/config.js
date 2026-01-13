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

// Slide Content Configuration
// This section contains the actual content for template-driven slides
const SLIDE_CONTENT = {
  // Slide 3: Project Understanding
  slide3: {
    slideNumber: 3,
    title: "Project <span class='text-primary'>Understanding</span>",
    subtitle: "Current state assessment and strategic objectives for the sanctuary.",
    
    // Left column boxes
    leftColumn: [
      {
        type: "info-box",
        borderColor: "gray-400",
        icon: "fa-search-location",
        iconBgColor: "gray-100",
        iconTextColor: "gray-600",
        title: "Current Context",
        content: "The sanctuary currently operates with minimal infrastructure. The new design must bridge the gap to professional standards while respecting existing constraints."
      },
      {
        type: "info-box",
        borderColor: "primary",
        icon: "fa-drafting-compass",
        iconBgColor: "blue-50",
        iconTextColor: "primary",
        title: "Design-First Strategy",
        content: "Our intent is to minimize risk and reduce ambiguity before installation begins.",
        bulletList: [
          "Inform precise equipment selection",
          "Establish accurate budget estimates",
          "Create clear installation roadmap"
        ]
      }
    ],
    
    // Right column priorities
    rightColumn: [
      {
        type: "priority-card",
        icon: "fa-microphone-lines",
        iconBgColor: "indigo-50",
        iconTextColor: "indigo-600",
        title: "Audio Performance",
        content: "Prioritizing <span class='font-semibold text-primary'>clear speech intelligibility</span> for spoken word and <span class='font-semibold text-primary'>reliable music reinforcement</span> for the worship band."
      },
      {
        type: "priority-card",
        icon: "fa-video",
        iconBgColor: "teal-50",
        iconTextColor: "teal-600",
        title: "Contemporary Worship",
        content: "Enabling future-ready audiovisual capabilities including <span class='font-semibold text-primary'>projection/IMAG</span> and seamless <span class='font-semibold text-primary'>livestream readiness</span>."
      },
      {
        type: "priority-card",
        icon: "fa-users-gear",
        iconBgColor: "orange-50",
        iconTextColor: "orange-500",
        title: "Operational Simplicity",
        content: "Systems designed for <span class='font-semibold text-primary'>volunteer staff</span>, balancing professional features with accessible control logic and workflows."
      }
    ]
  }
};

// Make config and slides available globally
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = CONFIG;
  window.SLIDES = SLIDES;
  window.SLIDE_CONTENT = SLIDE_CONTENT;
}
