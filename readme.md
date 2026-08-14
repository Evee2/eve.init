# eve.init

Personal portfolio for Evelyn Victor - web developer. React + Vite + Tailwind, built around a dark
navy/cyan/gold theme.

## Structure

- `/` - hero, about, focus areas, project grid, architecture notes, roadmap, and a contact/collab footer
- `/resume` - standalone resume page with a print/save-as-PDF button

## Local development

```
npm install
npm run dev
```

## Project previews

Screenshots live in `public/media/`. Two projects (Localis Prod, InternNET) don't have a public live URL
yet, so they render as "in progress" cards instead of a screenshot. The Queentee screenshot may lag behind
the live site since that project is actively being updated - swap in a fresh one from
https://queentee-ng.netlify.app/ when it's settled. The D'Mayors Groove preview is a menu subpage rather
than the homepage; swap in a homepage screenshot if a better one turns up.

## Status

Scaffolded and built end to end, not yet deployed. Next steps: run `npm install` locally, review copy and
images, then deploy (Netlify or the same S3 + CloudFront + Route 53 pattern used elsewhere).
