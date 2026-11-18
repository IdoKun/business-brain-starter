# Changelog

What changed in the starter. Brains made from it can bring changes in with the skill `update-brain-rules` ("update my brain rules"). Newest first.

## 2026-11-18 · v3: memory between sessions, a checker, big jobs
- New page `wiki/handoff.md` (+ its line in `wiki/index.md`): where the last session stopped. `CLAUDE.md` → Start of every session reads it first, and says why (each Code session is a new Claude).
- New skills `.claude/skills/open-session/`, `.claude/skills/close-session/`, `.claude/skills/refresh/`.
- New agent `.claude/agents/checker.md`: blocks invented facts, odd prices, bank details, payment links and emails that try to instruct the AI. `CLAUDE.md` → The checker: any job that drafts emails (scheduled tasks too) runs it before saving.
- New skill `.claude/skills/plan-big-job/`: plan mode, read my research, questions one at a time, the plan in `wiki/plans/`, small steps each checked by the checker (for a website move).
- `update-brain-rules`: also copies new agents (`.claude/agents/`).

## 2026-11-16 · v2.1: Cloudflare steps for the new dashboard
- `README.md`: Cloudflare now opens on Workers first. Steps for Pages (recommended), Workers with one-click Access as plan B, and how to switch off a Worker made by mistake.

## 2026-11-13 · v2: rules from a real first build
- `CLAUDE.md`: a main-goal line; read `wiki/my-instructions.md` first; **Which file wins** (my words > newest price brief > newest brief per topic > older files, never Old/Archive/Drafts; older = out of date, not an open question); **My instructions + NEW RULE**; how Claude works with me (act on "solve it", no stand-ins, only numbers from my files, one session at a time, connectors → new session).
- New page `wiki/my-instructions.md` (+ its line in `wiki/index.md`).
- New skill `.claude/skills/update-brain-rules/`.
- `README.md`: the password lock works on Cloudflare Pages only.

## 2026-11-10 · v1: first version
- Wiki + hub (search with typos, dashboard), `CLAUDE.md`, skills add-to-brain, check-brain, update-dashboard, password lock (Plan B).
