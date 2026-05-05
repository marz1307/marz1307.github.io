# marz1307.github.io

Personal portfolio site for Marvis Osazuwa. Analytics Engineer and Data Scientist.

## Stack

Static HTML, CSS, and a small amount of vanilla JS. No build step. Deploys
directly to GitHub Pages from the repository root.

- Typography: Fraunces (display), IBM Plex Sans (body), JetBrains Mono (mono)
- Design system: warm-paper light mode, deep-warm-black dark mode, vermilion (#D4471F) accent
- Theme toggle and scroll reveal in `assets/app.js`

## Local development

No tooling required. Open `index.html` in a browser, or serve the directory:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Push to `main`. GitHub Pages serves from the repository root.
The `.nojekyll` file disables Jekyll processing.

## Pages

- `/` — Home (hero, what I do, selected work, about preview, contact)
- `/about.html` — About
- `/projects/` — Selected work index
- `/projects/force24.html` — Account Intelligence Platform
- `/projects/natural-clinic.html` — CRM Data Rebuild
- `/projects/football-scouting.html` — Big Data Player Scouting
- `/projects/steam-recommender.html` — Steam Games Recommender
- `/projects/fmbn-loan-analytics.html` — Loan Portfolio Integrity and Governance
- `/404.html` — Error page

## Updating content

The site is intentionally a static document. Edits are via code.
The "Currently" section in `about.html` is the only piece designed for
monthly updates.

## Specs

The full PRD, feature doc, design doc, and workflow are in `docs/`.

## Add the CV

Drop `Marvis_Osazuwa_CV.pdf` into `cv/` for the download button to work.
