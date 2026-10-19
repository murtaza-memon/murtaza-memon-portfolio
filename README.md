# Murtaza Memon — Portfolio

Personal developer portfolio for **Murtaza Memon** — Full Stack Developer & WordPress Website Developer (Larkana, Sindh, Pakistan).

Built with **React + Vite**, JavaScript, and organized CSS. Visual design recreated from the reference site's layout system (Sora / Open Sans typography, `#1d4ed8` brand blue, light + dark themes).

## Quick start

```bash
npm install
npm run dev       # development server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Profile images

Your three supplied images live in `public/images/` and are referenced from `src/data/site.js`:

| File | Used in |
| --- | --- |
| `public/images/murtaza-hero.png.jpeg` | Hero section (blue blazer portrait) |
| `public/images/murtaza-about.png.jpeg` | About section (black shirt portrait) |
| `public/images/murtaza-logo.png.jpeg` | Navbar + footer logo |

**Note on naming:** these files carry a `.png.jpeg` double extension but contain **JPEG** image data (despite "png" in the name). They are used as-is — no renaming, copying, or format changes — so the paths match what is actually on disk.

- Portraits are 1122×1402 (4:5) and render at their natural aspect ratio — no stretching or forced cropping.
- If any file is renamed, update the matching key in `src/data/site.js` (`heroPhoto`, `aboutPhoto`, `logo`).
- A built-in placeholder appears only if an image fails to load — there is no substitute portrait.

## Contact form setup (email delivery)

The form validates fully on the client, but **it does not send email until you connect a form endpoint**. Until then it shows an honest message pointing visitors to your email address.

To enable delivery (recommended: [Formspree](https://formspree.io) — free tier available):

1. Create a form on Formspree and copy its endpoint.
2. Create `.env.local` in the project root:

   ```env
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
   ```

3. Restart the dev server (or redeploy).

Any endpoint that accepts `POST` with a JSON body (`name`, `email`, `subject`, `message`) works (Formspree, Web3Forms, your own API).

**Security notes**

- Only `VITE_`-prefixed variables are embedded in the browser bundle — never put secret server keys there. Treat the Formspree form ID as public.
- `.env.local` is already git-ignored.
- A hidden honeypot field (`website`) is included for basic spam filtering.

## Editing content

All copy, links, skills, services, journey entries, and footer links live in one file:

```
src/data/site.js
```

- **Education dates**: the `education.date` field is intentionally empty — add e.g. `date: "2022 – 2026"` when confirmed.
- **Journey periods**: `period` chips in the `journey` array are editable labels.
- **Projects**: the Coming Soon card lives in `src/sections/Projects.jsx`; swap it for real project cards when ready.

## Project structure

```
index.html              SEO meta, fonts, Font Awesome, theme bootstrap
public/
  favicon.svg           MM monogram favicon
  images/               photo drop-in location + placeholder
src/
  App.jsx               page composition + scroll-reveal observer
  data/site.js          all site content
  components/           Navbar, Footer, SectionHead, ProfilePhoto
  sections/             Hero, About, Skills, Services, Education,
                        Journey, Projects, Contact
  styles/               base.css, layout.css, sections.css
```

## Deployment

The build uses relative asset paths (`base: "./"`), so it works from a domain root **or** a sub-path such as `https://user.github.io/repo/`.

**Netlify**

1. Push this folder to a GitHub repository.
2. New site → import the repo.
3. Build command: `npm run build` · Publish directory: `dist`.

**Vercel**

1. Import the GitHub repo (framework preset: Vite, auto-detected).
2. Deploy — build command `npm run build`, output `dist`.

**GitHub Pages**

```bash
npm run build
npx gh-pages -d dist
```

Then in the repo: Settings → Pages → Source: `gh-pages` branch.

**Manual** — upload the contents of `dist/` to any static host (shared hosting, cPanel, etc.).
