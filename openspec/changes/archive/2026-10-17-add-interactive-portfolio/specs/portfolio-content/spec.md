# Spec Delta

## Purpose
Defines which sections and facts the portfolio shows and which information must never be published.

## ADDED Requirements

### Requirement: Core resume sections
The site SHALL show hero with photo, about and goals, projects, experience, education, skills, achievements and contacts.

#### Scenario: Visitor opens the site
- **WHEN** a visitor opens the page
- **THEN** the hero with name, role and photo is visible first, and the navigation links lead to every section

### Requirement: Safe publishing of facts
The site SHALL NOT contain tokens, phone numbers, private repository code, medical data, salaries or internal company data.

#### Scenario: Internal project is shown
- **WHEN** a project comes from a company or hospital context
- **THEN** only an anonymised description is shown and the demo uses synthetic data

### Requirement: Honest wording
Forecasts SHALL be marked as forecasts, team projects SHALL state the personal role.

#### Scenario: Business model project
- **WHEN** the seller analytics project is opened
- **THEN** the numbers are labelled as model assumptions, not as real sales

### Requirement: Text style
Russian texts SHALL use plain hyphens instead of long dashes and SHALL NOT use the letter yo.

#### Scenario: Automatic check
- **WHEN** the check script scans site files
- **THEN** it finds no long dashes and no yo
