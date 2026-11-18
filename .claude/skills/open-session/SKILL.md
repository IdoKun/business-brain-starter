---
name: open-session
description: Start a Claude Code session knowing where we left off. Use when I say "open", "start", "good morning", "where are we?" or "what's next?" at the start of a session.
---

# Open the session

A new Claude Code session remembers nothing from the last one. The handoff and the log are its memory. Read before you answer.

1. `git pull` (another session may have saved something).
2. Read, in this order:
   - `wiki/handoff.md` (what the last session left for you),
   - `wiki/my-instructions.md` (everything I told you),
   - `wiki/index.md` (every page),
   - the last 5 entries of `wiki/log.md`.
3. Check: if the log has entries newer than the handoff's date, the handoff is old. Say so in one line, and trust the log for what's done.
4. Answer in 5 lines or fewer:
   - where we are (what was done last),
   - what's half-done,
   - what's next,
   - what's waiting for me.
5. End with one question: "Start with <the next step>?" Then wait.

Don't redo or re-ask anything the handoff or the log already records as done.
