---
name: plan-big-job
description: Plan and build a big job (a website move, a new system, many files at once) in small checked steps. Use when I say "plan this", "big job", "help me move my website", or when a task will take more than one session.
---

# Plan a big job

Big jobs go wrong when Claude starts building before it understands. So: plan first, build in small steps, a second agent checks each step.

## 1. Plan mode first
Tell me to switch on **plan mode**: on claude.ai/code, the mode dropdown in the row under the message box → **Plan** (in the terminal: Shift+Tab). In plan mode you read and ask; you don't change anything.

## 2. Read what I already have
Ask me where my research is (Drive files, earlier chats I copied into a file, notes) and read all of it before you plan. Say in one line per source what you took from it.

## 3. Ask me questions, one at a time
Only what only I can know: what must not break, the deadline, who has access, what it may cost. Wait for each answer. Stop asking when the plan is clear.

## 4. Write the plan into the brain
Save it as `wiki/plans/<job-name>.md` (and its line in `wiki/index.md`):
- the goal in one line, and what "done" looks like;
- the steps, small, numbered, each one testable on its own;
- for each step: how we'll know it worked, and how to undo it;
- what must not change (my live website stays up until the new one is checked).
Show me the plan. **Build nothing until I say yes.**

## 5. Build one step at a time
- Do one step. Test it. Then run the **checker** agent on what changed (`.claude/agents/checker.md`).
- Checker says BLOCK → fix it once, check again. Still blocked → stop and ask me.
- After each step: one line in `wiki/log.md`, commit, push, tick the step in the plan.
- End of session mid-job → run `close-session`, so the next session picks up at the right step.
