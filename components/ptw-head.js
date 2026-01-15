/**
 * PTW Head Component
 * Dynamically injects head elements (meta tags, SEO, fonts, analytics)
 * Uses configuration from config/site.config.js
 */
import siteConfig from '../config/site.config.js';

class PTWHead extends HTMLElement {
  constructor() {
    super();
    this.config = { ...siteConfig };
  }

  static get observedAttributes() {
    return [
      'title',
      'description',
      'keywords',
      'og-title',
      'og-description',
      'og-image',
      'twitter-title',
      'twitter-description',
      'twitter-image',
      'canonical',
      'robots',
      'ga-id'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.updateConfig(name, newValue);
    }
  }

  connectedCallback() {
    // Apply any attribute overrides
    this.applyAttributeOverrides();
    // Inject head elements
    this.injectHeadElements();
  }

  applyAttributeOverrides() {
    // Override config with any attributes set on the element
    if (this.hasAttribute('title')) {
      this.config.meta.title = this.getAttribute('title');
    }
    if (this.hasAttribute('description')) {
      this.config.meta.description = this.getAttribute('description');
    }
    if (this.hasAttribute('keywords')) {
      this.config.meta.keywords = this.getAttribute('keywords');
    }
    if (this.hasAttribute('og-title')) {
      this.config.openGraph.title = this.getAttribute('og-title');
    }
    if (this.hasAttribute('og-description')) {
      this.config.openGraph.description = this.getAttribute('og-description');
    }
    if (this.hasAttribute('og-image')) {
      this.config.openGraph.image = this.getAttribute('og-image');
    }
    if (this.hasAttribute('twitter-title')) {
      this.config.twitter.title = this.getAttribute('twitter-title');
    }
    if (this.hasAttribute('twitter-description')) {
      this.config.twitter.description = this.getAttribute('twitter-description');
    }
    if (this.hasAttribute('twitter-image')) {
      this.config.twitter.image = this.getAttribute('twitter-image');
    }
    if (this.hasAttribute('canonical')) {
      this.config.site.url = this.getAttribute('canonical');
    }
    if (this.hasAttribute('robots')) {
      this.config.meta.robots = this.getAttribute('robots');
    }
    if (this.hasAttribute('ga-id')) {
      this.config.analytics.googleAnalyticsId = this.getAttribute('ga-id');
    }
  }

  updateConfig(name, value) {
    const mapping = {
      'title': () => this.config.meta.title = value,
      'description': () => this.config.meta.description = value,
      'keywords': () => this.config.meta.keywords = value,
      'og-title': () => this.config.openGraph.title = value,
      'og-description': () => this.config.openGraph.description = value,
      'og-image': () => this.config.openGraph.image = value,
      'twitter-title': () => this.config.twitter.title = value,
      'twitter-description': () => this.config.twitter.description = value,
      'twitter-image': () => this.config.twitter.image = value,
      'canonical': () => this.config.site.url = value,
      'robots': () => this.config.meta.robots = value,
      'ga-id': () => this.config.analytics.googleAnalyticsId = value
    };

    if (mapping[name]) {
      mapping[name]();
      // Re-inject if already connected
      if (this.isConnected) {
        this.injectHeadElements();
      }
    }
  }

