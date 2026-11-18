---
name: close-session
description: Close a Claude Code session properly, check the work, and leave a handoff so the next session knows where we are. Use when I say "close", "close the session", "I'm done for today", "wrap up", or "is it safe to close?".
---

# Close the session

Every Claude Code session starts with no memory of the last one. It isn't one long chat: each session is a new Claude. This skill is how today's work reaches the next one. Do all five steps, in order.

## 1. Check the work
- Run `git status`. List every changed file in one line each.
- Every number you added or changed today: name the Drive file it came from. No file → say so; don't save the number.
- Every instruction or correction I gave today has its dated line in `wiki/my-instructions.md`. Missing → add it now.
- New pages are listed in `wiki/index.md`, and today's changes have their lines in `wiki/log.md`.
- If you changed the hub, tell me which page to open to check it.

## 2. Write the handoff
Replace everything below the comment line in `wiki/handoff.md` (max 15 lines):
- **As of:** date and time.
- **Done last time:** what we finished today, in plain words.
- **Half-done:** what we started and didn't finish, and where it is (file or page name).
- **Next:** the first thing the next session should do.
- **Waiting for me (the owner):** anything only I can do or decide.
Update the `Updated:` date at the top.

## 3. Log it
One line at the TOP of `wiki/log.md`: `## [YYYY-MM-DD] close | <one line: what we did>`.

## 4. Save to GitHub
Pull first (`git pull`), then commit with a short message and push to `main`. If the pull brought changes from another session, look at them before you push.

## 5. Tell me
- **Safe to close** → only when step 4 pushed. Say "Safe to close" and the one-line "Next".
- **Not safe** → say what failed (push refused, a number with no source, something half-written) and what to do.

Never say "safe to close" before the push went through.
