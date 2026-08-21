---
title: "An API is a promise you can't easily take back"
date: "2026-07-21"
excerpt: "Code is easy to change. Interfaces are not. Why the boundary deserves ten times the care of the implementation behind it."
tags: ["engineering", "api-design", "architecture"]
---

There's a category of decision in software that feels small on the day you make it and turns out to be permanent. Naming a public endpoint. Choosing what a webhook payload contains. Deciding that an ID is a number instead of a string. Each takes five minutes in a pull request. Each can still be haunting you a decade later.

The dividing line is simple: **implementation is yours; interface is theirs.** Everything behind the boundary you can rewrite on a whim — swap the database, restructure the modules, nobody outside will ever know. Everything at the boundary belongs to your consumers the moment they build on it, and they will build on it in ways you never sanctioned. Return a field "temporarily"? Someone's dashboard depends on it now. Let an endpoint accept malformed dates by accident? That's not a bug anymore; that's a feature you didn't know you shipped, with users who will file angry tickets when you fix it.

Working on a platform product makes this brutally concrete. Our APIs and component contracts get consumed by thousands of apps we've never seen, built by people we'll never meet. Every loose edge we shipped in year one is still with us. The clean implementations we agonized over? Rewritten several times, painlessly. Nobody outside noticed, because the promise held while the machinery changed. That asymmetry — interfaces are forever, implementations are Tuesday — is the whole lesson, and everything else follows from it.

So spend your care budget where the permanence is:

**Expose the minimum.** Every field you return, someone will depend on; every parameter you accept, someone will abuse. Adding later is a release note — removing later is a migration project with a deadline and casualties. When in doubt, leave it out. You can always add. You can almost never subtract.

**Design from the caller's chair.** Write the code you *wish* consumers could write, then build the API that makes it real. Interfaces designed from the inside out leak their internals — table names in field names, implementation quirks as parameters — and those leaks become promises too. The caller doesn't care how your system is shaped. The interface is for them.

**Make the errors as good as the successes.** Integrators spend most of their first week living in your error responses, and they'll judge the whole platform by whether a failure says "invalid_date_format in field start_at" or just "400". Error design *is* API design — it's the part of the promise people read most closely.

**And version honestly.** If you must break the promise, break it loudly: new version, migration guide, a long overlap, and telemetry so you know who's still on the old one before you turn it off. "We'll just change it, few people use that field" is a sentence that precedes a surprising number of incidents.

None of this argues for slow. It argues for asymmetric care. Behind the boundary, move fast and refactor ruthlessly — that freedom is precisely what a good boundary buys you. At the boundary, slow down and think about the stranger who'll build on your five-minute decision for the next ten years.

Because an interface isn't code. It's a promise. And people remember who breaks promises.
