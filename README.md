# VoxBuild demo target

A tiny Vite + React site whose content is driven by [`src/features.json`](src/features.json).
VoxBuild edits that ONE file by voice, opens a PR, and once you merge it, Vercel
auto-deploys — the new feature card appears live.

## Deploy (one time)
1. Push this folder to its **own** GitHub repo (public is fine).
2. On vercel.com → New Project → import the repo → framework preset **Vite** → Deploy.
   (Connecting the repo enables **auto-deploy on every merge to `main`** — nothing else to set.)
3. Create a **fine-grained Personal Access Token** scoped to this repo with:
   - **Contents: Read and write**
   - **Pull requests: Read and write**

## Wire VoxBuild to it
```bash
npx convex env set GITHUB_TOKEN        <your-fine-grained-PAT>
npx convex env set GITHUB_REPO         <owner>/<repo>
npx convex env set GITHUB_BASE_BRANCH  main
npx convex env set GITHUB_TARGET_FILE  src/features.json
```

## Demo
Dictate e.g. *"Add a feature card about real-time collaboration."* → VoxBuild edits
`src/features.json`, opens a PR, Telegram buzzes the PR link → merge it → the card
goes live on Vercel.
