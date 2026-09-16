# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of ksa-shoes-store — a Next.js 16 (App Router) + React 19 + Tailwind v4 storefront demo for a Saudi Arabian footwear retailer.
- Status: public, last commit 2026-04-14 (hero slider, live chat, dev badge, New Arrivals removed). Routes for shoes, sandals, accessories, sale, product detail, cart, checkout, about, contact, FAQ, shipping and size guide; React contexts for auth, cart, inventory and language; catalogue and reviews come from static files in `src/data`. Checkout collects card or cash-on-delivery with a COD fee but has no payment provider wired. No live URL is stated.
- Reviewed September 2026: a project-specific title and intro were added to the README along with a `## Status` line, changelog started, versioned as v2026.09 with the package version bumped. No application code was changed.
- Known gaps: the README was the untouched `create-next-app` boilerplate before this release and still carries the stock Getting Started / Learn More / Deploy sections below the new intro; no LICENSE; no tests or CI; no CHANGELOG before this release; a `DevBadge` component and a `ComingSoon` component indicate the build is still a demo rather than a live store.
- `AGENTS.md` / `CLAUDE.md` warn that this Next.js version has breaking changes versus older conventions — worth reading before any future code work here.
