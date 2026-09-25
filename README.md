# Madhur Borade — Portfolio

A React + Vite + Tailwind personal portfolio site.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — one component per section (Navbar, Hero, About, Experience, Skills, Projects, ProjectCard, Education, Contact, Footer)
- `src/data/projects.js` — project content, edit this to add/remove projects
- `tailwind.config.js` — color tokens (`ink` scale), fonts, animation keyframes

## To personalize

- Replace the email/LinkedIn links in `src/components/Contact.jsx`
- Drop a `resume.pdf` into `public/` — the hero's "Download Resume" button links to `/resume.pdf`
- Edit `src/data/projects.js` to add real repo/demo links as projects go live
