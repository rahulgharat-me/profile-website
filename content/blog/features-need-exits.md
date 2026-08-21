---
title: "Every feature needs an exit plan"
date: "2026-07-01"
excerpt: "We plan launches obsessively and removals never. But a product's quality is set as much by what leaves as by what ships."
tags: ["product", "process", "practices"]
---

Product teams are magnificent at beginnings. Kickoffs, specs, launch checklists, announcement posts — the machinery of adding is polished and beloved. Ask the same team how they *remove* a feature and you get silence, then someone mentions that one deprecation from three years ago in the tone people use for war stories.

The arithmetic here is unforgiving. Ship ten features a year, remove zero, and in five years your product carries fifty features — every one demanding testing on each release, consideration in each redesign, a corner of every new engineer's ramp-up, and a slice of every user's attention when they scan a menu. Most of those fifty aged badly: the integration whose vendor pivoted, the workflow built for a customer who churned, the setting that made sense before the redesign made it a fossil. None of them cost enough, individually, to be anyone's problem. Together they're the reason the product feels heavy and the team feels slow, and nobody can name a single decision that did it.

Features don't cost what they cost to build. They cost what they cost to *keep* — forever, compounding, invisibly.

What I've started doing about it, with mixed but real success:

**Ask the exit question at the entrance.** One line in the spec: how will we know this succeeded, and what do we do if it hasn't by next year? Nobody can perfectly predict, and that's fine — the point is making removal *conceivable* at the moment of maximum optimism, so that a year later the conversation is "we said we'd check this" instead of "but someone spent months on it."

**Audit adoption annually, and let the numbers be rude.** Every feature's usage, once a year, on one sheet. There will be shocks — flagship efforts in single-digit use, forgotten utilities quietly beloved. Teams consistently misestimate this because the features they discuss most and the features users touch most are barely correlated. You cannot manage a portfolio you've never once listed.

**Sunset like you launch — with craft.** Removal done badly is a betrayal; the handful of users who loved that feature are real people mid-workflow. Long notice, honest reasoning, a migration path, generous timelines. Done well, deprecation *builds* trust — it tells users the product is tended, that things which stop earning their place don't just rot in the menus. An overgrown product tells them the opposite, and they can feel it even when they can't articulate it.

The gardening metaphor is overused because it's correct: pruning isn't the opposite of growth, it's what makes growth survivable. A product that only ever adds isn't ambitious.

It's unmaintained — it just doesn't know it yet.
