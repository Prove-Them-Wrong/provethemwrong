# Fix: Index.html Not Loading After Pages Reorganization

## Problem Diagnosis

After moving HTML files to the `pages/` folder, the site is not loading properly. The issue stems from **relative path resolution conflicts** between:

1. **Vercel rewrites** - URL `/` is rewritten to `/pages/index.html`
2. **Relative paths in HTML** - `src="../components/index.js"` resolves differently based on the URL vs actual file location
3. **Relative paths in JS** - `href: '../styles/main.css'` in ptw-head.js

### The Core Issue

When Vercel serves `/pages/index.html` at URL `/`:
- The browser thinks the base URL is `/` not `/pages/`
- Relative path `../components/index.js` resolves to `/../components/index.js` which is invalid
- Relative path `../styles/main.css` resolves to `/../styles/main.css` which is invalid

### Current File Structure

```
provethemwrong/
├── pages/
│   ├── index.html      # Has: src="../components/index.js"
│   ├── about.html
│   ├── academy.html
│   └── team.html
├── components/
│   ├── index.js
│   └── ptw-head.js     # Has: href: '../styles/main.css'
├── config/
│   └── site.config.js
├── styles/
│   └── main.css
└── vercel.json         # Rewrites / to /pages/index.html
```

## Solution: Use Absolute Paths

Change all relative paths to absolute paths starting from the root:

### Files to Modify

1. **All HTML files in pages/** - Change script src
2. **ptw-head.js** - Change stylesheet href

### Changes Required

#### 1. HTML Files - Script Source

**Before:**
```html
<script type="module" src="../components/index.js"></script>
```

**After:**
```html
<script type="module" src="/components/index.js"></script>
```

Files affected:
- `pages/index.html`
- `pages/about.html`
- `pages/academy.html`
- `pages/team.html`

#### 2. ptw-head.js - Stylesheet Path

**Before (line 180):**
```javascript
fragment.appendChild(this.createElement('link', { rel: 'stylesheet', href: '../styles/main.css' }));
```

**After:**
```javascript
fragment.appendChild(this.createElement('link', { rel: 'stylesheet', href: '/styles/main.css' }));
```

#### 3. ptw-head.js - Config Import (Already Correct)

The import statement uses a path relative to the JS file location, not the HTML:
```javascript
import siteConfig from '../config/site.config.js';
```

This is **correct** because ES module imports resolve relative to the importing file, not the HTML document.

## Why Absolute Paths Work

With Vercel rewrites:
- URL `/` serves `/pages/index.html`
- Absolute path `/components/index.js` always resolves to the root `/components/` folder
- Absolute path `/styles/main.css` always resolves to the root `/styles/` folder

This works regardless of whether the user visits:
- `/` which serves `/pages/index.html`
- `/about` which serves `/pages/about.html`
- Or directly `/pages/index.html`

## Implementation Checklist

- [ ] Update `pages/index.html` - change script src to `/components/index.js`
- [ ] Update `pages/about.html` - change script src to `/components/index.js`
- [ ] Update `pages/academy.html` - change script src to `/components/index.js`
- [ ] Update `pages/team.html` - change script src to `/components/index.js`
- [ ] Update `components/ptw-head.js` - change stylesheet href to `/styles/main.css`
- [ ] Test locally with a static server
- [ ] Deploy and verify on Vercel
