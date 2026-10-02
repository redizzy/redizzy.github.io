# Personal Website

This repository hosts the source code for my personal website.

The site is built with **Astro** and **Tailwind CSS**, and is automatically deployed to **GitHub Pages** using **GitHub Actions**.

## 🌐 Live Site

👉 https://redizzy.github.io

## 🛠 Tech Stack

- Astro
- Tailwind CSS
- Markdown / MDX
- GitHub Actions (CI/CD)
- GitHub Pages

## 📦 Deployment

The website is built and deployed automatically on every push to the `main` branch via GitHub Actions.

## 📄 Purpose

This website is used to present my background, projects, and technical interests, and will be continuously updated.

## Updating Content

- Edit `src/lib/projects.ts` to update the separate Research and Software groups shared by the homepage, project archive, and CV. Keep publication status and App Store availability accurate.
- Demo slots remain in `src/components/home/Projects.astro` and `src/pages/projects.astro` for future work.
- Edit `src/config.ts` for the default page title and description.
- The default sharing image is `public/social-card.png`. After editing its source, `public/social-card.svg`, regenerate the PNG with:

```sh
node --input-type=module -e 'import sharp from "sharp"; await sharp("public/social-card.svg").png().toFile("public/social-card.png");'
```

---

Feel free to explore the source code or visit the live site.