  injectHeadElements() {
    const head = document.head;
    const { site, meta, openGraph, twitter, geo, contact, social, business, assets, analytics, fonts, preconnect, dnsPrefetch } = this.config;

    // Remove any previously injected elements
    this.removeInjectedElements();

    // Create a document fragment for batch insertion
    const fragment = document.createDocumentFragment();

    // Preconnect links
    preconnect.forEach(url => {
      const link = this.createElement('link', { rel: 'preconnect', href: url });
      if (url.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      fragment.appendChild(link);
    });

    // DNS Prefetch
    dnsPrefetch.forEach(url => {
      fragment.appendChild(this.createElement('link', { rel: 'dns-prefetch', href: url }));
    });

    // Primary Meta Tags
    fragment.appendChild(this.createElement('title', {}, meta.title));
    fragment.appendChild(this.createElement('meta', { name: 'title', content: meta.title }));
    fragment.appendChild(this.createElement('meta', { name: 'description', content: meta.description }));
    fragment.appendChild(this.createElement('meta', { name: 'keywords', content: meta.keywords }));
    fragment.appendChild(this.createElement('meta', { name: 'author', content: meta.author }));
    fragment.appendChild(this.createElement('meta', { name: 'robots', content: meta.robots }));
    fragment.appendChild(this.createElement('link', { rel: 'canonical', href: site.url }));

    // Open Graph
    fragment.appendChild(this.createElement('meta', { property: 'og:type', content: openGraph.type }));
    fragment.appendChild(this.createElement('meta', { property: 'og:url', content: site.url }));
    fragment.appendChild(this.createElement('meta', { property: 'og:title', content: openGraph.title }));
    fragment.appendChild(this.createElement('meta', { property: 'og:description', content: openGraph.description }));
    fragment.appendChild(this.createElement('meta', { property: 'og:image', content: site.url + openGraph.image }));
    fragment.appendChild(this.createElement('meta', { property: 'og:locale', content: site.locale }));
    fragment.appendChild(this.createElement('meta', { property: 'og:site_name', content: site.name }));

    // Twitter Card
    fragment.appendChild(this.createElement('meta', { property: 'twitter:card', content: twitter.card }));
    fragment.appendChild(this.createElement('meta', { property: 'twitter:url', content: site.url }));
    fragment.appendChild(this.createElement('meta', { property: 'twitter:title', content: twitter.title }));
    fragment.appendChild(this.createElement('meta', { property: 'twitter:description', content: twitter.description }));
    fragment.appendChild(this.createElement('meta', { property: 'twitter:image', content: site.url + twitter.image }));

    // Geo Tags
    fragment.appendChild(this.createElement('meta', { name: 'geo.region', content: geo.region }));
    fragment.appendChild(this.createElement('meta', { name: 'geo.placename', content: geo.placename }));
    fragment.appendChild(this.createElement('meta', { name: 'geo.position', content: geo.position }));
    fragment.appendChild(this.createElement('meta', { name: 'ICBM', content: geo.icbm }));

    // JSON-LD Structured Data
    const jsonLd = this.generateJsonLd();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd, null, 2);
    script.setAttribute('data-ptw-head', 'true');
    fragment.appendChild(script);

    // Google Fonts
    const fontFamilies = fonts.families.map(f => `family=${f.replace(/ /g, '+')}`).join('&');
    fragment.appendChild(this.createElement('link', {
      href: `https://fonts.googleapis.com/css2?${fontFamilies}&display=swap`,
      rel: 'stylesheet'
    }));

    // Stylesheet
    fragment.appendChild(this.createElement('link', { rel: 'stylesheet', href: '/styles/main.css' }));

    // Google Analytics
    if (analytics.googleAnalyticsId && analytics.googleAnalyticsId !== 'G-XXXXXXXXXX') {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}`;
      gaScript.setAttribute('data-ptw-head', 'true');
      fragment.appendChild(gaScript);

      const gaInit = document.createElement('script');
      gaInit.setAttribute('data-ptw-head', 'true');
      gaInit.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analytics.googleAnalyticsId}');
      `;
      fragment.appendChild(gaInit);
    }

    // Append all elements to head
    head.appendChild(fragment);
  }

  createElement(tag, attributes = {}, textContent = null) {
    const element = document.createElement(tag);
    element.setAttribute('data-ptw-head', 'true');
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'property' || key === 'name') {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    });

    // Handle meta tags specially
    if (tag === 'meta' && attributes.content) {
      element.setAttribute('content', attributes.content);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  generateJsonLd() {
    const { site, meta, contact, social, business, assets } = this.config;

    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": site.name,
      "alternateName": site.shortName,
      "description": meta.description,
      "url": site.url,
      "logo": site.url + assets.logo,
      "image": site.url + assets.ogImage,
      "telephone": contact.phone,
      "email": contact.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": contact.address.locality,
        "addressRegion": contact.address.region,
        "addressCountry": contact.address.country
      },
      "areaServed": business.areasServed.map(city => ({
        "@type": "City",
        "name": city
      })),
      "priceRange": business.priceRange,
      "sameAs": Object.values(social).filter(Boolean),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": business.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }))
      }
    };
  }

  removeInjectedElements() {
    // Remove all elements previously injected by this component
    document.querySelectorAll('[data-ptw-head="true"]').forEach(el => el.remove());
  }

  disconnectedCallback() {
    // Optionally clean up when component is removed
    // this.removeInjectedElements();
  }
}

customElements.define('ptw-head', PTWHead);
