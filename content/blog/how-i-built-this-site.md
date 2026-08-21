---
title: "How this site got built in an evening (and what that means)"
date: "2026-08-21"
excerpt: "I built and shipped this website in one sitting with an AI coding agent doing the typing. Some honest notes on what that felt like."
tags: ["ai", "development", "personal", "meta"]
---

Full disclosure: I didn't hand-type this website. I bought the domain, opened an AI coding agent, described what I wanted — and over one evening of conversation, out came a Next.js site with static export, a markdown blog, a deploy pipeline to GitHub Pages, DNS wired to this domain, HTTPS, all of it. My contribution was decisions, corrections, and a photo from a foggy morning walk.

Having spent years in product and engineering, I want to record what this actually felt like, while the novelty is fresh enough to see clearly.

The first honest observation: **the typing was never the hard part, and now that's undeniable.** Everything the agent did fast — scaffolding, configs, the CSS I'd have fumbled for an hour — is work whose value was always logistical, not intellectual. What remained irreducibly mine were the decisions. Single page or multi? Which repo, which branch strategy, what tone for the writing, is this photo crop right? The evening was a compressed product cycle: requirements, tradeoffs, review, iterate. My old jobs — engineer, architect, PM — all showed up. Only the keyboard time disappeared.

Second: **taste became the bottleneck, and I mean that as good news.** When building is slow, you accept whatever you managed to build; sunk cost does your design reviews. When building is nearly free, you iterate until it's actually right — we redid the deployment approach twice and reworked the layout mid-flight simply because I changed my mind, and changing my mind cost nothing. The output ceiling stopped being "what I can implement" and became "what I can tell is good." Those have always been different skills. It's just never mattered this much which one you had.

Third, the caveat that keeps the first two honest: **I could check the work.** When a build failed or DNS misbehaved, I knew what questions to ask, and I could tell confident-and-right from confident-and-wrong — which matters, because an agent's wrong answers arrive wearing the same steady voice as its right ones. Someone with no technical grounding could have gotten *a* website. I'm less sure they'd notice what was subtly off, or fix it when it drifted. The tools lowered the floor dramatically. The ceiling still belongs to judgment, and judgment still comes from years of doing things the slow way.

Where does that leave the slow way? Genuinely unsure. My instinct is that some of it remains load-bearing — you learn what good looks like by producing bad versions personally — and some of it was always ritual we mistook for rigor. Sorting one from the other feels like the actual question of the next few years, for teams and for anyone deciding what to learn.

What I'm sure of is smaller: a thing I'd postponed for years because of setup friction now exists, because one evening the friction didn't. However the tools shake out, the pattern held — the work was never the typing.

It was knowing what to want.
