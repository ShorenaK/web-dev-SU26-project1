# Ally Descoteaux — Personal Homepage

**Author:** Ally Descoteaux  
**Class:** CS 5610 — Web Development
**License:** MIT

---

## Project Objective

A personal homepage built with vanilla HTML5, CSS3, and ES6+ JavaScript modules — no frameworks, no jQuery, no component libraries. The site showcases my background as a CS & Math student and software engineer, featuring my experience, projects, and a unique interactive terminal that visitors can type commands into to learn about me.

---

## Screenshot

---

## Pages

| Page     | URL                   | Description                                              |
| -------- | --------------------- | -------------------------------------------------------- |
| Home     | `index.html`          | Landing page with hero, about, timeline, projects, terminal |
| Projects | `pages/projects.html` | Full project list with live tag filtering                |

---

## Creative Feature

The **interactive terminal** in the "ask me anything" section lets visitors type real commands to learn about me:

- `help` — list available commands
- `about`, `skills`, `experience`, `projects`, `contact`, `interests`, `whoami`
- `clear` — clears the terminal
- Easter eggs: try `hire`, `coffee`, `sudo`, `git log`, `hack`
- Arrow keys navigate command history

This was built entirely in vanilla ES6 (`js/terminal.js`) — no libraries.

---

## Project Structure

```
ally-homepage/
├── index.html              # Main homepage
├── pages/
│   ├── projects.html       # Projects page
├── css/
│   ├── styles.css          # Global styles & design system
│   ├── home.css            # Homepage-specific styles
│   └── projects.css        # Projects page styles
├── js/
│   ├── main.js             # Entry point (ES6 module)
│   ├── nav.js              # Mobile nav toggle
│   ├── marquee.js          # Seamless marquee duplication
│   ├── timeline.js         # Scroll-reveal timeline
│   ├── terminal.js         # Interactive terminal feature
│   └── projects.js         # Projects page entry + filter logic
├── images/
│   └── favicon.svg         # SVG favicon
├── package.json
├── eslint.config.js        # ESLint flat config (includes Prettier rules)
├── LICENSE
└── README.md
```

---

## Instructions to Build & Run

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
# Opens at http://localhost:3000
```

Or:

```bash
npm start
# Opens at http://localhost:3000
```

### Lint with ESLint

```bash
npm run lint
```

### Format JS (via ESLint + Prettier plugin)

Formatting rules live in `eslint.config.js` (through `eslint-plugin-prettier`), so a single command both lints and fixes formatting:

```bash
npm run format
```

This runs `eslint --fix` on the `js/` directory. HTML and CSS are not auto-formatted.
