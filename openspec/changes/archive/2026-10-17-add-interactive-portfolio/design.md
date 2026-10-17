# Design

## Context

Greenfield static site. Hosting is GitHub Pages, so no server code. Ivan prefers plain human wording, Montserrat, no long dashes, no letter yo. Audience: employers, grant and admissions committees, partners.

## Goals / Non-Goals

**Goals:**
- Fast, beautiful, one-page resume with real projects and working mini demos.
- Russian and English, light and dark theme.
- Easy to extend: one data file.

**Non-Goals:**
- No CMS, no backend, no analytics, no contact form.
- No publishing of private code or internal data.

## Decisions

- Plain HTML, CSS, JS modules without a bundler: zero build, easy to host and edit. Alternative (Next.js) rejected as overkill.
- Content in `assets/data.js` as RU and EN objects; page logic in `assets/app.js`; demos in `assets/demos.js`, each demo is a function that mounts into a container and returns a cleanup function.
- Demos use synthetic data only and run on canvas or DOM, no libraries.
- Montserrat from Google Fonts with system fallback.
- Theme by CSS variables, stored in localStorage inside try/catch.
- Phone number is not published; contacts are email, Telegram, GitHub, VK.

## Risks / Trade-offs

- Google Fonts is a third-party request; fallback font keeps the layout usable.
- Some demos simplify real systems; each window says it is a simplified model.
- English texts are written by the assistant and should be read by Ivan once.
