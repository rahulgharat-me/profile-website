---
title: "A code review is a conversation, not a gate"
date: "2026-05-26"
excerpt: "The healthiest review cultures I've seen optimize for shared understanding, not for catching each other's mistakes."
tags: ["engineering", "code-review", "teams"]
---

You can learn almost everything about a team's health by reading a week of their code review comments. Not the code — the comments.

Some teams review like customs officers. Every PR is a suspect. Comments are terse, approval is grudging, and the unstated goal is to catch the other person slipping. Other teams review like colleagues thinking together. Questions instead of verdicts. "What happens if this list is empty?" instead of "this is wrong."

Both styles catch bugs. Only one of them builds a team.

The thing I took embarrassingly long to learn as an engineer: the primary output of code review isn't defect detection. Tests, types, and CI catch most mechanical mistakes these days. The irreplaceable output is *shared understanding* — after a good review, two people understand that change instead of one. Multiply that across a year and you get a team where knowledge isn't locked in individual heads, where vacations don't cause incidents, and where the phrase "only Rahul understands that module" slowly stops being true.

Once you see review as a conversation, a few practices follow naturally.

Small PRs aren't a style preference, they're what makes conversation possible. Nobody can genuinely discuss a two-thousand-line change; they can only skim it and pray. If a reviewer's realistic options are "rubber stamp" or "block for a week," the PR was too big before anyone commented.

Comments should carry their reasoning. "Rename this" teaches nothing. "This name collides with the concept we use in billing, and someone will confuse them" teaches something the author will apply for years. The extra sentence costs you fifteen seconds and compounds forever.

And authors set the tone more than reviewers do. A PR description that explains *why* the change exists, flags the risky part, and honestly says "I'm not sure about this bit" invites a real conversation. A blank description invites a blank review.

One heuristic I push on every team I work with: if a review thread goes past three back-and-forths, stop typing and talk — a call, a desk visit, whatever. Then write the conclusion back on the PR for the archaeologists. Long comment threads are almost always two people misunderstanding each other politely, in writing, at great expense.

None of this slows shipping down. Review-as-conversation feels slower per PR and turns out faster per quarter, because understanding is the thing that was actually rate-limiting all along.
