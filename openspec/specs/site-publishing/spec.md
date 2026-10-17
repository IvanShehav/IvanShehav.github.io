# site-publishing Specification

## Purpose
Defines how the site is stored and published on GitHub Pages.

## Requirements

### Requirement: Static hosting
The site SHALL work as plain static files published from the repository root.

#### Scenario: GitHub Pages
- **WHEN** the repository is pushed to a repo named IvanShehav.github.io
- **THEN** the site opens at https://ivanshehav.github.io without a build step

### Requirement: Single place for content
Texts and projects SHALL live in `assets/data.js` for both languages.

#### Scenario: Add a project
- **WHEN** a new project object is added to the data file
- **THEN** a new card appears without editing the page logic

### Requirement: Responsive layout
The layout SHALL work from 360 px phone width to wide desktop without horizontal scroll.

#### Scenario: Phone
- **WHEN** the viewport is 375 px wide
- **THEN** there is no horizontal scroll
