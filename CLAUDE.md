# CLAUDE.md: how my business brain works

You are working in my business brain. Read this file first, every session.

## The three layers
1. **My files (Google Drive):** briefs, price lists, PDFs, Excel files, photos, reports. They are the sources. **Read them, never change, move or delete them.**
2. **The wiki (`wiki/` in this repo):** short, clear pages you write and keep up to date from my files. You own this layer.
3. **This file:** the rules.

## Start of every session
1. Read `wiki/index.md` (the list of every page, one line each).
2. Read the last 5 entries of `wiki/log.md`.
3. Then answer or work. When you answer a question about my business, say which wiki page or Drive file it came from.

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

## My skills
- `add-to-brain`: add a new file from my Drive to the wiki.
- `check-brain`: find contradictions, old facts and missing pages.
- `update-dashboard`: put this month's numbers into `data/metrics.csv`.
