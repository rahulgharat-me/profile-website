---
title: "Estimates are forecasts, and we keep treating them like promises"
date: "2026-07-07"
excerpt: "Software estimates fail for structural reasons, not because engineers are bad at math. What actually helps is changing what we ask for."
tags: ["product", "planning", "process"]
---

Nobody is angry at the weather forecaster for saying 60% chance of rain when it stays dry. Everybody is angry at the engineer who said two weeks when it took five. Same epistemic situation, wildly different treatment — and I've been on both sides of that anger, first as the engineer giving the number, now as the PM asking for it.

Here's the structural problem, and it took me years to say it this plainly: **a software estimate is a forecast about work that has never been done before.** If it had been done before, we'd reuse the code. Every task worth estimating contains some amount of discovery — the API that behaves differently than documented, the edge case nobody imagined, the "small" migration hiding under the feature. You cannot know the size of a discovery before you make it. That's what discovery means.

So the surprises are asymmetric. Almost nothing takes dramatically less time than estimated, because the happy path was the estimate. But plenty of things take dramatically longer, because any single unknown can explode. Add up a bunch of "two weeks, unless" and the unless always wins somewhere. This isn't pessimism; it's arithmetic with a one-sided error distribution.

Knowing this, what actually helps? A few things I've settled on from the PM chair:

**Ask for uncertainty, not just a number.** "Two weeks" hides everything that matters. "One to four weeks — one if the vendor API works as documented, four if it doesn't" tells me where the risk lives and hands me an obvious move: go find out about that API *first*, before committing anything to a customer. The range isn't wishy-washy. The range is the information.

**Spend a day de-risking before estimating anything big.** A quick spike on the scariest unknown converts the worst forecasts into decent ones. Teams resist this because a spike "isn't progress." A confident wrong date isn't progress either — it's a scheduled disappointment plus interest.

**Watch the trailing edge, not the ritual.** Story points, t-shirt sizes, planning poker — fine, whatever gets conversation flowing. The genuinely useful number is how long things *actually took* recently. Yesterday's weather beats today's optimism, every time. If your last five "one-week" tasks took three weeks, your next one-week task is a three-week task, no matter what the ceremony concluded.

**And when a date slips, make silence the crime — not the slip.** Slips are physics. A slip announced early is a plan adjustment; a slip announced the day before is a betrayal. Teams learn within weeks whether honesty about bad news is rewarded or punished, and they update their behavior accordingly. You get exactly the transparency you pay for.

I still ask engineers for dates — the business genuinely needs them. But I try to remember, every time, what I'm actually holding: a weather report from someone standing at the edge of unexplored territory. Useful. Directional. And not a promise, no matter how much the spreadsheet wants it to be one.
