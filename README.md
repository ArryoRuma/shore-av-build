# Shore Christian Church AV Proposal Website

A professional, static HTML presentation deck for the Shore Christian Church AV System Design proposal.

## 🚀 Quick Start

1. **Local Development**
   ```bash
   python3 -m http.server 8080
   ```
   Then open http://localhost:8080 in your browser.

2. **GitHub Pages**
   This site is designed to work seamlessly with GitHub Pages. Enable it in your repository settings and it will be served from the `main` branch.

## 📁 Structure

```
shore-av-build/
├── index.html          # Landing page with slide navigation
├── slides/             # Individual presentation slides (1-11)
│   ├── 1.html         # Cover slide
│   ├── 2.html         # Welcome & Introduction
│   ├── ...            # Additional slides
│   └── 11.html        # Next Steps & Contact
├── css/
│   └── style.css      # Centralized theme tokens and styles
├── js/
│   ├── config.js      # Configuration for contact/company info
│   └── nav.js         # Navigation functionality
└── assets/            # Directory for future assets (images, etc.)
```

## ⚙️ Configuration

All contact and company information is centralized in `/js/config.js`. Edit this file once to update values across all slides:

```javascript
const CONFIG = {
  company: {
    name: "Shore Christian Church",
    tagline: "AV System Design Proposal",
    sector: "Building AV System Design (Design-Only)"
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
```

## 🎨 Customizing Styles

The design uses CSS custom properties (variables) defined in `/css/style.css`. Update these to customize the brand colors:

```css
:root {
  --color-primary: #2E5C8A;      /* Dark blue */
  --color-secondary: #4A90E2;    /* Light blue */
  /* Additional theme tokens... */
}
```

## 🧭 Navigation

- **Arrow Keys**: Use ← → or PageUp/PageDown to navigate between slides
- **Navigation Buttons**: Each slide has Prev/Index/Next buttons at the bottom
- **Fullscreen Mode**: Click the fullscreen button or press `F` to enter/exit fullscreen mode
- **Keyboard Shortcuts**:
  - `Home` - Jump to first slide
  - `End` - Jump to last slide
  - `F` - Toggle fullscreen mode

## 📄 Slides Overview

1. **Slide 1**: Cover / Title Slide
2. **Slide 2**: Welcome & Introduction
3. **Slide 3**: Project Understanding
4. **Slide 4**: Design Principles
5. **Slide 5**: Scope of Services (Part 1)
6. **Slide 6**: Scope of Services (Part 2)
7. **Slide 7**: Deliverables
8. **Slide 8**: Timeline
9. **Slide 9**: Investment
10. **Slide 10**: Why Choose Us
11. **Slide 11**: Next Steps & Contact

## 🔧 Technical Details

- **No Build Required**: Pure static HTML/CSS/JS - works immediately
- **CDN Dependencies**:
  - Tailwind CSS 2.2.19
  - Font Awesome 6.4.0
  - Google Fonts (Montserrat & Open Sans)
- **Slide Dimensions**: 1280px × 720px (16:9 aspect ratio)
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📝 Making Changes

### Adding a New Slide

1. Copy an existing slide from `/slides/`
2. Update the content
3. Ensure it includes:
   ```html
   <link href="../css/style.css" rel="stylesheet" />
   <script src="../js/nav.js"></script>
   ```
4. Update the total slide count in `/js/nav.js` (line 6)
5. Add a link in `index.html`

### Updating Contact Information

Edit `/js/config.js` and the values will automatically populate in:
- Slide 1 (Prepared By, Date)
- Slide 11 (All contact fields)

## 🌐 Deployment

### GitHub Pages

1. Push your changes to the `main` branch
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Your site will be available at `https://[username].github.io/[repo-name]`

### Other Static Hosts

This site works with any static hosting provider:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

Simply deploy the entire repository directory.

## 📋 Checklist for Customization

- [ ] Update company/contact info in `/js/config.js`
- [ ] Review and customize colors in `/css/style.css`
- [ ] Add your logo/images to `/assets/` (if needed)
- [ ] Update slide content to match your specific proposal
- [ ] Test navigation on all slides
- [ ] Preview on mobile/tablet if needed (currently optimized for 1280x720)

## 🤝 Contributing

This is a template project. Feel free to customize it for your needs!

## 📄 License

This project is provided as-is for Shore Christian Church AV proposal purposes.
