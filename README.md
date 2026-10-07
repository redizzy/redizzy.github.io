# Personal Website

This repository hosts the source code for my personal website.

The site is built with **Astro** and **Tailwind CSS**, and is automatically deployed to **GitHub Pages** using **GitHub Actions**.

## 🌐 Live Site

👉 https://redizzy.github.io

## 🛠 Tech Stack

- Astro
- Tailwind CSS
- Markdown
- GitHub Actions (CI/CD)
- GitHub Pages

## Local Development

Use Node.js 22 and npm. Dependencies are locked in `package-lock.json`.

```sh
npm ci
npm run dev
```

- `npm run build` generates the static site in `dist/`.
- `npm run preview` serves the production build locally.

## Project Structure

- `src/pages/`: homepage, project archive, CV, blog routes, RSS, and 404 page.
- `src/layouts/SiteLayout.astro`: shared page layout with the top navigation and footer.
- `src/layouts/PostLayout.astro`: blog article layout built on the shared layout.
- `src/components/home/`: homepage sections and navigation.
- `src/lib/`: shared project, experience, and book data, plus URL and date formatting helpers.
- `src/content/blog/`: blog posts and their metadata.

## 📦 Deployment

The website is built and deployed automatically on every push to the `main` branch via GitHub Actions.

## 📄 Purpose

This website is used to present my background, projects, and technical interests, and will be continuously updated.

## Updating Content

- Edit `src/lib/projects.ts` to update the separate Research and Software groups shared by the homepage, project archive, and CV. Keep publication status and App Store availability accurate.
- Edit `src/lib/experience.ts` to update the education and work records shared by the homepage and CV.
- Luko's `public/luko-icon.jpg` is the 512px artwork from [its App Store listing](https://apps.apple.com/nl/app/luko-fitness-food-buddy/id6788284565); `public/luko-favicon.png` comes from [the official website favicon](https://lukoapp.com/assets/luko-icon.png).
- Edit `src/pages/projects.astro` to manage the Software and Agent demo slots.
- Edit `src/config.ts` for the default page title and description.
- The default sharing image is `public/social-card.png`. After editing its source, `public/social-card.svg`, regenerate the PNG with:

```sh
node --input-type=module -e 'import sharp from "sharp"; await sharp("public/social-card.svg").png().toFile("public/social-card.png");'
```

---

Feel free to explore the source code or visit the live site.
