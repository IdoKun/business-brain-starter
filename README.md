# Business brain starter

A small, private "second brain" for a business, kept up to date by Claude Code.
Pattern: Andrej Karpathy's LLM Wiki (raw files → wiki pages Claude maintains → one rules file).

- `wiki/`: the pages (examples: a made-up yoga studio). `wiki/index.md` lists every page; the hub reads it.
- `data/metrics.csv`: monthly numbers for the dashboard.
- `index.html` + `hub/`: the hub: read, fuzzy search (typos OK), dashboard. No build step.
- `CLAUDE.md`: the rules Claude reads first. `.claude/skills/`: add-to-brain, check-brain, update-dashboard, update-brain-rules, open-session, close-session, refresh, go, plan-big-job. `.claude/agents/checker.md`: checks drafts and changes before they reach anyone.

Use it: **Use this template → Create a new repository → Private**. Then publish it on Cloudflare, locked to your email: see **Publish your hub on Cloudflare** below.
Made by Ido Azaria for his private lessons.

## Publish your hub on Cloudflare (free)

Cloudflare's dashboard now opens on **Workers** first. Your hub is a plain website, so **Pages** is the simpler home. Two ways in; take A if you can.

**A · Pages (recommended)**
1. Cloudflare → left menu **Compute** → **Workers & Pages** → **Create application**.
2. Look for a **Pages** tab, or the line **Looking to deploy Pages? Get started** at the bottom. Click it. *(The wording can differ slightly on your screen.)*
3. **Import an existing Git repository** (or **Connect to Git**) → **GitHub** → **Only select repositories** → your brain repo → **Install & Authorize**.
4. Pick the repo → **Begin setup**. Change nothing: Framework **None**, Build command empty, Output `/`. → **Save and Deploy**. Your address: `<repo-name>.pages.dev`.
5. Lock it: **Zero Trust** → **Access controls** → **Applications** → **Create new application** → **Self-hosted and private** → **Public DNS** → domain = your `…pages.dev` → policy **Emails** = your email → **Create**.
6. Lock the previews too: your Pages project → **Settings** → **General** → **Enable access policy** (Cloudflare names it "Restrict previews" in some screens).
7. Optional, less annoying: **Access** → **Applications** → your app → **⋯** → **Edit** → **Session duration** = 1 month → **Save**.

**B · You only see the Workers screen (a "Deploy command `npx wrangler deploy`")**
1. Leave the Deploy command as it is. **Save and Deploy**. *(Cloudflare may open a **pull request** in your repo with the settings. If it does, merge it on GitHub.)*
2. Your address: `<worker-name>.<your-subdomain>.workers.dev`.
3. Lock it in one click: your Worker → **Settings** → **Domains & Routes** → on **workers.dev** click **Enable Cloudflare Access**, then the same on **Preview URLs**. **Manage Cloudflare Access** → your email only.
4. The password lock below does **not** work on a Worker. No Zero Trust card? Use A.

**Made a Worker by mistake and then a Pages project?** Remove the Worker's public address: Worker → **Settings** → **Domains & Routes** → **workers.dev** → **Disable**, and **Preview URLs** → **Disable** (they are separate switches).

**No Zero Trust (no card)?** `functions/_middleware.js` is a simple password lock for **Pages only**, off by default: Pages project → **Settings** → **Variables and secrets** → **Add** → Type **Secret**, name `HUB_PASSWORD`, your password → **Save** → **Deployments** → newest → **⋯** → **Retry deployment**.
