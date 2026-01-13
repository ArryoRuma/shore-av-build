/**
 * Template Renderer
 * 
 * This module provides a simple template rendering system that converts
 * configuration data into HTML elements dynamically.
 * 
 * Usage:
 * 1. Define slide content in config.js under SLIDE_CONTENT
 * 2. Add data-template attribute to elements that should be rendered
 * 3. Call renderTemplate(slideKey) to populate the slide
 */

const TemplateRenderer = {
  /**
   * Render an info box (left column card)
   */
  renderInfoBox(data) {
    const hasBullets = data.bulletList && data.bulletList.length > 0;
    const flex1Class = hasBullets ? 'flex-1' : '';
    
    let html = `
      <div class="bg-white p-6 rounded-lg card-shadow border-t-4 border-${data.borderColor} ${flex1Class}">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-full bg-${data.iconBgColor} flex items-center justify-center text-${data.iconTextColor}">
            <i class="fas ${data.icon}"></i>
          </div>
          <h3 class="font-heading font-bold text-gray-700 text-lg">${data.title}</h3>
        </div>
        <p class="text-gray-600 leading-relaxed ${hasBullets ? 'mb-4' : ''}">
          ${data.content}
        </p>
    `;
    
    if (hasBullets) {
      html += '<ul class="space-y-3">';
      data.bulletList.forEach(item => {
        html += `
          <li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-secondary mt-1"></i>
            <p class="text-gray-600 text-sm">${item}</p>
          </li>
        `;
      });
      html += '</ul>';
    }
    
    html += '</div>';
    return html;
  },

  /**
   * Render a priority card (right column card)
   */
  renderPriorityCard(data) {
    return `
      <div class="bg-white p-6 rounded-lg card-shadow border-left-accent flex items-center gap-6">
        <div class="w-16 h-16 rounded-xl bg-${data.iconBgColor} flex-shrink-0 flex items-center justify-center text-${data.iconTextColor} text-2xl">
          <i class="fas ${data.icon}"></i>
        </div>
        <div>
          <h3 class="font-heading font-bold text-gray-800 text-xl mb-1">${data.title}</h3>
          <p class="text-gray-600">
            ${data.content}
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Main render function for slide templates
   */
  renderTemplate(slideKey) {
    const content = window.SLIDE_CONTENT[slideKey];
    if (!content) {
      console.warn(`No content found for slide key: ${slideKey}`);
      return;
    }

    // Render slide title
    const titleEl = document.querySelector('[data-template="slide-title"]');
    if (titleEl && content.title) {
      titleEl.innerHTML = content.title;
    }

    // Render slide subtitle
    const subtitleEl = document.querySelector('[data-template="slide-subtitle"]');
    if (subtitleEl && content.subtitle) {
      subtitleEl.textContent = content.subtitle;
    }

    // Render left column
    const leftColumnEl = document.querySelector('[data-template="left-column"]');
    if (leftColumnEl && content.leftColumn) {
      leftColumnEl.innerHTML = content.leftColumn
        .map(item => {
          if (item.type === 'info-box') {
            return this.renderInfoBox(item);
          }
          return '';
        })
        .join('');
    }

    // Render right column
    const rightColumnEl = document.querySelector('[data-template="right-column"]');
    if (rightColumnEl && content.rightColumn) {
      rightColumnEl.innerHTML = content.rightColumn
        .map(item => {
          if (item.type === 'priority-card') {
            return this.renderPriorityCard(item);
          }
          return '';
        })
        .join('');
    }

    // Update progress dots based on slide number
    if (content.slideNumber) {
      this.updateProgressDots(content.slideNumber);
    }
  },

  /**
   * Update progress indicator dots
   */
  updateProgressDots(activeSlide) {
    const dots = document.querySelectorAll('.slide-footer .progress-dot, .slide-footer .w-2.h-2.rounded-full');
    dots.forEach((dot, index) => {
      const slideNum = index + 1;
      if (slideNum === activeSlide) {
        dot.classList.remove('bg-gray-300');
        dot.classList.add('bg-primary');
      } else {
        dot.classList.remove('bg-primary');
        dot.classList.add('bg-gray-300');
      }
    });
  }
};

// Make renderer available globally
if (typeof window !== 'undefined') {
  window.TemplateRenderer = TemplateRenderer;
}
