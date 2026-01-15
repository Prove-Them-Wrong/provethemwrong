/**
 * PTW Marquee Component
 * Scrolling marquee with struck-through doubter quotes
 */
class PTWMarquee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const quotes = [
      '"You need a CS degree"',
      '"You\'re too old to code"',
      '"Nonprofits can\'t afford good tech"',
      '"You need 3 years experience"',
      '"You can\'t help people AND get paid"',
      '"Some people can\'t learn"'
    ];

    // Duplicate quotes for seamless infinite scroll
    const allQuotes = [...quotes, ...quotes];

    this.innerHTML = `
      <div class="marquee-section">
        <div class="marquee-track">
          ${allQuotes.map(quote => `<span class="marquee-item">${quote}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

customElements.define('ptw-marquee', PTWMarquee);
