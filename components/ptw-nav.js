/**
 * PTW Navigation Component
 * Fixed navigation bar with logo, links, CTA, and mobile hamburger menu
 */
class PTWNav extends HTMLElement {
  constructor() {
    super();
    this.menuOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="container nav-inner">
          <div class="logo">
            <a href="/">
              <span class="blue">PROVE</span>
              <span class="purple">Them</span>
              <span class="red">Wrong</span>
            </a>
          </div>
          <ul class="nav-links">
            <li><a href="/#services">Services</a></li>
            <li><a href="/labs">PTW Labs</a></li>
            <li><a href="/academy">Academy</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
          <a href="#contact" class="nav-cta">GET STARTED</a>
          <div class="hamburger" aria-label="Toggle menu" role="button" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    `;
  }

  setupEventListeners() {
    const hamburger = this.querySelector('.hamburger');
    const navLinks = this.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => this.toggleMenu());
      hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleMenu();
        }
      });

      // Close menu when clicking a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (this.menuOpen) {
            this.toggleMenu();
          }
        });
      });
    }
  }

  toggleMenu() {
    const navLinks = this.querySelector('.nav-links');
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      navLinks.style.display = 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--black)';
      navLinks.style.flexDirection = 'column';
      navLinks.style.padding = '24px';
      navLinks.style.gap = '16px';
    } else {
      navLinks.style.display = '';
      navLinks.style.position = '';
      navLinks.style.top = '';
      navLinks.style.left = '';
      navLinks.style.right = '';
      navLinks.style.background = '';
      navLinks.style.flexDirection = '';
      navLinks.style.padding = '';
      navLinks.style.gap = '';
    }
  }
}

customElements.define('ptw-nav', PTWNav);

