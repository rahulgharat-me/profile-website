---
title: "What nine years of internal tools taught me about developers"
date: "2026-07-28"
excerpt: "Internal tools are where a company's real workflows live. Building a platform for them changes how you think about what developers actually want."
tags: ["low-code", "internal-tools", "product"]
---

I've spent close to a decade at DronaHQ working on a platform people use to build internal tools — admin panels, approval flows, ops dashboards, the unglamorous software that keeps companies running. It's a strange corner of the industry. Nobody tweets screenshots of their refund-approval dashboard. But watching thousands of these tools get built has taught me more about developers than anything else in my career.

A few things I keep coming back to.

**The tool nobody talks about is the one everybody uses.** In most companies, the software with the most daily active users isn't the customer-facing product. It's some internal panel a support team lives in for eight hours a day. It was probably built in a hurry, by whoever had time, and it hasn't had a design review in its life. There's a whole invisible economy of this software, and the people using it have quietly adapted to its rough edges the way you adapt to a squeaky door at home.

**Developers don't hate UI work. They hate repeating it.** The stereotype says backend engineers can't stand building frontends. What I've actually observed is narrower: they can't stand building the same frontend for the twelfth time. A table with filters, a form with validation, a detail view with an approve button. There's no craft left in it after the third one. That's the real pitch for low-code, by the way — not "avoid code," but "stop re-solving solved problems." The interesting logic, people still want to write by hand. They should.

**Speed of change matters more than speed of build.** Everyone measures how fast you can build a tool from scratch. Almost nobody measures how fast you can change it three months later when the ops process changes — and internal processes change constantly. The tools that survive aren't the impressive ones. They're the ones someone could modify on a Tuesday afternoon without fear. If I could put one metric on a billboard for internal tools, it would be time-to-safely-change, not time-to-first-version.

**The requester is never the user.** A manager asks for the tool. An agent uses the tool. These are different people with different incentives, and the gap between them is where internal tools go bad. The manager wants reports; the agent wants fewer clicks. When we've done user research on internal tools — which almost nobody does, and everybody should — the feedback from actual daily users was always a surprise to the person who commissioned the thing.

If there's one thread through all of this, it's that internal software is real software. It deserves versioning, review, and a little bit of love. The companies that treat it that way move noticeably faster than the ones that treat it as an afterthought — because every process in the company runs through it either way.

You can tell a lot about an engineering culture by looking at its admin panels. I mean that completely seriously.
