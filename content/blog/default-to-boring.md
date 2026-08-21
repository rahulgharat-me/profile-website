---
title: "Default to boring, budget for one adventure"
date: "2026-08-03"
excerpt: "Most technology choices should be dull. The trick is being deliberate about the one place you take a real risk."
tags: ["engineering", "architecture", "practices"]
---

Dan McKinley wrote the canonical essay on this years ago — "Choose Boring Technology" — and I've never stopped thinking about it, because I've watched teams live both sides of it.

The failure mode is familiar to anyone who's been around startups or eager teams: a new project starts, and it becomes the vehicle for everything the team has been itching to try. New framework, new database, new queue, new deployment model — each defensible alone, and together a stack where every incident is a research project. Six months in, half the engineering time goes to feeding the novelty, and nobody can tell which shiny thing is causing tonight's mystery, because they're all new and they're all suspects.

The other extreme is real too — teams frozen on a stack so old that hiring is hard and every library is a security advisory. Boring can curdle into ossified.

The balance I've landed on: **be boring by default, and be extremely deliberate about your exceptions.** Pick one place per project — ideally per year — where a new technology plausibly changes your outcome, and take that bet with open eyes: a spike first, a rollback plan, one named owner who goes genuinely deep instead of everyone learning it a little. Everywhere else, choose the thing your team already operates in their sleep.

What people miss about boring technology is that its virtue isn't the absence of excitement — it's the *presence of knowledge*. Postgres and their ilk are known quantities in the fullest sense: known failure modes, known scaling paths, a decade of Stack Overflow archaeology, and — crucially — the ops instincts your team has already paid for in past incidents. When something breaks at 2am, someone has seen it before. That accumulated familiarity is an asset with compound interest, and every gratuitous new technology writes it off to zero.

The question I ask whenever a shiny proposal comes up isn't "is this better?" — it usually is better, at something, in isolation. The question is: **"what specific problem do we have that our boring option genuinely cannot solve?"** If the answer is a real wall — not a preference, not a conference talk, an actual wall — that's a candidate for this year's adventure. If the answer is vibes, the answer is Postgres.

And here's the part I tell engineers who find this depressing: boring infrastructure is what makes exciting *products* possible. The teams shipping the most interesting features are, almost invariably, running the dullest stacks — all their risk appetite is spent where users can feel it, instead of on plumbing that users never see. Your novelty budget is real, and it's smaller than you think.

Spend it on purpose. Spend it where it shows.
