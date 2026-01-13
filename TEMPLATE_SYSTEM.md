# Template System Documentation

## Overview

The Shore AV Build presentation system now includes a **component-style template system** that allows you to create data-driven slides without editing HTML. This approach is similar to modern frameworks like Vue.js or React, but uses plain HTML and JavaScript.

## Benefits

✅ **Single Source of Truth**: All slide content lives in `config.js`  
✅ **No HTML Editing**: Create new proposals by only updating config  
✅ **Reusable Components**: Consistent card and box layouts across slides  
✅ **Easy Maintenance**: Update content in one place, reflects everywhere  
✅ **No Build Step**: Pure HTML/CSS/JS - works immediately  

## How It Works

### 1. Architecture

The template system consists of three parts:

1. **config.js** - Contains all slide content data
2. **template-renderer.js** - Converts data into HTML
3. **HTML template** - Skeleton with `data-template` attributes

### 2. File Structure

```
js/
├── config.js              # Content data (SLIDE_CONTENT)
├── template-renderer.js   # Rendering logic
└── nav.js                 # Navigation (unchanged)

slides/
└── 3.html                 # Template-driven slide
```

## Using the Template System

### Example: Slide 3 (Project Understanding)

#### Step 1: Define Content in config.js

Add your slide content to the `SLIDE_CONTENT` object:

```javascript
const SLIDE_CONTENT = {
  slide3: {
    slideNumber: 3,
    title: "Project <span class='text-primary'>Understanding</span>",
    subtitle: "Current state assessment and strategic objectives",
    
    leftColumn: [
      {
        type: "info-box",
        borderColor: "gray-400",
        icon: "fa-search-location",
        iconBgColor: "gray-100",
        iconTextColor: "gray-600",
        title: "Current Context",
        content: "Your content here..."
      }
    ],
    
    rightColumn: [
      {
        type: "priority-card",
        icon: "fa-microphone-lines",
        iconBgColor: "indigo-50",
        iconTextColor: "indigo-600",
        title: "Audio Performance",
        content: "Your content with <span class='font-semibold text-primary'>highlights</span>"
      }
    ]
  }
};
```

#### Step 2: Create HTML Template

Create a slide with `data-template` attributes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard head elements -->
    <script src="../js/config.js"></script>
    <script src="../js/template-renderer.js"></script>
</head>
<body>
    <div class="slide-container">
        <!-- Header (standard across all slides) -->
        
        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col px-16 py-10 bg-gray-50">
            <!-- Title & Subtitle -->
            <div class="mb-8 border-b border-gray-200 pb-4">
                <h1 data-template="slide-title"></h1>
                <p data-template="slide-subtitle"></p>
            </div>
            
            <!-- Content Grid -->
            <div class="flex-1 grid grid-cols-12 gap-8">
                <div class="col-span-4 flex flex-col gap-6" data-template="left-column">
                    <!-- Auto-populated -->
                </div>
                <div class="col-span-8 grid grid-rows-3 gap-4" data-template="right-column">
                    <!-- Auto-populated -->
                </div>
            </div>
        </div>
        
        <!-- Footer (standard) -->
    </div>
    
    <script src="../js/nav.js"></script>
    <script>
        // Standard config population
        if (window.SITE_CONFIG) {
            // ... populate company name, etc.
        }
        
        // Render template content
        if (window.TemplateRenderer) {
            window.TemplateRenderer.renderTemplate('slide3');
        }
    </script>
</body>
</html>
```

## Component Types

### Info Box (Left Column)

Used for contextual information and strategies.

**Data Structure:**
```javascript
{
  type: "info-box",
  borderColor: "primary",        // Tailwind color class
  icon: "fa-icon-name",          // Font Awesome icon
  iconBgColor: "blue-50",        // Background color
  iconTextColor: "primary",      // Icon color
  title: "Box Title",
  content: "Your content...",
  bulletList: [                  // Optional
    "Bullet point 1",
    "Bullet point 2"
  ]
}
```

**Visual Result:**
- Card with top border
- Icon with rounded background
- Title and body text
- Optional bullet list with checkmarks

### Priority Card (Right Column)

Used for highlighting key priorities or features.

**Data Structure:**
```javascript
{
  type: "priority-card",
  icon: "fa-icon-name",
  iconBgColor: "indigo-50",
  iconTextColor: "indigo-600",
  title: "Priority Title",
  content: "Content with <span class='font-semibold text-primary'>highlights</span>"
}
```

**Visual Result:**
- Horizontal layout card
- Large icon on left (16x16)
- Title and content on right
- Left accent border

## Customization Guide

### Changing Slide 3 Content

Edit `/js/config.js` and update the `SLIDE_CONTENT.slide3` object:

```javascript
// Change the title
title: "New <span class='text-primary'>Title</span>",

