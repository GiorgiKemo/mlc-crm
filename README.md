# MLC Group CRM

Next.js App Router rebuild of the MLC CRM using the Arbor & Earth Stitch design system as the UI baseline.

## Current State

- `app/` contains four initial product surfaces translated from Stitch exports:
  - `/crew`
  - `/site-visit`
  - `/timeline`
  - `/estimating`
- `lib/crm-data.ts` holds the current product blueprint and mock data.
- `lib/supabase/` contains the current Supabase SSR helpers and typed table stubs.
- `proxy.ts` is ready for Supabase auth/session refresh when env vars are present.

## Development Stack

- GitHub: your development repo
- Vercel: your development workspace
- Supabase: your development project

The code is structured so this can be moved to Dian later by swapping environment configuration and deployment ownership, not by rewriting the app.

## Environment

Create `.env.local` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_PROJECT_REF=
NEXT_PUBLIC_APP_ENV=development
```

## Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
