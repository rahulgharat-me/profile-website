# rahulgharat.me

Personal profile website, built with Next.js (static export) + Tailwind CSS, hosted on GitHub Pages at [rahulgharat.me](https://rahulgharat.me).

## Editing content

- **Everything on the home page** (name, bio, experience, skills, links) lives in [`data/profile.ts`](data/profile.ts) — edit that one file.
- **Blog posts** are markdown files in [`content/blog/`](content/blog/). Add a new `.md` file with frontmatter (`title`, `date`, `excerpt`, `tags`) and push — it deploys automatically.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain is set via `public/CNAME`.
