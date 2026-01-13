# Template System Usage Examples

This document provides practical examples of using the template system for different slide types.

## Example 1: Simple Two-Column Layout (Like Slide 3)

### Config Structure
```javascript
SLIDE_CONTENT.mySlide = {
  slideNumber: 5,
  title: "My Custom <span class='text-primary'>Slide</span>",
  subtitle: "A subtitle that describes this slide",
  
  leftColumn: [
    {
      type: "info-box",
      borderColor: "primary",
      icon: "fa-lightbulb",
      iconBgColor: "yellow-50",
      iconTextColor: "yellow-600",
      title: "Key Insight",
      content: "This is important information that needs highlighting."
    },
    {
      type: "info-box",
      borderColor: "gray-400",
      icon: "fa-cog",
      iconBgColor: "gray-100",
      iconTextColor: "gray-600",
      title: "Technical Details",
      content: "Additional context goes here.",
      bulletList: [
        "Point number one",
        "Point number two",
        "Point number three"
      ]
    }
  ],
  
  rightColumn: [
    {
      type: "priority-card",
      icon: "fa-rocket",
      iconBgColor: "blue-50",
      iconTextColor: "blue-600",
      title: "Fast Performance",
      content: "Description with <span class='font-semibold text-primary'>highlighted text</span>"
    },
    {
      type: "priority-card",
      icon: "fa-shield-alt",
      iconBgColor: "green-50",
      iconTextColor: "green-600",
      title: "Secure by Default",
      content: "Another description here"
    },
    {
      type: "priority-card",
      icon: "fa-heart",
      iconBgColor: "red-50",
      iconTextColor: "red-600",
      title: "User Friendly",
      content: "Final description"
    }
  ]
};
```

### Minimal HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Custom Slide</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
    <link href="../css/style.css" rel="stylesheet" />
    <script src="../js/config.js"></script>
    <script src="../js/template-renderer.js"></script>
</head>
<body>
    <div class="slide-container">
        <!-- Header -->
        <div class="w-full h-2 bg-primary"></div>
        <div class="w-full h-16 flex items-center justify-between px-12 border-b border-gray-100 bg-white">
            <div class="flex items-center gap-3">
                <i class="fas fa-church text-secondary text-xl"></i>
                <span class="font-heading font-semibold text-gray-500 uppercase tracking-widest text-sm config-company-name"></span>
            </div>
            <span class="text-gray-400 text-sm config-proposal-title"></span>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col px-16 py-10 bg-gray-50 relative">
            <div class="mb-8 border-b border-gray-200 pb-4">
                <h1 class="font-heading text-4xl font-bold text-gray-800" data-template="slide-title"></h1>
                <p class="text-gray-500 mt-2 text-lg" data-template="slide-subtitle"></p>
            </div>
            
            <div class="flex-1 grid grid-cols-12 gap-8">
                <div class="col-span-4 flex flex-col gap-6" data-template="left-column"></div>
                <div class="col-span-8 grid grid-rows-3 gap-4" data-template="right-column"></div>
            </div>
        </div>

        <!-- Footer -->
        <div class="w-full py-4 px-12 flex justify-between items-center bg-white border-t border-gray-200">
            <p class="text-xs text-gray-400 config-footer-text"></p>
            <div class="flex gap-2">
                <!-- Progress dots here -->
            </div>
        </div>
    </div>

    <script src="../js/nav.js"></script>
    <script>
        // Populate config
        if (window.SITE_CONFIG) {
            document.querySelector('.config-company-name').textContent = window.SITE_CONFIG.company.name;
            document.querySelector('.config-proposal-title').textContent = window.SITE_CONFIG.proposal.title;
            document.querySelector('.config-footer-text').textContent = 
                `${window.SITE_CONFIG.company.name} - ${window.SITE_CONFIG.company.sector}`;
        }

        // Render template
        if (window.TemplateRenderer) {
            window.TemplateRenderer.renderTemplate('mySlide');
        }
    </script>
</body>
</html>
```

## Example 2: Different Content Variations

### Left Column with No Bullets
```javascript
{
  type: "info-box",
  borderColor: "primary",
  icon: "fa-info-circle",
  iconBgColor: "blue-50",
  iconTextColor: "primary",
  title: "Simple Box",
  content: "Just text, no bullets"
  // Note: bulletList is omitted
}
```

### Left Column with Bullets
```javascript
{
  type: "info-box",
  borderColor: "green-400",
  icon: "fa-check-circle",
  iconBgColor: "green-50",
  iconTextColor: "green-600",
  title: "Benefits",
  content: "These are the main advantages:",
  bulletList: [
    "Benefit one",
    "Benefit two",
    "Benefit three"
  ]
}
```

### Priority Card with Rich HTML
```javascript
{
  type: "priority-card",
  icon: "fa-star",
  iconBgColor: "yellow-50",
  iconTextColor: "yellow-500",
  title: "Premium Feature",
  content: "This includes <span class='font-semibold text-primary'>highlighted text</span>, " +
           "<span class='font-bold'>bold text</span>, and " +
           "<span class='italic'>italic text</span> for emphasis."
}
```

## Example 3: Color Combinations

### Professional Blues
```javascript
// Info box
borderColor: "primary",
iconBgColor: "blue-50",
iconTextColor: "primary"

