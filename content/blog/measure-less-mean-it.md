---
title: "Measure less, but mean it"
date: "2026-08-11"
excerpt: "Dashboards multiply and attention doesn't. The case for tracking a handful of numbers you'll actually act on."
tags: ["product", "metrics", "teams"]
---

Every product team I've known goes through the same arc with metrics. First, nothing is measured and everyone argues from anecdotes. Then someone builds a dashboard, and it's glorious. Then dashboards multiply — activation funnels, retention cohorts, feature adoption grids, a wall of charts nobody has looked at since the quarter they were built. The team ends up data-rich and decision-poor, which is somehow worse than where they started, because now the ignorance has confidence intervals.

The problem isn't measurement. The problem is that **a metric only matters if someone will change their behavior when it moves.** That's the entire test. Not "is this interesting" — everything is interesting. Not "can we track it" — you can track anything. Will a specific person, seeing this number go the wrong way, *do something differently next week?* If no, it's not a metric. It's wallpaper with an ETL job.

Run your dashboards through that filter and most charts die immediately. What survives, in my experience, is embarrassingly short — for most products, something like: are the right people showing up, do they succeed at the core thing, do they come back, and one or two numbers for whatever this quarter's bet is. Five, maybe six numbers. Few enough that everyone knows them cold, which is precisely what makes them powerful. A metric the whole team can recite is a metric the whole team is quietly optimizing all day. Forty metrics means zero metrics.

A few hard-won footnotes to go with the short list:

**Instrument the moment of value, not the moment of motion.** Logins, clicks, sessions — motion. The workflow published, the report shared, the job that ran successfully — value. Motion metrics drift upward while users quietly fail; they're how teams get surprised by churn that was visible for months in the number they weren't watching.

**Pair every target with a guardrail.** Push activation and quality will sag; push volume and support tickets will bloom — not because anyone's cynical, but because attention is a spotlight and the dark spots drift. Every number you're driving up needs a partner you're refusing to let fall. Targets without guardrails don't fail loudly; they fail somewhere else, later, with interest.

**And keep respecting the anecdote.** A single support ticket, read carefully, routinely explains a chart that a quarter of dashboard-staring couldn't. The dashboard tells you *that* something happened; the user tells you *why*. Teams that let the big numbers silence the small stories end up statistically informed and substantively confused.

The discipline, like most good disciplines, is subtraction. Delete the wallpaper. Keep the handful of numbers you'll actually act on, put them where everyone trips over them daily — and when one of them moves, mean it.
