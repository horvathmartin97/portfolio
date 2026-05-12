# Martin Horváth — Portfolio

> Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a trilingual interface (HU/EN/DE), a responsive layout, and a clean modern dark design.

🌐 **Live:** [martin-horvath-portfolio.netlify.app](https://martin-horvath-portfolio.netlify.app)

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Framework  | React 18 + TypeScript      |
| Styling    | Tailwind CSS v4            |
| Icons      | Lucide React + React Icons |
| i18n       | react-i18next              |
| Build      | Vite                       |
| Deployment | Netlify                    |

---

## Features

- **Trilingual support** — Hungarian, English, German via `react-i18next`
- **Responsive design** — mobile-first layout with hamburger navigation
- **Dark theme** — consistent `slate-950` / `slate-900` color palette with `sky-400` accent
- **No UI library dependency** — fully custom components with Tailwind CSS
- **Accessible** — semantic HTML, `aria-label` attributes, keyboard-navigable

---

## Project Structure

```
src/
├── assets/              # Project screenshots, profile photo
├── components/
│   ├── Header.tsx       # Sticky nav with blur, mobile hamburger menu
│   ├── Hero.tsx         # Landing section with gradient background
│   ├── Projects.tsx     # Featured projects with alternating layout
│   ├── Experience.tsx   # Work experience timeline card
│   ├── Skills.tsx       # Technical and soft skills
│   ├── Contact.tsx      # Contact section with CTA
│   └── LanguageSwitcher.tsx
├── locales/
│   ├── hu.json          # Hungarian translations
│   ├── en.json          # English translations
│   └── de.json          # German translations
├── i18n.ts
├── App.tsx
└── main.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/horvathmartin97/MartinH-Portfolio.git
cd MartinH-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## Featured Projects

| Project                 | Stack                                          | Live                                                   |
| ----------------------- | ---------------------------------------------- | ------------------------------------------------------ |
| **PawMap**              | React, Node.js, PostgreSQL, Tailwind           | [pawmap.eu](https://pawmap.eu)                         |
| **Cartly**              | React, TypeScript, Express, Prisma, PostgreSQL | [cartlyy.netlify.app](https://cartlyy.netlify.app)     |
| **Silver Arrow Car**    | React, TypeScript, Node.js, Prisma             | —                                                      |
| **Szaki Car Cosmetics** | React, TypeScript, Tailwind, Framer Motion     | [szakiautokozmetika.hu](https://szakiautokozmetika.hu) |

---

## Adding a New Language

1. Create a new translation file in `src/locales/` (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate all values
3. Register the new language in `src/i18n.ts`
4. Add a new entry to the `languages` array in `LanguageSwitcher.tsx`

---

## Contact

- **Email:** horvathmartinn@icloud.com
- **GitHub:** [github.com/horvathmartin97](https://github.com/horvathmartin97)
- **LinkedIn:** [linkedin.com/in/martin-horváth-069487363](https://www.linkedin.com/in/martin-horváth-069487363)

---

_Built with React, TypeScript and Tailwind CSS — Horváth Martin © 2026_
