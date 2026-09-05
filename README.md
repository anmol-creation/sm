# Janmarg

Janmarg is an India-first civic problem-solving prototype. It turns a reported problem into a living system of evidence, solution debate, evolution and ground-reality progress.

## Run

`npm install` then `npm run dev`. The MVP uses local mock data and client state; production persistence, identity, AI and authority integrations are intentionally future work.

## Architecture

Next.js App Router, React client interactions, Tailwind v4 design tokens, Lucide icons, and a domain model in `lib/data.ts`. The problem is the primary object; priority, solution strength and contributor reputation are independent signals.
