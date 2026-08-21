# rahulgharat.me

Personal profile website, built with Next.js (static export) + Tailwind CSS, hosted on GitHub Pages at [rahulgharat.me](https://rahulgharat.me).

## Editing content

- **Everything on the home page** (name, bio, experience, skills, links) lives in [`data/profile.ts`](data/profile.ts) — edit that one file.
- **Blog posts** are markdown files in [`content/blog/`](content/blog/). Add a new `.md` file with frontmatter (`title`, `date`, `excerpt`, `tags`) and push — it deploys automatically.

## Scripts

```bash
npm install

npm run dev      # 1. run locally in development mode (http://localhost:3000, hot reload)
npm run preview  # 2. run locally in production mode (builds, then serves ./out on http://localhost:3000)
npm run deploy   # 3. deploy to GitHub Pages manually (builds and pushes ./out to the gh-pages branch)
```

## Deployment

Normally you don't need `npm run deploy` — pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch automatically. GitHub Pages serves that branch. The custom domain is set via `public/CNAME`.
