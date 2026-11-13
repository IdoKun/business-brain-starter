# CLAUDE.md: how my business brain works

You are working in my business brain. Read this file first, every session.

**My main goal:** [one line, e.g. "sell more tours; workshops come second"]. When you rank, plan or suggest, start from this.

## The three layers
1. **My files (Google Drive):** briefs, price lists, PDFs, Excel files, photos, reports. They are the sources. **Read them, never change, move or delete them.**
2. **The wiki (`wiki/` in this repo):** short, clear pages you write and keep up to date from my files. You own this layer.
3. **This file:** the rules.

## Start of every session
1. Read `wiki/my-instructions.md` (everything I told you so far). It beats anything you'd assume.
2. Read `wiki/index.md` (the list of every page, one line each).
3. Read the last 5 entries of `wiki/log.md`.
4. Then answer or work. When you answer a question about my business, say which wiki page or Drive file it came from.

## Rules
- **One fact, one place.** Each fact (a price, a rule, a contact) lives on ONE wiki page. Other pages link to it.
- **Prices come only from my price brief** (the newest price list in my files). If the website or another file says something else, say so and write it on `wiki/open-questions.md`.
- Every wiki page starts with `# Title`, then one line: `Source: <Drive file name(s)> · Updated: YYYY-MM-DD`.
- Keep pages short: what I need to know, in plain English. Link to the Drive file for the details.
- New page → add one line to `wiki/index.md`: `- [Title](file.md) — one-line summary`. The hub reads this list.
- After every change, add one line at the TOP of the list in `wiki/log.md`: `## [YYYY-MM-DD] add | what changed`.
- Then save the changes to GitHub: commit with a short message and **push to the `main` branch** (not a side branch; only `main` updates the hub). The hub updates by itself about a minute later.
- No customer names, emails or phone numbers in the wiki. Write "a family of 4", "a company in Berlin".
- Never put passwords, keys or card numbers in any file.

## Which file wins
My files don't all count the same. When two say different things, the higher one wins:
1. What I tell you, and the decisions in `wiki/my-instructions.md` and `wiki/log.md`.
2. My newest price brief (for prices).
3. The newest brief or file on that topic (look at the date in the name or the file's last change).
4. Older files. Never files in folders called Old, Archive or Drafts.
An older file that says something else is **out of date, not an open question**. Only real conflicts between equally new sources go on `wiki/open-questions.md`.

## My instructions, and NEW RULE
- Every instruction or correction I give you gets one dated line in `wiki/my-instructions.md`, saved and pushed in the same turn, without me asking. You don't remember between sessions; only this file does.
- A message that starts with **NEW RULE** beats any older rule it conflicts with. Move the old rule to the "Replaced" list at the bottom of the file.
- No NEW RULE and two rules conflict? Ask me which one wins, once.

## How you work with me
- When I say "solve it", "fix it" or "you do that", do it. Ask only what only I can know.
- Never use a stand-in as if it were real (a placeholder logo, an emoji instead of my logo, an example price). If you can't get something, say so and leave the spot empty.
- Only numbers that are in my files. Never add up, estimate or fill in a number yourself unless I ask, and then say it's your calculation.
- One session at a time on this repo. Before you push, pull first; if another session changed something, look at it before you merge.
- If Drive (or another connector) stops working mid-session, say so. Connectors load when a session starts: the fix is a new session.

## Design of my hub
- For look-and-feel requests (colors, font, logo, dark mode), change **only `hub/brand.css`**, unless I ask for a new feature.
- Never break the search, the page list or the dashboard. After a change, tell me what to look at.
- If I say "undo the last design change", go back to the previous version of `hub/brand.css` (Git keeps it).

## My skills
- `add-to-brain`: add a new file from my Drive to the wiki.
- `check-brain`: find contradictions, old facts and missing pages.
- `update-dashboard`: put this month's numbers into `data/metrics.csv`.
