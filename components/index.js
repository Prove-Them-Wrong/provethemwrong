/**
 * PTW Components Loader
 * Imports and registers all Web Components
 */

// Import head component first (manages meta tags)
import './ptw-head.js';

// Import all body components
import './ptw-nav.js';
import './ptw-hero.js';
import './ptw-marquee.js';
import './ptw-services.js';
import './ptw-labs.js';
import './ptw-academy.js';
import './ptw-coffee.js';
import './ptw-manifesto.js';
import './ptw-team.js';
import './ptw-audience.js';
import './ptw-contact.js';
import './ptw-footer.js';

// Log when all components are loaded
console.log('✅ PTW Components loaded successfully');