// Change a card title
leftColumn: [
  {
    // ... other properties
    title: "Your New Title",
    content: "Your new content"
  }
]

// Add another priority
rightColumn: [
  // ... existing items
  {
    type: "priority-card",
    icon: "fa-network-wired",
    iconBgColor: "purple-50",
    iconTextColor: "purple-600",
    title: "New Priority",
    content: "Description here"
  }
]
```

### Creating a New Template Slide

1. **Add content to config.js:**
   ```javascript
   SLIDE_CONTENT.slide4 = {
     slideNumber: 4,
     title: "My Slide",
     // ... define structure
   }
   ```

2. **Copy slide 3.html** to your new slide

3. **Update the render call:**
   ```javascript
   window.TemplateRenderer.renderTemplate('slide4');
   ```

4. **Adjust the template structure** to match your content needs

### Extending the Renderer

To add new component types, edit `/js/template-renderer.js`:

```javascript
// Add a new render function
renderMyComponent(data) {
  return `
    <div class="my-custom-component">
      <h3>${data.title}</h3>
      <p>${data.content}</p>
    </div>
  `;
}

// Update the renderTemplate function to use it
if (item.type === 'my-component') {
  return this.renderMyComponent(item);
}
```

## Available Tailwind Colors

The template system uses Tailwind CSS color classes:

**Primary Colors:**
- `primary` - Main brand blue (#2E5C8A)
- `secondary` - Accent blue (#4A90E2)

**Background Colors:**
- `gray-50`, `gray-100`, `gray-200`, etc.
- `blue-50`, `indigo-50`, `teal-50`, `orange-50`, `purple-50`, etc.

**Text Colors:**
- `gray-600`, `gray-700`, `gray-800`
- `indigo-600`, `teal-600`, `orange-500`, etc.

## Best Practices

### ✅ DO:

- Keep all content in `config.js` for easy updates
- Use semantic icon names from Font Awesome
- Use HTML in content for emphasis (`<span class="font-semibold text-primary">`)
- Test changes by refreshing the browser (no build needed)
- Use consistent color schemes across similar components

### ❌ DON'T:

- Hardcode content directly in HTML templates
- Mix content and structure (keep them separated)
- Use inline styles (use Tailwind classes)
- Forget to update `slideNumber` for progress dots

## Troubleshooting

**Content not showing?**
- Check browser console for JavaScript errors
- Verify `data-template` attributes match renderer expectations
- Ensure config.js is loaded before template-renderer.js

**Styling looks wrong?**
- Check Tailwind color classes are valid
- Verify CSS is loaded (check `<link>` tags)
- Test with browser dev tools

**Icons missing?**
- Verify Font Awesome CDN is loaded
- Check icon class names (should be like `fa-microphone-lines`)

## Migration Path

To convert existing slides to the template system:

1. **Analyze** the slide structure and identify repeating patterns
2. **Extract** content into config.js data structures
3. **Create** renderer functions for each component type
4. **Replace** hardcoded HTML with `data-template` containers
5. **Test** the rendered output matches the original

## Future Enhancements

Potential additions to the template system:

- [ ] Add more component types (timeline, statistics, testimonials)
- [ ] Create slide templates for all 11 slides
- [ ] Add data validation for config objects
- [ ] Create a visual config editor (optional web tool)
- [ ] Add support for dynamic image loading
- [ ] Template inheritance for shared layouts

## Support

For questions or issues with the template system:
1. Check this documentation
2. Review the code comments in `template-renderer.js`
3. Examine the working example in slide 3

---

**Version:** 1.0  
**Last Updated:** January 2026  
**Author:** Shore AV Build Team
