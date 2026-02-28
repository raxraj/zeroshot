# ZeroShot — Publishing & CI/CD Guide

Instructions for publishing ZeroShot to npm and setting up CI/CD pipelines.

## 📦 Publishing to npm

### Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **Authentication**: Log in to npm from your terminal
   ```bash
   npm login
   ```

### Publishing Steps

#### 1. Update Version

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):

```bash
# For bug fixes (0.1.0 -> 0.1.1)
npm version patch

# For new features (0.1.0 -> 0.2.0)
npm version minor

# For breaking changes (0.1.0 -> 1.0.0)
npm version major
```

#### 2. Build the Library

```bash
npm run build
```

This generates:
- ESM bundle (`dist/index.mjs`)
- CommonJS bundle (`dist/index.js`)
- TypeScript declarations (`dist/index.d.ts`)
- Styles (`dist/style.css`)
- Manifest (`dist/zero-shot-manifest.json`)

#### 3. Test Before Publishing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build Storybook to verify
npm run build-storybook
```

#### 4. Publish to npm

```bash
npm publish --access public
```

### Publishing Checklist

- [ ] All tests pass
- [ ] Linting passes
- [ ] Version number updated
- [ ] CHANGELOG.md updated
- [ ] README.md is up to date
- [ ] Build succeeds (`npm run build`)
- [ ] `npm pack --dry-run` looks correct
- [ ] No sensitive data in published files

## 🔄 CI/CD Setup

### GitHub Actions

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build library
        run: npm run build

      - name: Build Storybook
        run: npm run build-storybook

  publish:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Publish to npm
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### GitHub Secrets Setup

Add your npm token to GitHub Secrets:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Your npm token (get it from npmjs.com → Access Tokens)

### Automated Release Workflow

Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Publish to npm
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
```

### Deploy Storybook

Create `.github/workflows/storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: storybook-static
```

## 🌐 Alternative Publishing Platforms

### GitHub Packages

1. Update `package.json`:
   ```json
   "publishConfig": {
     "registry": "https://npm.pkg.github.com"
   }
   ```

2. Authenticate:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```

3. Publish:
   ```bash
   npm publish
   ```

### Private npm Registry

Configure `.npmrc`:
```
registry=https://your-registry.com/
//your-registry.com/:_authToken=${NPM_TOKEN}
```

## 📝 Version Management

### Semantic Versioning

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backwards compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backwards compatible

### Changelog

Maintain a `CHANGELOG.md` file:

```markdown
# Changelog

## [0.1.0] - 2026-02-28
### Added
- Initial release with 50+ components
- Dual API — composable JSX + declarative config on every component
- 9 AI-native components (ChatThread, StreamingText, CodeBlock, etc.)
- ZeroShotManifest — machine-readable component catalog for LLM tooling
- Full TypeScript strict mode support
- Storybook documentation
```

## 🔍 Pre-publish Checks

Before publishing, verify the package contents:

```bash
# Dry run to see what would be published
npm pack --dry-run

# Or create a tarball to inspect
npm pack
tar -xzf zero-shot-0.1.0.tgz
ls package/
```

## 🚀 Release Process

### Manual Release

1. Create a release branch
   ```bash
   git checkout -b release/v0.1.0
   ```

2. Update version and changelog
   ```bash
   npm version minor
   # Update CHANGELOG.md
   ```

3. Commit and create PR
   ```bash
   git add .
   git commit -m "chore: release v0.1.0"
   git push origin release/v0.1.0
   ```

4. After PR is merged, tag and publish
   ```bash
   git checkout main
   git pull
   git tag v0.1.0
   git push origin v0.1.0
   npm publish --access public
   ```

## 📊 Monitoring

After publishing:

1. Check npm package page: `https://www.npmjs.com/package/zero-shot`
2. Verify installation: `npm install zero-shot`
3. Check download stats on npm
4. Monitor GitHub issues for user feedback

## 🔒 Security

### Security Scanning

Add to your CI workflow:

```yaml
- name: Run security audit
  run: npm audit --production
```

### Vulnerability Alerts

Enable GitHub Dependabot:
1. Go to repository Settings
2. Security & analysis
3. Enable "Dependency graph" and "Dependabot alerts"

---

Last updated: 2026-02-28
