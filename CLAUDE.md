# collie Next.js starter

A product website: Next.js (App Router), TypeScript and Tailwind CSS 4, deployed on Vercel. Every pull request gets a
Vercel preview URL and every merge to `main` goes to production. Its work comes from collie goals: agents take the
tasks over collie's MCP server, and people decide and review.

@AGENTS.md

## Commands

```sh
pnpm install
pnpm dev                                    # http://localhost:3000
pnpm lint && pnpm typecheck && pnpm build   # what CI runs on every PR
```

## Conventions

- Pages live in `app/`, shared UI in `components/`, and everything the site says in `content/site.ts`.
- No environment variables are needed to build or deploy. Add one only when a goal needs it, document it in the README,
  and say so in the PR: Vercel needs it set before the merge.
- One branch and one pull request per task, against `main`. Put the Vercel preview URL in the PR when you report.
- Pages stay fast (no client JavaScript a page does not need) and read well at 375 px wide.
- Do not invent product facts (names, prices, claims): when a goal needs them and collie does not say, ask with a
  collie decision.
