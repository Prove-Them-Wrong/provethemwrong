/**
 * PTW Footer Component
 * Footer with brand, navigation columns, and copyright
 */
class PTWFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo">
                <span class="blue">PROVE</span> 
                <span class="purple">THEM</span> 
                <span class="red">WRONG</span>
              </div>
              <p>Social enterprise software agency + developer academy. Built with purpose. Built with fire. 🔥</p>
            </div>
            <div class="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">AI Applications</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">CRM Integration</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>FOR DEVELOPERS</h4>
              <ul>
                <li><a href="/academy">Join Academy</a></li>
                <li><a href="/labs">PTW Labs</a></li>
                <li><a href="/contact">Apply Now</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="mailto:hello@provethemwrong.now">Email</a></li>
                <li><a href="https://www.linkedin.com/in/eugene-s-59352b1a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} Prove Them Wrong. Durham, NC.</p>
            <p>Built with purpose. For underdogs everywhere.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('ptw-footer', PTWFooter);
