# Carlos Media — Miami listing media

Next.js marketing site for Carlos Media.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Publish on GitHub (first time)

From this folder, after a one-time login:

```bash
gh auth login
gh repo create CarlosRM --public --source=. --remote=origin --push
```

Use another repo name if you prefer; the workflow sets `BASE_PATH` from the repository name automatically.

## GitHub Pages

Pushes to `main` run **Deploy to GitHub Pages** (`.github/workflows/deploy-github-pages.yml`). After the first successful workflow run:

1. Repo **Settings → Pages**
2. **Build and deployment**: source **GitHub Actions**

The live URL is `https://<user>.github.io/<repo>/`.

Static export uses `STATIC_EXPORT=1` and `BASE_PATH=/<repository-name>` in CI only; local `npm run build` stays a normal Next build. To preview a Pages build locally (repo must match `BASE_PATH`):

```bash
npm run build:gh-pages
```
