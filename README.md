# The Deployment Company

A static landing page for The Deployment Company by Aphelion Labs.

## Development

```bash
npm install
npm run dev
```

## GitHub Pages

The site is deployed with Vite `base: "/"` because it is served from a **custom domain root** (e.g. `www.thedeploymentcompany.in`). Pushes to `main` build and deploy `dist/` through the workflow in `.github/workflows/deploy.yml`.

If you ever drop the custom domain and publish only as `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts` to `"/<repo>/"` and update `sitemap.xml`, `robots.txt`, and canonical URLs accordingly.

### If the site loads blank (or `<script src="/src/main.tsx">`)

That means GitHub Pages is publishing the **repository root** as a static site instead of the **built `dist/`** from Actions. The checkout `index.html` is only for local dev and Vite; production JS lives under `dist/assets/`.

Fix it once in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions** (do **not** use “Deploy from a branch”). Then re-run the **Deploy to GitHub Pages** workflow. If you still see an old page, purge your CDN cache or wait out `Cache-Control` (this project’s domain may sit behind Cloudflare).
