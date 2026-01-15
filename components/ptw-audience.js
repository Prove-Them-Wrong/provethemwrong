/**
 * PTW Audience Component
 * "Who We Serve" section with audience cards
 */
class PTWAudience extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const audiences = [
      { emoji: '✊', title: 'POC-Led Organizations' },
      { emoji: '❤️', title: 'Nonprofits' },
      { emoji: '🏳️‍🌈', title: 'LGBTQ+ Businesses' },
      { emoji: '♿', title: 'Disability-Led' },
      { emoji: '🌍', title: 'Immigrant Founders' },
      { emoji: '👩‍💻', title: 'Women in Tech' },
      { emoji: '🔥', title: 'Burned by Cheap Solutions' },
      { emoji: '🚀', title: 'Mission-Driven Startups' }
    ];

    this.innerHTML = `
      <section id="about" class="section section-alt">
        <div class="container">
          <div class="section-header">
            <p class="section-label">Who We Serve</p>
            <h2 class="section-title">BUILT FOR UNDERDOGS</h2>
          </div>
          <div class="audience-grid">
            ${audiences.map(audience => `
              <div class="audience-card">
                <div class="audience-emoji">${audience.emoji}</div>
                <h4 class="audience-title">${audience.title}</h4>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-audience', PTWAudience);
