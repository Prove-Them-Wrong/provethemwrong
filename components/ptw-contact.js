/**
 * PTW Contact Component
 * Contact section with info sidebar and tabbed form with HubSpot integration
 */
class PTWContact extends HTMLElement {
  constructor() {
    super();
    this.currentTab = 'client';
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <section id="contact" class="section contact-section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h3>LET'S PROVE THEM WRONG</h3>
              <p>Ready to build something that matters? Whether you need software or want to launch your tech career, we're here.</p>
              <ul class="contact-details">
                <li>📧 <a href="mailto:hello@provethemwrong.now">hello@provethemwrong.now</a></li>
                <li>📍 Durham, NC (Triangle Area)</li>
                <li>🔗 <a href="https://www.linkedin.com/in/eugene-s-59352b1a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><ptw-coffee></ptw-coffee></li>
              </ul>
            </div>
            
            <div class="contact-form">
              <div class="form-tabs">
                <button class="form-tab active" data-tab="client">I'm a Client</button>
                <button class="form-tab" data-tab="developer">I'm a Developer</button>
              </div>
              
              <form id="contact-form">
                <div class="form-group">
                  <label for="name">Your Name *</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group" id="org-field">
                  <label for="organization">Organization</label>
                  <input type="text" id="organization" name="organization">
                </div>
                <div class="form-group" id="interest-field">
                  <label for="interest">What are you interested in?</label>
                  <select id="interest" name="interest">
                    <option value="">Select...</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI Applications</option>
                    <option value="mobile">Mobile App</option>
                    <option value="crm">CRM Integration</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Tell us more</label>
                  <textarea id="message" name="message" placeholder="What's the vision? What problem are you solving?"></textarea>
                </div>
                <input type="hidden" id="form-type" name="form_type" value="client">
                <button type="submit" class="form-submit">SEND MESSAGE →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupEventListeners() {
    // Tab switching
    const tabs = this.querySelectorAll('.form-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
    });

    // Form submission
    const form = this.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  switchTab(type) {
    this.currentTab = type;
    
    // Update tab styles
    this.querySelectorAll('.form-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === type);
    });

    // Update form type hidden field
    this.querySelector('#form-type').value = type;

    // Update form fields based on tab
    const orgField = this.querySelector('#org-field');
    const interestField = this.querySelector('#interest-field');
    const interestSelect = this.querySelector('#interest');
    const messageTextarea = this.querySelector('#message');

    if (type === 'developer') {
      orgField.querySelector('label').textContent = 'Current Role/Background';
      interestField.querySelector('label').textContent = 'What interests you?';
      interestSelect.innerHTML = `
        <option value="">Select...</option>
        <option value="academy">Developer Academy</option>
        <option value="mentorship">1:1 Mentorship</option>
        <option value="career">Career Transition</option>
        <option value="portfolio">Portfolio Building</option>
      `;
      messageTextarea.placeholder = 'Tell us about your coding journey and goals.';
    } else {
      orgField.querySelector('label').textContent = 'Organization';
      interestField.querySelector('label').textContent = 'What are you interested in?';
      interestSelect.innerHTML = `
        <option value="">Select...</option>
        <option value="web">Web Development</option>
        <option value="ai">AI Applications</option>
        <option value="mobile">Mobile App</option>
        <option value="crm">CRM Integration</option>
        <option value="other">Something Else</option>
      `;
      messageTextarea.placeholder = "What's the vision? What problem are you solving?";
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    const formData = {
      fields: [
        { name: 'firstname', value: this.querySelector('#name').value },
        { name: 'email', value: this.querySelector('#email').value },
        { name: 'company', value: this.querySelector('#organization').value },
        { name: 'message', value: this.querySelector('#message').value },
        { name: 'interest', value: this.querySelector('#interest').value },
        { name: 'form_type', value: this.querySelector('#form-type').value }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/244671868/15190433-6fdf-4937-a315-93cbe3adc9b3',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        alert("Message sent! We'll be in touch soon. Let's prove them wrong together. 💪");
        this.querySelector('#contact-form').reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Something went wrong. Please email us directly at hello@provethemwrong.now');
    }
  }
}

customElements.define('ptw-contact', PTWContact);
