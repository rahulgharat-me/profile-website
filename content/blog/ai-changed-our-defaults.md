---
title: "AI didn't replace anyone on my team. It changed our defaults."
date: "2026-08-18"
excerpt: "Two years of using AI in real product work: what stuck, what didn't, and why the interesting change is in the small decisions."
tags: ["ai", "development", "product"]
---

I've now watched AI tools go through the full hype cycle inside a real product team — the demos, the skepticism, the quiet adoption, the occasional facepalm. Long enough to have an opinion that isn't borrowed from a keynote or a doom thread.

Here it is: nothing dramatic happened. Nobody was replaced. But a dozen small defaults changed, and those small changes add up to something real.

**The default for "is this worth doing?" moved.** There used to be a category of work that was valuable but never urgent enough: the migration script for a one-off cleanup, the internal utility that saves ten minutes a day, the test coverage for that gnarly old module. The cost of starting was just high enough that these things stayed on the someday list forever. AI dropped the cost of starting. Not to zero — you still have to review everything, and review is real work — but enough that the someday list actually shrinks now. That's new.

**The blank page is gone.** Specs, release notes, test plans, that awkward first draft of an API design. The value was never in the first draft — it was always in the arguing that follows. Now we get to the arguing faster. I still rewrite most of what a model gives me, but rewriting a mediocre draft is genuinely easier than staring at an empty document. Anyone who writes for a living has known this about first drafts forever; now it applies to more of engineering.

**Reading code got cheaper, and that surprised me most.** Everyone talks about AI writing code. The bigger shift on our team has been AI explaining code — an unfamiliar module, a cryptic stack trace, a regex some contractor wrote in 2019. Questions that used to mean interrupting the one person who knows that corner now get answered without the interruption. The person who knows the corner is thrilled about this, by the way.

**And one default that moved the wrong way.** Plausible-looking output creates a temptation to skim-review. A confident wrong answer is more dangerous than an obvious gap, because it sails through tired eyes at 6pm. We've had to be deliberate about this: if anything, generated code gets *more* scrutiny than hand-written code, not less, because the failure mode is subtler. The bugs aren't usually syntax — they're a wrong assumption stated with perfect grammar.

What I notice overall is that AI amplifies whatever habits a team already has. Teams with good review culture and clear specs get faster. Teams that were sloppy get sloppier, faster. The tool doesn't decide which — your defaults do.

Which means the old boring advice — review carefully, write things down, keep changes small — didn't get obsolete. It got a raise.
