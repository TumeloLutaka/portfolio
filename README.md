# Tumelo Lutaka — Portfolio

A personal portfolio built with React, TypeScript, Vite, and plain CSS. Warm neutrals, an olive accent, real project screenshots, and a small set of components. No router, state library, or UI framework.

## Run locally

Use Node.js 22.12+ (Node 24 is also supported).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm ci` instead of `npm install` for a clean installation from the lockfile.

## Check and build

```sh
npm run typecheck
npm run build
npm run preview
```

The build checks TypeScript and creates a static site in `dist/`. Deploy that folder to any static host, using `npm run build` as the build command. Relative asset paths support hosting under a subdirectory, including GitHub Pages. The site has no server or environment variables to configure.

## Edit the portfolio

| What to change | Where |
| --- | --- |
| Project titles, links, categories, descriptions, tags, and preview filenames | `src/data/projects.ts` |
| Introduction, about text, skills, and footer | `src/App.tsx` |
| Navigation | `src/components/Header.tsx` |
| Project cards and category filtering | `src/components/Projects.tsx` |
| Email, social links, and copy feedback | `src/components/Contact.tsx` |
| Palette, typography, layout, and responsive styles | `src/styles.css` |
| Page title, description, and font loading | `index.html` |
| Portrait and project screenshots | `public/images/` |
| Downloadable CV | `public/Tumelo-Lutaka-CV.pdf` |

To add a project, add an entry to the `projects` array and place its screenshot in `public/images/projects/`. Counts and filters update automatically. Preview images are local JPEG screenshots captured from the supplied project URLs; they do not require a screenshot service. Replace a screenshot when its project changes, ideally using a 1280 × 720 viewport.

Contact uses a `mailto:` link, which opens the visitor’s email app. The copy button is an alternative and shows feedback if browser clipboard access is unavailable. There is no contact form or EmailJS dependency. Clipboard access requires HTTPS or localhost.

The site uses the existing portrait, CV, email, and social links. The CV is retained as supplied; update the PDF separately when its contents change. Project descriptions distinguish concepts and learning projects from client work. The Render-hosted blog may take time to wake up. Total 20’s frontend is reachable, but multiplayer play also depends on its separate game server.

The Google-hosted DM Sans font has system-font fallbacks. All content remains visible without entrance animations, and reduced-motion preferences disable smooth scrolling and transitions.

## Structure

```text
src/
  App.tsx
  main.tsx
  styles.css
  components/
    Contact.tsx
    Header.tsx
    Icon.tsx
    Projects.tsx
  data/
    projects.ts
public/
  favicon.svg
  Tumelo-Lutaka-CV.pdf
  images/
```

The original tutorial assets remain in `assets/` for reference. The React app only serves the files in `public/` and imports from `src/`.
