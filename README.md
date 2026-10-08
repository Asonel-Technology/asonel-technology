# Asnol Technology Website

## Overview

This is a responsive static React website for Asnol Technology.

The site presents the company, its services, and supporting pages. Content such as services, team information, and blog posts is stored in JavaScript data files inside the project.

No custom backend or database is currently used.

The only external services intended for this site are Cloudinary, for image hosting, and EmailJS, for contact and service-request emails. Neither is connected yet.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Cloudinary
- EmailJS

## Project Structure

```text
public/images/          Static image folders (logo, team, services, blog, hero, about)
src/components/         Reusable interface components
src/components/common/  Button, Container, headings, logo
src/components/layout/  Navbar and the page shell
src/components/navigation/  Desktop dropdown and mobile menu
src/components/home/    Hero, about, and services sections
src/components/services/ Service card and icons
src/data/               Editable content: navigation, services, blogs, team, images, company copy
src/pages/              Route screens
src/routes/             React Router route table
src/utils/              Small helpers
```

The footer is intentionally not included yet. Add `src/components/layout/Footer.jsx` and render it in `src/components/layout/Layout.jsx` under `<main>`.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` when the services are ready. These are public client values. Do not put SMTP passwords, Cloudinary API secrets, or other private credentials in the project.

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
```

EmailJS is for the contact form. Cloudinary, if a browser upload is added later, must use an unsigned upload preset. Images that are already hosted can be referenced by their Cloudinary URL from `src/data/images.js` or the relevant content file.

The contact page does not send email yet. Leaving these variables empty is expected.

## Images

Place files in:

- Logo: `public/images/logo/`
- Team images: `public/images/team/`
- Service images: `public/images/services/`
- Blog images: `public/images/blog/`
- Hero photograph: `public/images/hero/`
- About photograph: `public/images/about/`

Then point the site at them from `src/data/images.js`.

The logo is read from `images.logo`. Navbar and any later footer should use the `Logo` component, which reads that same configuration. Set `images.logo.src` to the public path, for example `/images/logo/logo.svg`. While `src` is empty, the navbar shows a text placeholder. Replacing the logo file does not require changes to the navbar or footer components once the path is set.

Hero and about photographs are optional. Leave `src` empty to keep the built-in visual, or set a local path such as `/images/hero/hero.jpg`. Do not hard-code remote image URLs.

The group team photograph belongs at `public/images/team/team-main.jpg`.

## Blog Management

Blogs are stored statically in `src/data/blogs.js`. There is no database and no CMS.

To add a post, append an object with:

- `id`
- `slug`
- `title`
- `excerpt`
- `content` (an array of paragraphs)
- `author`
- `date` (`YYYY-MM-DD`)
- `category`
- `image` (a public path or an empty string)

The slug becomes the route: `/blogs/your-slug`. The navigation list of articles is built from this file.

## Services Management

Services are stored in `src/data/services.js`.

Adding or editing a service there updates the homepage cards, the services page, and the Services menu. Each item needs a `title`, `slug`, `icon`, and `description`. Icon names currently supported are `web`, `mobile`, `software`, `design`, `it`, and `digital`.

The current services are placeholders until the official list is confirmed.

## Team Management

Team members belong in `src/data/team.js`. The team page is a route foundation for a later design. Do not add people until their names, roles, and portraits are confirmed.

## Branding

- Orange: `#FF914D` — buttons, highlights, icons, active navigation
- Dark brown: `#1E1200` — navigation, dark panels, headings
- White: `#FFFFFF` — page background and text on dark surfaces
- Sand: `#F6F1EB` — a supporting surface mixed from the brown and white, used to separate sections

Tokens live in `tailwind.config.js`.

Orange is not used for small text on white, because that combination does not meet contrast requirements. On white, orange is reserved for fills behind dark brown text and for short accent marks.

## Git Workflow

Work happens on feature branches, not directly on `main`.

Suggested branch names:

- `feature/home-page`
- `feature/navbar`
- `feature/services`
- `feature/blogs`
- `feature/contact`
- `feature/team`

Open a pull request for review before merging. Keep page content in `src/data` so branches can change copy without rewriting components.

## Current Scope

This branch includes the navbar, homepage hero, about section, services section, about page, and services page.

Team, the designed blog presentation, the contact form, and the footer are left for other branches. Simple blog routes already read `src/data/blogs.js` so article links resolve.
