# R3R NextGen website
Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

    npm install && npm run dev

- Theme tokens: `src/app/globals.css` (`@theme`)
- Content/nav/data: `src/lib/site.ts`
- Section components: `src/components/sections`
- Images: drop into `public/images/` — hero.jpg, about.jpg, toys.jpg, educational.jpg, play-systems.jpg, furniture.jpg, custom.jpg, manufacturing.jpg, oem.jpg, sustainability.jpg, global.jpg, cta.jpg
- Update `site.url` in `src/lib/site.ts` before launch (used for canonical, sitemap, OG).
