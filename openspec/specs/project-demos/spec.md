# project-demos Specification

## Purpose
Defines project cards, filters and mini windows with small interactive demos.

## Requirements

### Requirement: Project cards with filters
The site SHALL render project cards from one data file and let the visitor filter them by category.

#### Scenario: Filter by category
- **WHEN** the visitor selects the category AI
- **THEN** only AI projects stay visible

### Requirement: Mini window per project
Each project card SHALL open a mini window with role, period, short story, stack, links and, when available, an interactive demo.

#### Scenario: Open and close
- **WHEN** the visitor clicks a card
- **THEN** a window opens with focus inside, and Escape or the close button closes it and returns focus to the card

### Requirement: Demos show one real idea
Each demo SHALL illustrate one real mechanism from the project and work without network access.

#### Scenario: Offline demo
- **WHEN** the network is off
- **THEN** every demo still works

### Requirement: Accessibility and motion
Interactive elements SHALL be reachable by keyboard, and animations SHALL respect prefers-reduced-motion.

#### Scenario: Reduced motion
- **WHEN** the system asks for reduced motion
- **THEN** decorative animations are off
