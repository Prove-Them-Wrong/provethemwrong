/**
 * PTW Manifesto Component
 * Manifesto section with animated lines and glowing tagline
 */
class PTWManifesto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const lines = [
      { text: 'They said you need <span class="strike">3 years experience</span>.' },
      { text: 'They said you can\'t help people <span class="strike">AND get paid</span>.' },
      { text: 'They said some people <span class="strike">can\'t learn</span>.' },
      { text: 'They said AI will <span class="strike">take your job</span>.' },
      { text: 'They said you\'re <span class="strike">too old. Too young. Too different.</span>' },
      { text: 'They called it a disability. It\'s your <span class="highlight">superpower</span>.' },
      { text: 'They wanted you to hide. To dim your colors.' },
      { text: 'They said the system works. That you just need to <span class="strike">try harder</span>.' }
    ];

    this.innerHTML = `
      <section class="manifesto">
        <div class="container manifesto-lines">
          ${lines.map(line => `<p class="manifesto-line">${line.text}</p>`).join('')}
          <p class="manifesto-final">PROVE THEM WRONG.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-manifesto', PTWManifesto);
