# GitHub Pages Deployment Guide

This project ships with a dedicated Angular build configuration that emits the static site into the `docs/` folder. GitHub Pages can serve that folder from the `main` branch.

## 1. Configure the repository name

If your repository is not named `DocRoster-frontend`, update the `baseHref` setting inside `angular.json` under the `github-pages` configuration so it matches `/<repository-name>/`.

## 2. Build the Pages bundle

```bash
npm run deploy:github-pages
```

The command performs two actions:

1. `ng build --configuration=github-pages` – produces the optimized site in `docs/` with the correct base and deploy URLs.
2. Runs a small Node script that duplicates `docs/index.html` to `docs/404.html` so client-side routes keep working on deep links.

## 3. Commit and push the artifacts

```bash
git add docs
git commit -m "chore: publish docs build"
git push
```

## 4. Enable GitHub Pages

In the repository settings on GitHub, navigate to **Pages → Build and deployment** and choose **Source: Deploy from a branch**. Select the `main` branch and the `/docs` folder.

Once saved, your application will be available at `https://<username>.github.io/<repository-name>/`.
