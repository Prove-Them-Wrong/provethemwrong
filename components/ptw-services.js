/**
 * PTW Services Component
 * Services section with grid of service cards
 */
class PTWServices extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const services = [
      {
        icon: '🌐',
        title: 'WEB DEVELOPMENT',
        desc: 'Custom websites and web applications. React, Node.js, PostgreSQL. Fast, responsive, built to convert.',
        price: 'From $2,500'
      },
      {
        icon: '🤖',
        title: 'AI APPLICATIONS',
        desc: 'AI-enabled tools, chatbots, and automation. Claude, GPT, custom models. Make AI work for your mission.',
        price: 'From $3,500'
      },
      {
        icon: '📱',
        title: 'MOBILE APPS',
        desc: 'iOS and Android applications. React Native for cross-platform reach. Your audience in their pocket.',
        price: 'From $5,000'
      },
      {
        icon: '🔗',
        title: 'CRM INTEGRATION',
        desc: 'HubSpot, Salesforce, custom CRMs. Connect your systems. Automate your workflows.',
        price: 'From $2,500'
      },
      {
        icon: '💼',
        title: 'FINANCIAL MODELING',
        desc: 'Excel-based DCF, LBO, M&A models. Interactive dashboards. Data-driven decisions.',
        price: 'From $3,000'
      },
      {
        icon: '🔄',
        title: 'MONTHLY SUPPORT',
        desc: "Ongoing maintenance, updates, and enhancements. We don't ghost. We're in this together.",
        price: '$150-250/month'
      }
    ];

    this.innerHTML = `
      <section id="services" class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label">What We Build</p>
            <h2 class="section-title">SOFTWARE THAT MOVES</h2>
          </div>
          <div class="services-grid">
            ${services.map(service => `
              <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.desc}</p>
                <p class="service-price">${service.price}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-services', PTWServices);
