/**
 * PTW Academy Component
 * Developer academy section with pricing and features
 */
class PTWAcademy extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const features = [
      {
        icon: '💼',
        title: 'REAL CLIENT WORK',
        desc: 'Build your portfolio with actual projects for real organizations'
      },
      {
        icon: '👨‍🏫',
        title: 'SENIOR MENTORSHIP',
        desc: 'Learn from developers with 10+ years experience'
      },
      {
        icon: '🎯',
        title: 'JOB PLACEMENT',
        desc: 'Career services, interview prep, salary negotiation'
      },
      {
        icon: '🌍',
        title: 'COMMUNITY',
        desc: 'Join 100+ developers supporting each other'
      },
      {
        icon: '📚',
        title: 'CURRICULUM',
        desc: 'Based on The Odin Project with AI-enhanced learning'
      },
      {
        icon: '🏆',
        title: '16-ROUND PROCESS',
        desc: 'Rigorous selection for serious candidates only'
      }
    ];

    this.innerHTML = `
      <section id="academy" class="academy-hero section">
        <div class="container">
          <p class="section-label">Developer Academy</p>
          <h2 class="section-title" style="margin-bottom: 32px;">LAUNCH YOUR CAREER</h2>
          <div class="academy-price">$3<span>/mo</span></div>
          <p class="academy-tagline">Not $15,000 bootcamp debt. Real projects. Real mentorship. Real careers.</p>
          
          <div class="academy-features">
            ${features.map(feature => `
              <div class="feature-card">
                <div class="feature-icon">${feature.icon}</div>
                <h4 class="feature-title">${feature.title}</h4>
                <p class="feature-desc">${feature.desc}</p>
              </div>
            `).join('')}
          </div>
          
          <a href="#contact" class="btn btn-primary" style="margin-top: 48px;">Apply to the Academy →</a>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-academy', PTWAcademy);
