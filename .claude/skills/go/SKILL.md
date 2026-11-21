---
name: go
description: Finish a change properly before calling it done: check it against my brief and rules, prove it works, ask me, then save. Use when I say "go", "finish it", "is it done?", "ship it", or at the end of any task that changed files or the hub.
---

# Go: finish it properly

"Done" means proven, not "Claude says so". Claude can sound sure and still be wrong (it can say "updated" when nothing changed). This skill is how we check before we trust. Do all five steps, in order.

## 1. Say what changed
- Run `git status` and `git diff --stat`. One line per changed file, in plain words (e.g. "wiki/prices.md: the winter price is now €95").

## 2. Check it against the brief
- Find the brief or rule this task came from (`CLAUDE.md`, `wiki/my-instructions.md`, the page I named). Quote the line.
- For each line of the brief: matches / missing / wrong. Be honest; "missing" is fine.
- Every number you added or changed: name the Drive file it came from. No source → don't keep the number; tell me.

## 3. Prove it works
- Open or read the result itself, not your memory of it (the file, the hub page, the site page). Quote what you see.
- If there is a checker for this kind of work (e.g. the checker agent or a check skill), run it and show its PASS / BLOCK / ASK ME lines.
- Something failed → fix it, then repeat step 3. Same mistake twice → it becomes a rule in `wiki/my-instructions.md` (dated), so it never happens again: fix the brief, not the chat.

## 4. Ask me
- Show me in at most 5 lines: what changed, how you checked it, anything you're unsure about.
- Wait for my "yes". No yes → nothing is saved.

## 5. Save it
- After my yes: one line at the TOP of `wiki/log.md` (`## [YYYY-MM-DD] go | <what>`), then `git pull`, commit with a short message, push to `main`.
- Tell me "Done and saved" only after the push went through. Ending the session? Say "close" next.
