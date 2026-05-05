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
