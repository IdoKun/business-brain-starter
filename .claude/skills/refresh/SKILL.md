---
name: refresh
description: Catch up in the middle of a session when Claude has forgotten or is out of date. Use when I say "refresh", "update yourself", "you forgot", "you don't remember", or "read the brain again".
---

# Refresh

Use this mid-session: you forgot something I told you, or another session changed the brain while this one was open.

1. `git pull`. Name the files that changed, one line each, or say "nothing new".
2. Read again: `CLAUDE.md`, `wiki/my-instructions.md`, `wiki/handoff.md`, the last 5 entries of `wiki/log.md`.
3. If I named what you forgot, find it (search the wiki for the word) and quote the line and the page it's on.
4. Tell me in 3 lines or fewer: what you had wrong or missing, and what you know now.
5. If what you forgot was something I told you in a chat and it isn't in `wiki/my-instructions.md` yet, add it there now (dated), then commit and push. That way the next session won't forget it either.

Then go back to what we were doing.
