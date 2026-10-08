# Dizzy's Personal Website

Personal website of Zhiyuan Zhang (Dizzy), featuring research, software projects, education and work experience, writing, and personal interests.

**Website:** [redizzy.github.io](https://redizzy.github.io)

Built with **Astro**, **TypeScript**, and **Tailwind CSS**.

## Local Development

Use **Node.js 22** and npm.

```sh
npm ci
npm run dev
```

- `npm run build` generates the static site in `dist/`.
- `npm run preview` serves the production build locally.

## Editing Content

- `src/lib/projects.ts`: research and software projects, shared by the homepage, project archive, and CV.
- `src/lib/experience.ts`: education and work experience, shared by the homepage and CV.
- `src/lib/books.ts`: bookshelf.
- `src/content/blog/`: Markdown blog posts.
- `src/components/home/`: homepage sections and navigation.
- `src/config.ts`: site title and description.
- `public/`: images, icons, and sharing assets.

## Deployment

Pushes to `main` are built and deployed to **GitHub Pages** by **GitHub Actions**.
