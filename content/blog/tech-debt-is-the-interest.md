---
title: "Tech debt isn't the mess. It's the interest."
date: "2026-06-16"
excerpt: "Ugly code that nobody touches costs nothing. The debt that matters is the kind you pay on every single change."
tags: ["engineering", "tech-debt", "practices"]
---

Somewhere along the way, "tech debt" became a synonym for "code I don't like." Old patterns, inconsistent naming, that framework we'd never choose today. Engineers point at it, PMs nod gravely, and a cleanup epic gets created and never scheduled.

I want to argue for a colder definition: tech debt is measured in interest payments, not in ugliness. The question is never "is this code bad?" It's "what does this code cost us per change?"

By that definition, some genuinely hideous code is debt-free. Every codebase has a gnarly module that has worked untouched for five years, handling some stable corner of the business. It's ugly. It's also *finished*. Rewriting it would spend real money to reduce a cost of zero — and introduce fresh bugs into something that had none. Leave it alone. Put a comment at the top wishing travelers good luck.

Meanwhile, some perfectly clean-looking code is bleeding you dry. The model that no longer matches how the business thinks, so every feature needs a translation layer. The abstraction with two implementations that grew nine, where a one-line change fans out into eleven files. The test suite that fails randomly, so every deploy includes twenty minutes of re-running and doubt. This is the real debt, and its tell isn't ugliness — it's *friction on things you change often*.

This reframe changes how you prioritize:

**Follow the churn.** Debt in a file you touch weekly matters a hundred times more than debt in a file you touch yearly. Your version control history literally knows where the interest is accruing — the files with the most commits and the most groans. That's the cleanup list, and it's rarely the code people complain about in retros.

**Pay debt in the path of features, not in dedicated quarters.** The "cleanup sprint" has a dismal record for a reason — it competes against features and loses, forever. What works is smaller and quieter: when a feature routes through a high-friction area, budget the extra 20% to leave the area better. The refactor rides along with the value, so it actually ships.

**Say the number out loud.** "This part is messy" gets you nothing from stakeholders. "Changes in this area take three days instead of one, and we change it about six times a quarter" gets you a decision, because now it's arithmetic instead of aesthetics. Debt arguments fail when they sound like taste and succeed when they sound like cost.

And when you do take on debt deliberately — shipping the shortcut to hit a real deadline — write down what you skipped while you still remember. Future-you doesn't need an apology. Future-you needs a map.

The mess was never the problem. The monthly payment is. Find where you're actually paying it, and spend your cleanup budget there — not on the code that merely offends you.