// Priority card
iconBgColor: "indigo-50",
iconTextColor: "indigo-600"
```

### Warm Accent
```javascript
borderColor: "orange-400",
iconBgColor: "orange-50",
iconTextColor: "orange-500"
```

### Success/Positive
```javascript
borderColor: "green-400",
iconBgColor: "green-50",
iconTextColor: "green-600"
```

### Warning/Attention
```javascript
borderColor: "yellow-400",
iconBgColor: "yellow-50",
iconTextColor: "yellow-600"
```

### Neutral/Subtle
```javascript
borderColor: "gray-400",
iconBgColor: "gray-100",
iconTextColor: "gray-600"
```

## Example 4: Font Awesome Icons

Common icons for AV/tech presentations:

**Audio/Video:**
- `fa-microphone-lines` - Microphones
- `fa-video` - Video/cameras
- `fa-speaker` or `fa-volume-up` - Speakers
- `fa-headphones` - Headphones/monitoring

**Technical:**
- `fa-network-wired` - Network/infrastructure
- `fa-server` - Servers/backend
- `fa-cog` or `fa-gear` - Settings/configuration
- `fa-code` - Development/programming

**People/Users:**
- `fa-users` - Team/group
- `fa-user` - Individual user
- `fa-users-gear` - Operations team
- `fa-chalkboard-user` - Training

**Process/Strategy:**
- `fa-drafting-compass` - Design/planning
- `fa-rocket` - Launch/speed
- `fa-lightbulb` - Ideas/innovation
- `fa-shield-alt` - Security/protection

**Status/Quality:**
- `fa-check-circle` - Approved/complete
- `fa-star` - Premium/featured
- `fa-award` - Achievement/quality
- `fa-heart` - Favorite/user love

## Example 5: Full Slide Configuration

Complete example for a technical slide:

```javascript
SLIDE_CONTENT.slide6 = {
  slideNumber: 6,
  title: "Technical <span class='text-primary'>Architecture</span>",
  subtitle: "System design and infrastructure overview",
  
  leftColumn: [
    {
      type: "info-box",
      borderColor: "gray-400",
      icon: "fa-info-circle",
      iconBgColor: "gray-100",
      iconTextColor: "gray-600",
      title: "Overview",
      content: "Our architecture follows industry best practices for reliability and scalability."
    },
    {
      type: "info-box",
      borderColor: "primary",
      icon: "fa-layer-group",
      iconBgColor: "blue-50",
      iconTextColor: "primary",
      title: "Core Components",
      content: "The system consists of:",
      bulletList: [
        "Frontend presentation layer",
        "Backend processing services",
        "Database persistence",
        "Caching infrastructure"
      ]
    }
  ],
  
  rightColumn: [
    {
      type: "priority-card",
      icon: "fa-bolt",
      iconBgColor: "yellow-50",
      iconTextColor: "yellow-600",
      title: "High Performance",
      content: "Optimized for <span class='font-semibold text-primary'>sub-100ms response times</span> under normal load conditions."
    },
    {
      type: "priority-card",
      icon: "fa-shield-alt",
      iconBgColor: "green-50",
      iconTextColor: "green-600",
      title: "Enterprise Security",
      content: "Built with <span class='font-semibold text-primary'>zero-trust principles</span> and end-to-end encryption."
    },
    {
      type: "priority-card",
      icon: "fa-chart-line",
      iconBgColor: "purple-50",
      iconTextColor: "purple-600",
      title: "Scalable Design",
      content: "Horizontal scaling supports growth from <span class='font-semibold text-primary'>100 to 100,000 users</span>."
    }
  ]
};
```

## Tips for Content Writing

1. **Use HTML for emphasis** - Add `<span class="font-semibold text-primary">` for key terms
2. **Keep titles short** - 1-4 words works best
3. **Bullet points** - Limit to 3-4 items per box
4. **Content length** - Aim for 1-2 sentences per card
5. **Icon choice** - Pick icons that clearly represent the concept
6. **Color consistency** - Use similar colors for related concepts

## Quick Reference: data-template Attributes

| Attribute | Purpose | Used In |
|-----------|---------|---------|
| `data-template="slide-title"` | Main slide heading | H1 element |
| `data-template="slide-subtitle"` | Subtitle/description | P element |
| `data-template="left-column"` | Container for info boxes | Div (col-span-4) |
| `data-template="right-column"` | Container for priority cards | Div (col-span-8) |

## Common Pitfalls

❌ **Wrong**: Hardcoding content in HTML
```html
<h1>Project Understanding</h1>
```

✅ **Right**: Using template attribute
```html
<h1 data-template="slide-title"></h1>
```

❌ **Wrong**: Missing renderer call
```html
<!-- Missing the renderTemplate call -->
<script src="../js/template-renderer.js"></script>
```

✅ **Right**: Include renderer call
```html
<script>
if (window.TemplateRenderer) {
    window.TemplateRenderer.renderTemplate('slide3');
}
</script>
```

---

Need more examples? Check the working implementation in `/slides/3.html` and `/js/config.js`.
