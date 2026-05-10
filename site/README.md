# Human-AI Coevolution Paper List — Static Site

Astro site that presents `papers.yaml` and `adjacent.yaml` as a searchable, filterable web UI. Deployed to GitHub Pages.

The site is a **presentation layer only** — it reads from the YAML source of truth in this repo and never adds metadata of its own.

## Develop

```bash
cd site
npm install
npm run dev
```

The dev server reads `../papers.yaml` and `../adjacent.yaml` directly. Edit either, save, refresh.

## Build

```bash
npm run build
npm run preview
```

Output goes to `site/dist/`.

### Environment variables

| Var | Purpose | Default |
|---|---|---|
| `BASE_PATH` | URL base path (project pages need `/REPO_NAME`) | `/Awesome-Human-AI-Coevolution-Paper-List` |
| `SITE_URL` | Origin of the deployed site | `https://xli04.github.io` |
| `STAR_COUNT` | Pre-fetched star count (skips a runtime GitHub API call) | unset → fetched at build |

For local dev, run with `BASE_PATH=` to serve at the root:

```bash
BASE_PATH= npm run dev
```

## Deploy

Run `bash site/scripts/deploy.sh` from the repo root. It builds the site locally and pushes the static output to a `gh-pages` branch (creating the orphan branch the first time). Then enable GitHub Pages: **Settings → Pages → Source → Deploy from a branch → `gh-pages`**.

## Stack

- **Astro 4** — static-first framework with islands.
- **Solid.js** — tiny reactive runtime for the interactive browse + stats islands.
- **MiniSearch** — BM25 full-text search built at page-load time.
- **ECharts** — interactive charts on `/stats` (lazy-loaded).
- **Tailwind CSS** — utility styles, warm-paper light + dark night themes.

## Structure

```
site/
├── src/
│   ├── lib/
│   │   ├── parsePapers.ts   # YAML loader (papers.yaml + adjacent.yaml)
│   │   ├── site.ts          # repo URLs, category metadata
│   │   └── star.ts          # GitHub star fetcher
│   ├── layouts/Base.astro
│   ├── components/
│   │   ├── TopBar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── PaperCard.astro
│   ├── islands/
│   │   ├── PaperBrowser.tsx # /papers — search + filters + URL sync
│   │   └── StatsCharts.tsx  # /stats — interactive ECharts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── papers/{index,[slug]}.astro
│   │   ├── stats.astro
│   │   ├── adjacent.astro
│   │   ├── about.astro
│   │   └── 404.astro
│   └── styles/global.css
├── public/favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```
