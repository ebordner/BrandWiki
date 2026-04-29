# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies (first time)
npm start         # local dev server at http://localhost:8080 with live reload
npm run build     # build static site to _site/
```

## Repository structure

```
.eleventy.js          ← Eleventy config: collections, filters, ignores
index.njk             ← Homepage template (outputs _site/index.html)
_includes/
  base.njk            ← Base HTML shell with sticky header + sidebar nav
  article.njk         ← Article layout: infobox, content, see-also
css/wiki.css          ← All styles (Wikipedia-inspired)
rbd/
  wiki/
    wiki.11tydata.js  ← Directory data: sets layout + computes permalink for all articles
    identity/         ← 6 articles
    audience/         ← 4 articles
    offers/           ← 2 articles
    voice/            ← 1 article
    proof/            ← 1 article
    market/           ← 1 article
    strategy/         ← 5 articles
    frameworks/       ← 1 article
  exports/            ← Ignored by Eleventy; paste-anywhere brand summaries
netlify.toml          ← Netlify build config (build command + publish dir)
```

## How the site is built

Each `.md` file in `rbd/wiki/**` is an Eleventy template. `rbd/wiki/wiki.11tydata.js` applies to all of them, setting:
- **layout**: `article.njk` → which extends `base.njk`
- **permalink**: strips `rbd/wiki/` prefix → final URL is `/wiki/{category}/{slug}/`

The `groupByCategory` filter in `.eleventy.js` drives the homepage grid. The `relatedArticles` filter drives each article's "See also" section.

Article frontmatter fields consumed by the templates:
- `title` — displayed as page title and article heading
- `category` — groups articles in sidebar and homepage (one of 8 fixed values)
- `confidence` — `high | medium | low`; renders as a color-coded badge
- `sources` — YAML array; counted in the infobox
- `last_updated` — YAML date (parsed as a JS Date, formatted via `dateFormat` filter)

## Wiki content workflow

See `rbd/CLAUDE.md` for the full agent rules: session startup sequence, ingest workflow, article conventions, log format, and export specs.

**After any wiki update, push to GitHub:**
```
git add rbd/
git commit -m "..."
git push
```
Netlify auto-deploys on every push to main.
