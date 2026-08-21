---
title: "The most leveraged engineering skill is writing things down"
date: "2026-06-02"
excerpt: "Not documentation for its own sake — decisions. Six months from now, the 'why' is the only thing that's expensive to reconstruct."
tags: ["engineering", "writing", "practices"]
---

There's a moment that happens on every team, in every codebase, forever. Someone stares at a strange piece of code or a strange piece of process and asks: "Why is it like this?" And the answer is a shrug, or a legend, or "I think there was a reason once."

The code itself is never the problem. Code can be read. What can't be read is the context that produced it — the constraint that existed in 2021, the outage that scared everyone, the alternative that was tried and quietly failed. That context lives in people's heads, and people forget, change teams, and leave.

Which is why I've come to believe the highest-leverage habit in engineering isn't a technical skill at all. It's writing decisions down, at the moment they're made, in a place people will look.

Note what I'm *not* saying. Not "write more documentation." Exhaustive docs rot fast and mostly describe what the code already says. The thing worth capturing is smaller and rarer: **when you make a decision that will look non-obvious later, spend ten minutes writing why.** What you chose, what you rejected, and what would make you revisit. That's it. Three paragraphs. A decision log entry, a comment block, a short doc — the format matters far less than the timestamp and the honesty.

The payoffs come from everywhere at once:

The act of writing catches bad decisions before they happen. I've abandoned more than one "obvious" choice halfway through writing its justification, because the justification refused to hold still. If you can't write the why, you don't have a why — you have a mood.

New joiners stop paying the archaeology tax. On teams with decision logs, onboarding conversations shift from "how does this work" to "here's what we're doing next" — the new person read the history themselves, at their own pace, without booking anyone's calendar.

And arguments get shorter, because they stop repeating. Every long-lived team has a debate it re-runs annually with fresh participants and identical conclusions — monolith versus services, build versus buy, rewrite versus refactor. A written record turns the re-run into a link.

The objection is always time. But I've watched engineers spend three days reverse-engineering the intent behind a config value that ten minutes of writing would have explained. The time argument runs exactly backwards: writing is the fast option amortized over everyone who comes after you — including you, eight months from now, staring at your own choice like a stranger's.

Start stupidly small. One file, `decisions.md`, in the repo. Date, decision, why, what would change your mind. Do it for a quarter and you will never go back.
