/**
 * PTW Labs Component
 * Innovation hub section with lab cards
 */
class PTWLabs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const labs = [
      {
        emoji: '🧠',
        name: 'AI LEARNING',
        desc: 'Adaptive tutoring systems on The Odin Project curriculum'
      },
      {
        emoji: '📊',
        name: 'FINANCIAL MODELS',
        desc: 'Instant modeling tools for startups and nonprofits'
      },
      {
        emoji: '📲',
        name: 'MOBILE',
        desc: 'Cross-platform apps for community impact'
      },
      {
        emoji: '🔌',
        name: 'CRM',
        desc: 'Integrations that actually get used'
      },
      {
        emoji: '🎮',
        name: 'GAMEDEV',
        desc: 'Educational games for engagement'
      },
      {
        emoji: '⚡',
        name: 'APIS',
        desc: 'Backend services and integrations'
      }
    ];

    this.innerHTML = `
      <section id="labs" class="section section-alt">
        <div class="container">
          <div class="section-header">
            <p class="section-label">Innovation Hub</p>
            <h2 class="section-title">PTW LABS</h2>
          </div>
          <div class="labs-grid">
            ${labs.map(lab => `
              <div class="lab-card">
                <div class="lab-emoji">${lab.emoji}</div>
                <h3 class="lab-name">${lab.name}</h3>
                <p class="lab-desc">${lab.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-labs', PTWLabs);
