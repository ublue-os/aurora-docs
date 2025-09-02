# Aurora Documentation Site

Aurora Documentation is a Docusaurus TypeScript-based documentation site for Aurora Linux (Universal Blue's KDE productivity distribution). The site serves documentation for installation, usage, development, and project information.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, build, and test the repository:

- Node.js 18+ is required (v20.19.4+ recommended). Check with `node --version`
- `npm install` -- takes ~50 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `npm run build` -- takes ~5 seconds. Production build with Docusaurus.
- `npm run start` -- starts development server on http://localhost:3000 (~15 seconds to start)
- `npm run serve` -- serves production build on http://localhost:3000 (instant startup)

### Alternative workflows:

- **Docker**: `docker compose up` -- downloads Node.js image (~2 minutes first time), installs dependencies and starts dev server. NEVER CANCEL during image download.
- **Bun (CI workflow)**:
  - Install: `curl -fsSL https://bun.sh/install | bash && export PATH="$HOME/.bun/bin:$PATH"`
  - `bun install --frozen-lockfile --production` -- takes ~3 seconds
  - `bun run build` -- takes ~5 seconds, same as npm

### Validation commands (ALWAYS run before committing):

- `npm run typecheck` -- TypeScript validation (~2 seconds)
- `npm run prettier` -- auto-format all files (~1.5 seconds)
- `npm run prettier-lint` -- check formatting without fixing (~1.5 seconds)
- Typos checking: Install `cargo install typos-cli` (~80 seconds), then `/home/runner/.cargo/bin/typos --config ./typos.toml ./README.md ./docs` (~0.03 seconds)

### NEVER CANCEL warnings:

- NEVER CANCEL `npm install` - takes up to 60 seconds
- NEVER CANCEL `docker compose up` during image download - takes up to 3 minutes on first run
- NEVER CANCEL `cargo install typos-cli` - takes up to 90 seconds

## Validation

### Manual testing scenarios:

- ALWAYS test the site functionality after making changes by running `npm run serve` and accessing http://localhost:3001
- Navigate between documentation sections using the sidebar
- Test search functionality (Ctrl+K)
- Verify all internal links work correctly
- Test responsive design and dark/light mode toggle
- Verify that "Edit this page" links point to correct GitHub files

### End-to-end validation:

- The site must load and display the Aurora homepage at "/"
- Navigation between sections must work (Installation, User Guides, Developer Experience, etc.)
- All documentation pages must render properly with correct formatting
- Search functionality must be accessible and responsive

### Always run before committing:

- `npm run prettier` (auto-fixes formatting)
- `npm run typecheck` (validates TypeScript)
- `npm run build` (ensures production build succeeds)
- Test the site by running `npm run serve` and manual verification

## Common Tasks

The following are outputs from frequently run commands. Reference them instead of running bash commands to save time.

### Repository structure

```
.
├── .devcontainer/          # VS Code dev container config
├── .github/                # GitHub Actions workflows
├── docs/                   # Documentation content (Markdown)
│   ├── dx/                 # Developer experience docs
│   ├── guides/             # User guides
│   ├── lts/                # LTS information
│   ├── project-docs/       # Project information
│   └── reference/          # Reference documentation
├── src/                    # Docusaurus theme customizations
├── static/                 # Static assets (images, etc.)
├── docusaurus.config.ts    # Main Docusaurus configuration
├── sidebars.ts             # Sidebar navigation configuration
├── package.json            # npm dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

### Key npm scripts from package.json:

```json
{
  "start": "docusaurus start", // Dev server
  "build": "docusaurus build", // Production build
  "serve": "docusaurus serve", // Serve production build
  "typecheck": "tsc", // TypeScript validation
  "prettier": "prettier --write .", // Auto-format
  "prettier-lint": "prettier --check ." // Check formatting
}
```

### Known issues:

- Build warns about broken anchors in `/guides/rescue-mode` and HTML issues in `/guides/layerapp` - these are non-critical
- AVIF image type not supported by image-size library (warns about `/static/img/dino/dino.avif`)
- Typos checker finds false positive "ba" in local-ai.md (from a hex hash)
- `browserslist` database is outdated - run `npx update-browserslist-db@latest` if needed

### GitHub Actions workflows:

- `.github/workflows/pages.yml` - Builds and deploys to GitHub Pages using bun
- `.github/workflows/prettier.yml` - Auto-formats code on push
- `.github/workflows/typos.yml` - Checks for typos in docs and README
- `.github/workflows/pdf.yml` - Generates PDF versions (if configured)
- `.github/workflows/renovate-validate.yml` - Validates dependency updates

### Configuration files:

- `docusaurus.config.ts` - Main site configuration (URL: https://docs.getaurora.dev/)
- `sidebars.ts` - Navigation structure
- `typos.toml` - Spelling checker configuration
- `docker-compose.yml` - Docker development environment
- `.devcontainer/devcontainer.json` - VS Code development container

## Development Workflow

### For documentation changes:

1. Edit Markdown files in `docs/` directory
2. Test locally with `npm run start`
3. Validate with `npm run prettier && npm run typecheck`
4. Build and test production with `npm run build && npm run serve`
5. Commit changes

### For site configuration changes:

1. Edit `docusaurus.config.ts` or `sidebars.ts`
2. Test with `npm run start` for immediate feedback
3. Always run `npm run build` to ensure configuration is valid
4. Test production build with `npm run serve`

### For theme/styling changes:

1. Edit files in `src/css/` or `src/` directory
2. Changes are hot-reloaded in development mode (`npm run start`)
3. Always test both light and dark themes
4. Verify responsive design on different screen sizes

## Port Conflicts

If port 3000 is already in use, Docusaurus will prompt to use an alternative port (typically 3001). Accept this prompt by typing 'Y' when asked.
