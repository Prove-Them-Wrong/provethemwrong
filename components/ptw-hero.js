/**
 * PTW Hero Component
 * Hero section with animated title, subtitle, and CTA buttons
 */
class PTWHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="container hero-content">
          <p class="hero-eyebrow">They said it couldn't be done.</p>
          <h1 class="hero-title">
            <span class="word">PROVE</span>
            <span class="word">THEM</span>
            <span class="word">WRONG</span>
          </h1>
          <p class="hero-subtitle">
            Software development agency + developer academy. We build what you need. 
            We train who you'll hire. Enhanced support for nonprofits & underserved businesses.
          </p>
          <div class="hero-cta-group">
            <a href="#contact" class="btn btn-primary">Start Your Project →</a>
            <a href="#academy" class="btn btn-outline">Join the Academy</a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-hero', PTWHero);
