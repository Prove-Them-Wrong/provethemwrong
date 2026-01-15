/**
 * PTW Buy-Us-Coffee
 * Buy Us a Coffee CTA component
 */
class PTWCoffee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="coffee-embed">
        <div class="coffee-cta">
          <a href="https://www.buymeacoffee.com/getpaidtocode"><img src="https://img.buymeacoffee.com/button-api/?text=Buy Us A Coffee&emoji=🚀&slug=getpaidtocode&button_colour=f8ff01&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a>
        </div>
      </section>
    `;
  }
}

customElements.define('ptw-coffee', PTWCoffee);
