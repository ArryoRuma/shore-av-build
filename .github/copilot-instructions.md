# Design Decisions & Implementation Summary

## Overview

This document outlines the key design decisions made during the implementation of the Shore Christian Church AV Proposal website.

## 1. Theme Token System (CSS Custom Properties)

**Decision**: Use CSS custom properties (`:root` variables) for all theme tokens.

**Rationale**:

- Single source of truth for colors, typography, spacing, and shadows
- Easy to customize the entire site by editing one file
- No build process required (unlike Sass/LESS)
- Better browser support than preprocessors for static sites
- Maintains consistency across all 11 slides

**Location**: `/css/style.css`

**Key Tokens**:

- Colors: `--color-primary`, `--color-secondary`, gray scale
- Typography: `--font-heading`, `--font-body`
- Spacing: `--space-xs` through `--space-2xl`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`

## 2. Configuration System

**Decision**: Centralized JavaScript configuration file for dynamic content.

**Rationale**:

- Eliminates hard-coded placeholders scattered across slides
- Update contact info in one place (`/js/config.js`)
- No build step or template engine needed
- Simple DOM manipulation at runtime
- Client can easily update without HTML knowledge

**Implementation**:

- Config loaded before slide content
- JavaScript populates elements with class names like `.config-email`
- Graceful fallback if config fails to load

## 3. Consistent Slide Structure

**Decision**: Standardize header and footer patterns across slides 2-11.

**Pattern**:

```html
<!-- Header -->
<div class="w-full h-2 bg-primary"></div>
<div class="w-full h-16 flex items-center justify-between px-12 border-b border-gray-100">
  <!-- Church name and proposal title -->
</div>

<!-- Main Content -->
<div class="flex-1 ...">
  <!-- Slide-specific content -->
</div>

<!-- Footer -->
<div class="slide-footer">
  <!-- Footer text and progress dots -->
</div>
```

**Rationale**:

- Visual consistency improves professional appearance
- Users know what to expect on each slide
- Easier to maintain and update
- Slide 1 uses different pattern (cover slide) - intentional exception

## 4. Navigation System

**Decision**: Hybrid navigation (buttons + keyboard shortcuts).

**Implementation**:

- Fixed position nav buttons at bottom (Prev/Index/Next)
- Keyboard shortcuts: Arrow keys, PageUp/PageDown, Home/End
- Total slides configurable in one place (`nav.js`)
- Relative URLs work in any environment

**Rationale**:

- Accessibility: Multiple navigation methods
- Presentation mode: Keyboard shortcuts for smooth transitions
- Review mode: Buttons for mouse users
- Mobile-friendly: Touch targets for buttons

## 5. Keeping Tailwind CDN

**Decision**: Maintain Tailwind CSS via CDN instead of purging/building.

**Rationale**:

- Slides already heavily use Tailwind utility classes
- No build step requirement (per project specs)
- Works immediately on GitHub Pages
- File size acceptable for 11 slides
- Custom CSS extends (not replaces) Tailwind

**Trade-off**: Slightly larger initial load, but acceptable for static proposal site.

## 6. Enhanced Index Page

**Decision**: Transform index.html from plain list to branded landing page.

**Changes**:

- Added hero section with church icon
- Styled "Start Presentation" CTA button
- Grid layout for slide links with hover effects
- Consistent branding with slide deck
- Instructions for keyboard navigation

**Rationale**:

- First impression matters for professional proposals
- Clear entry points (single CTA + grid)
- Sets visual tone before entering slides
- Helps reviewers navigate efficiently

## 7. Minimal Inline Style Removal

**Decision**: Keep most existing inline styles, add CSS file for shared tokens only.

**Rationale**:

- Slides already functional and well-designed
- Minimal changes = lower risk of breaking layouts
- Inline styles are specific to individual slides
- CSS file provides shared foundations (colors, fonts, components)
- Balances consistency with practicality

**Future**: Could gradually migrate more styles to CSS if needed.

## 8. Progress Indicators

**Decision**: Add visual progress dots in footer of each slide.

**Implementation**:

```html
<div class="progress-dots">
  <div class="progress-dot"></div>
  <div class="progress-dot active"></div>
  <!-- ... -->
</div>
```

**Rationale**:

- Shows viewer position in presentation
- Subtle, non-intrusive design
- Consistent placement (bottom right)
- Active state uses primary brand color

## 9. Assets Directory

**Decision**: Create empty `/assets` directory for future use.

**Rationale**:

- Establishes clear location for images, logos, PDFs
- Prevents ad-hoc file placement
- Easy to add brand assets later
- Standard convention in web projects

## 10. Documentation-First Approach

**Decision**: Include comprehensive README.md and this design doc.

**Rationale**:

- Lowers barrier for non-technical updates
- Documents configuration and customization
- Explains navigation and deployment
- Helps future maintainers understand decisions

## File Manifest

### Created Files

- `/css/style.css` - Theme tokens and shared component styles
- `/js/config.js` - Centralized configuration
- `/assets/` - Directory for future assets
- `/README.md` - User documentation
- `/DESIGN_DECISIONS.md` - This file

### Modified Files

- `/index.html` - Enhanced landing page
- `/slides/1.html` - Config integration for cover slide
- `/slides/2-10.html` - Added CSS link
- `/slides/11.html` - Config integration for contact info

### Unchanged Files

- `/js/nav.js` - Already functional, no changes needed
- Slide content - Preserved all existing content

## Browser Testing

Tested in:

- Chrome/Chromium
- Local server (Python SimpleHTTPServer)
- Navigation confirmed working (keyboard + buttons)
- Config values properly populated

## Deployment Ready

✅ Works on GitHub Pages (no build step)
✅ All assets referenced relatively
✅ No external dependencies beyond CDNs
✅ 1280x720 slide dimensions maintained
✅ No server-side code required

## Future Enhancements (Optional)

If the client wants to expand:

1. Add print stylesheet for PDF generation
2. Create slide transition animations
3. Add presenter notes view
4. Implement full-screen mode
5. Add logo/branding images to `/assets`
6. Create mobile-responsive version
7. Add analytics tracking

These can be added incrementally without breaking current functionality.
