---
title: "Debugging is the art of shrinking the question"
date: "2026-06-24"
excerpt: "Great debuggers aren't smarter. They're more disciplined about turning one huge unanswerable question into many small answerable ones."
tags: ["engineering", "debugging"]
---

Watch a great debugger work and you'll notice something odd: they don't seem to be having ideas. No inspired guesses, no sudden leaps. They just ask a boring little question, answer it, and ask a slightly less boring one. Twenty minutes later the bug is cornered, and it looks like luck.

It isn't luck. It's a discipline, and the discipline is this: **never work on a question you can't answer. Shrink it until you can.**

"Why is checkout broken?" is unanswerable. You can't run an experiment against it. So you split it. Does it fail for everyone or some users? — answerable, go look. Some users. Okay: what do the failing users share? Payment method. Does it fail with that payment method in staging? Yes. Did it fail last week? No. What changed between then and now? Now you have a diff to read instead of a universe to search, and the bug has gone from mystery to paperwork.

Each question in that chain is almost embarrassingly small. That's the point. Small questions have cheap, reliable answers, and the answers compound. The amateur mistake — I made it for years — is staying up at the big question, rereading code and *thinking harder*, hoping to spot the flaw by intuition. Sometimes you do, and it feels great, and the feeling teaches you the wrong lesson. Intuition doesn't scale to unfamiliar systems at 2am. The splitting discipline does.

A few habits that follow from taking this seriously:

**Say your current hypothesis out loud, and say what evidence would kill it.** If no observation could prove you wrong, you don't have a hypothesis — you have a hunch wearing a lab coat. This is also, not coincidentally, why explaining a bug to a colleague so often solves it mid-sentence. Speech forces structure that private staring doesn't.

**Trust the checkpoint, not your certainty.** "It can't be the cache" is how the cache stays broken for two more hours. The whole reason bugs survive is that some assumption everyone holds is false. Verify the "obvious" things first precisely *because* nobody suspects them — it takes five minutes and it's where bugs live.

**When you find it, ask what would have made this faster.** A missing log line, an alert, a clearer error message. The best teams I've worked with treat every ugly debugging session as a bill for missing observability, and they pay it while the pain is fresh.

None of this is glamorous. That's what I've come to like about it. Debugging rewards patience and honesty more than brilliance — which means it's learnable, which means the gap between you and the person who "is just good at debugging" is a habit, not a gift.
