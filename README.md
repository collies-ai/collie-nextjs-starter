# collie Next.js starter

A website you deploy in one click and then grow with [collie](https://collies.sh): you write business goals, AI agents
plan and build them as pull requests with Vercel previews, and you decide and merge.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcollies-ai%2Fcollie-nextjs-starter)

## Start from collie

The easiest way in is from collie itself: **New project → Next.js starter on Vercel**. The project's guided page walks
you through it:

1. **Deploy to Vercel.** Vercel copies this template into a new repo in your GitHub account and puts it online. No
   environment variables needed.
2. **Connect the repo.** Install collie's GitHub App on that repo only. It is read-only: collie follows pull requests,
   CI and deploys, and never writes code.
3. **Connect the runner.** A Claude Code routine in the cloud that collie wakes when a goal has work. It needs Claude's
   GitHub App on the repo and collie as a connector in claude.ai.
4. **Start building.** collie creates the recommended goals: the first one ("The home page says what we sell") starts
   planning right away; the others wait as drafts.

## Run it locally

```sh
pnpm install
pnpm dev        # http://localhost:3000
```

The copy lives in `content/site.ts`, the home page in `app/page.tsx`.
