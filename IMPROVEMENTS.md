# Codebase Cleanup Ideas

#TODO: 1. **Bind Slide Chrome to `SITE_CONFIG`**
   - Every slide (header, subtitle, footer) still hard-codes church name, proposal title, and dates. Follow the pattern already used on the landing page by inserting `.config-*` placeholders and a short script that copies values from `window.SITE_CONFIG`. One edit in `js/config.js` will then propagate across the entire deck.

#TODO: 2. **Extract Shared Slide Frame**
   - Slides 2-11 repeat the exact same header, body wrapper, footer, and progress dots. Wrap that markup in a small template helper (or include partial) that accepts `{ title, subtitle, activeIndex }` and renders the chrome dynamically. This prevents copy/paste drift, simplifies updates, and lets you toggle features (like progress indicators) from a single place.

#TODO: 3. **Generate Slide Index from Data**
   - The slide grid in `index.html` is a long block of numbered `<a>` tags. Store slide metadata—number, label, url—in `js/config.js` (or a new `slides.js`) and map over it to render both the landing grid and any navigation menus. Adding or renaming a slide then becomes a single data change instead of editing multiple HTML fragments.

#TODO: 4. **Introduce Real Theme Tokens**
   - `css/style.css` still relies on literal hex colors, shadow values, and spacing. Declare a `:root` block with tokens such as `--color-primary`, `--shadow-sm`, `--space-lg`, and replace hard-coded values with `var(--color-primary)` usage. This honors the design doc, enables rapid palette changes, and lays groundwork for future theming (e.g., dark mode).

#TODO: 5. **Modularize Navigation Controls**
   - `js/nav.js` mixes behavior and presentation via inline `element.style.*` assignments and a hard-coded `const total = 11`. Move styling to CSS (e.g., `.slide-nav`, `.slide-nav__button`) and read the slide count from the shared slide metadata so it stays accurate automatically. While refactoring, break the script into small functions (`goToSlide`, `updateFullscreenIcon`, etc.) to improve readability and reuse.
