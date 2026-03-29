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

## GitHub Pages

Pushes to `main` run **Deploy to GitHub Pages** (`.github/workflows/deploy-github-pages.yml`). After the first successful run:

1. Repo **Settings → Pages**
2. **Build and deployment**: source **GitHub Actions**

The live URL is `https://<user>.github.io/<repo>/` (for example, if the repo is `CarlosRM`, paths use the `/CarlosRM` base).

Static export uses `STATIC_EXPORT=1` and `BASE_PATH=/<repository-name>` in CI only; local `npm run build` stays a normal Next build.
