/**
 * PTW Team Component
 * Team section with grid of team member cards
 */

class PTWTeam extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const team = [
      {
        icon: '👑',
        title: 'Head Honcho',
        teamname: 'Eugene'
      },
      {
        icon: '📣',
        title: 'PR and HR',
        teamname: 'Margie'
      },
      {
        icon: '🤖',
        title: 'Product Engineer',
        teamname: 'Aaron'
      },
      {
        icon: '🤖',
        title: 'Product Engineer',
        teamname: 'Nick'
      },
      {
        icon: '🤖',
        title: 'Product Engineer',
        teamname: 'London'
      }
    ];

    this.innerHTML = `
      <section id="teams" class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label">Who We Are</p>
            <h2 class="section-title">TEAM WITH VISION</h2>
          </div>
          <div class="teams-grid">
            ${team.map(member => `
              <div class="team-card">
                <div class="team-icon">${member.icon}</div>
                <h3 class="team-title">${member.teamname}</h3>
                <p class="team-desc">${member.title}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-team', PTWTeam);
