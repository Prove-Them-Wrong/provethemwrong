# Pages Folder Reorganization Plan

## Overview

Moving all HTML pages into a `pages/` folder for cleaner project organization, with Vercel rewrites to maintain clean URLs.

## Current Structure

```
provethemwrong/
├── index.html          # Homepage
├── about.html          # About page
├── academy.html        # Academy page
├── team.html           # Team page
├── components/         # Web Components
├── config/             # Configuration
├── styles/             # CSS
└── ...
```

## Target Structure

```
provethemwrong/
├── pages/
│   ├── index.html      # Homepage
│   ├── about.html      # About page
│   ├── academy.html    # Academy page
│   └── team.html       # Team page
├── components/         # Web Components (unchanged)
├── config/             # Configuration (unchanged)
├── styles/             # CSS (unchanged)
└── vercel.json         # Updated with rewrites
```

## Changes Required

### 1. Move HTML Files to pages/

Files to move:
- `index.html` → `pages/index.html`
- `about.html` → `pages/about.html`
- `academy.html` → `pages/academy.html`
- `team.html` → `pages/team.html`

### 2. Update Paths in HTML Files

Since pages are now in a subdirectory, relative paths need updating:

| Old Path | New Path |
|----------|----------|
| `components/index.js` | `../components/index.js` |
| `styles/main.css` | `../styles/main.css` |
| `config/site.config.js` | `../config/site.config.js` |

### 3. Update ptw-head.js

The stylesheet path in [`components/ptw-head.js`](../components/ptw-head.js:180) needs to be dynamic or use absolute paths:

```javascript
// Change from:
fragment.appendChild(this.createElement('link', { rel: 'stylesheet', href: 'styles/main.css' }));

// To:
fragment.appendChild(this.createElement('link', { rel: 'stylesheet', href: '/styles/main.css' }));
```

### 4. Update config/site.config.js Import

The import in [`components/ptw-head.js`](../components/ptw-head.js:6) uses relative path:

```javascript
// This should still work since components/ location is unchanged
import siteConfig from '../config/site.config.js';
```

### 5. Update vercel.json

Add rewrites to serve pages from the pages/ folder:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    { "source": "/", "destination": "/pages/index.html" },
    { "source": "/about", "destination": "/pages/about.html" },
    { "source": "/academy", "destination": "/pages/academy.html" },
    { "source": "/team", "destination": "/pages/team.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### 6. Navigation Links (ptw-nav.js)

Current navigation links in [`components/ptw-nav.js`](../components/ptw-nav.js:27-32) use absolute paths which will continue to work:

```javascript
<li><a href="/#services">Services</a></li>
<li><a href="/#labs">PTW Labs</a></li>
<li><a href="/academy">Academy</a></li>
<li><a href="/about">About</a></li>
<li><a href="/team">Team</a></li>
```

These absolute paths (`/academy`, `/about`, `/team`) will be handled by Vercel rewrites.

## URL Mapping

| URL | Served File |
|-----|-------------|
| `/` | `pages/index.html` |
| `/about` | `pages/about.html` |
| `/academy` | `pages/academy.html` |
| `/team` | `pages/team.html` |

## Implementation Steps

1. Create `pages/` directory
2. Move all HTML files to `pages/`
3. Update script src in each HTML file: `src="../components/index.js"`
4. Update [`components/ptw-head.js`](../components/ptw-head.js) to use absolute path for stylesheet: `/styles/main.css`
5. Update [`vercel.json`](../vercel.json) with rewrites
6. Delete original HTML files from root
7. Test locally and on Vercel

## Benefits

- **Cleaner root directory**: Only configuration and deployment files at root
- **Logical grouping**: All pages in one place
- **Scalability**: Easy to add new pages
- **Clean URLs**: Vercel rewrites maintain `/about` instead of `/pages/about.html`
