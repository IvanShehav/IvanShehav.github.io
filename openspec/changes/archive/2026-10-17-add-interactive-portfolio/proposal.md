# Proposal

## Why

Ivan needs a living resume that can be opened by a link (employers, grant committees, admissions). A PDF does not show how he thinks and builds. A site on GitHub Pages shows projects, experience, goals and working mini demos in one place.

## What Changes

- New static one-page site (HTML, CSS, JS, no build step) for GitHub Pages.
- Sections: hero with photo, about and goals, projects, experience, education, skills, achievements, contacts.
- Every project card opens a mini window with a short story and a small interactive demo that shows one real idea from the project.
- Russian and English versions, light and dark theme, Montserrat font.
- Project data lives in one file so a new project is added in one place.

## Capabilities

### New Capabilities
- `portfolio-content`: sections, texts and facts shown on the site, and the rules for what may be published.
- `project-demos`: project cards, filters, mini windows and the interactive demos inside them.
- `site-publishing`: structure of the repository and how it is published on GitHub Pages.

### Modified Capabilities
<!-- none, new project -->

## Impact

- New files only: `index.html`, `assets/`, `openspec/`.
- No backend, no secrets, no analytics.
