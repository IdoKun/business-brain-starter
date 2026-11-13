# Business brain starter

A small, private "second brain" for a business, kept up to date by Claude Code.
Pattern: Andrej Karpathy's LLM Wiki (raw files → wiki pages Claude maintains → one rules file).

- `wiki/`: the pages (examples: a made-up yoga studio). `wiki/index.md` lists every page; the hub reads it.
- `data/metrics.csv`: monthly numbers for the dashboard.
- `index.html` + `hub/`: the hub: read, fuzzy search (typos OK), dashboard. No build step.
- `CLAUDE.md`: the rules Claude reads first. `.claude/skills/`: add-to-brain, check-brain, update-dashboard.

Use it: **Use this template → Create a new repository → Private**. Publish with Cloudflare Pages (no build command, output `/`) behind Cloudflare Access.
Made by Ido Azaria for his private lessons.

**No Zero Trust?** `functions/_middleware.js` is a simple password lock (Cloudflare **Pages** only; it does nothing on a Worker), off by default. Turn it on: Cloudflare → your Pages project → Settings → Variables and secrets → Add → Type **Secret**, name `HUB_PASSWORD`, your password → Save, then redeploy.
