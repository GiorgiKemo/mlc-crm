export const routePreviews = [
  {
    href: "/crew",
    title: "Morning Prompt",
    label: "Crew-first",
    summary:
      "A role-scoped opening screen that gives field crews only the route, work order, order of operations, and privacy controls for the current assignment.",
    image: "/stitch/morning-prompt.png",
  },
  {
    href: "/site-visit",
    title: "Site Visit Hub",
    label: "Field capture",
    summary:
      "Photos, voice memos, EXIF-aware assets, and master parameters collected on site so the estimate engine can inherit clean inputs.",
    image: "/stitch/site-visit-hub.png",
  },
  {
    href: "/timeline",
    title: "Client Timeline",
    label: "Historical intelligence",
    summary:
      "Unified chronology for Gmail, Drive, scanned notes, calls, and media so historical records and new operations live in the same thread.",
    image: "/stitch/client-timeline.png",
  },
  {
    href: "/estimating",
    title: "Estimation Engine",
    label: "Estimate to field",
    summary:
      "Margin-aware calculations that fan out into client estimates, work orders, purchase orders, and field supervisor checklists.",
    image: "/stitch/estimation-engine.png",
  },
] as const;

export const architecturePillars = [
  {
    title: "Historical Data Integration",
    kicker: "Retro logs since 2010",
    summary:
      "Backfill MLC history from Gmail, Drive, and physical binders so legacy consultations and jobs become searchable CRM records.",
    bullets: [
      "Deep-scan Gmail and Drive history for client names, addresses, money, and attachments.",
      "OCR handwritten binders, labor logs, and expense sheets into normalized project records.",
      "Merge recovered artifacts into one chronological project timeline.",
    ],
  },
  {
    title: "Communication Intelligence",
    kicker: "The active assistant",
    summary:
      "Let the platform recognize meetings, missing details, and incoming messages, then route everything into the correct client context automatically.",
    bullets: [
      "Auto-flag meetings detected in messages when date or time details are incomplete.",
      "Create a single communication hub for email, text, calls, and referenced media.",
      "Route inbound communication by contact identity and project affinity.",
    ],
  },
  {
    title: "Estimate-to-Field Pipeline",
    kicker: "The brain",
    summary:
      "Turn site inputs into numbers, then into field-ready documents without recreating the same information across multiple pages.",
    bullets: [
      "Capture photos, videos, recordings, and site notes as master parameters.",
      "Feed formulas for materials, labor, and optimization ranges from those inputs.",
      "Generate client estimate, work order, purchase order, and supervisor checklist from one source.",
    ],
  },
  {
    title: "Smart Camera Logic",
    kicker: "Media as proof",
    summary:
      "Use EXIF metadata and interval capture to file proof-of-work automatically and turn imagery into operational evidence.",
    bullets: [
      "Read original date taken and GPS metadata for new and historical media.",
      "Support interval snapshot mode for passive visual job logs.",
      "Use photo timestamps as verification inputs for crew hours.",
    ],
  },
  {
    title: "Field Operations & Privacy",
    kicker: "Crew-safe access",
    summary:
      "Expose only the current assignment to field crews while supporting voice notes and a defensible personal mode.",
    bullets: [
      "Morning prompt opens directly to destination, work order, and order of operations.",
      "Push-to-talk converts audio into maintenance alerts or project notes.",
      "Private mode stops tracking and marks time as personal for insurance and labor separation.",
    ],
  },
  {
    title: "Calendar & Contact Sync",
    kicker: "Bi-directional operations",
    summary:
      "Sync calendars and contacts in both directions so every appointment and relationship carries the right context automatically.",
    bullets: [
      "Calendar events create or update contacts automatically.",
      "Each client file exposes a mini calendar snapshot and a direct link to scheduling.",
      "Manual reminder toggles allow event-level suppression of client notifications.",
    ],
  },
] as const;

export const supabaseBlueprint = [
  {
    table: "profiles",
    purpose: "User records, role claims, crew privacy defaults, and team ownership.",
  },
  {
    table: "clients",
    purpose: "Primary CRM contact and property record with routing metadata.",
  },
  {
    table: "projects",
    purpose: "Job-level state, assigned crews, scheduling, and estimate linkage.",
  },
  {
    table: "timeline_events",
    purpose: "Unified chronology for email, calls, texts, scans, uploads, and flags.",
  },
  {
    table: "site_visit_assets",
    purpose: "Media, EXIF metadata, OCR text, transcripts, and derived master parameters.",
  },
  {
    table: "estimates",
    purpose: "Calculation snapshots, pricing inputs, optimization bands, and output totals.",
  },
  {
    table: "generated_documents",
    purpose: "Client estimates, work orders, purchase orders, and field checklist artifacts.",
  },
] as const;

export const developmentTracks = [
  "Use your GitHub repository and Vercel team during development so preview deployments are isolated from Dian's production footprint.",
  "Keep Supabase keys and project refs environment-driven so later migration is a project swap rather than a code rewrite.",
  "Preserve the CRM data model under typed helpers now so Gmail, Drive, OCR, and EXIF workers can be added incrementally.",
] as const;

export const morningPrompt = {
  user: "Elias",
  dateLabel: "Tuesday, Oct 24",
  progress: 25,
  taskLabel: "Task 1 of 4",
  note: "Finish the morning mulch prep to stay on schedule.",
  nextStop: {
    name: "The Sterling Estate",
    address: "482 Oak Ridge Terrace, West Hills, CA 91304",
    eta: "08:45 AM",
    distance: "4.2 miles",
    order: "Mulch refresh, irrigation hold, and entryway staging",
  },
  checklist: [
    {
      title: "Crew Safety Briefing",
      detail: "Equipment check and heat safety",
      done: true,
    },
    {
      title: "Load Premium Mulch",
      detail: "Check quantity: 15 cubic yards",
      active: true,
    },
    {
      title: "Arrive at Sterling Estate",
      detail: "Soft landing protocol",
    },
    {
      title: "Site Staging",
      detail: "Place tarps and gear",
    },
  ],
  accessScope: [
    "Today's route and work order",
    "Site visit assets for the assigned project",
    "Project notes and maintenance alerts",
  ],
  privacyNote:
    "Private mode disables location and interval capture, then logs the time block as Personal.",
  caution:
    "Water main repair is scheduled for 2 PM. Avoid the north zone irrigation test.",
};

export const siteVisitData = {
  title: "Active Field Assessment",
  subtitle: "Oakwood Estate • Phase 1 Discovery",
  location: "42 Oakwood Lane, North Sector",
  actions: [
    {
      title: "Record Voice Memo",
      detail: "Annotate site observations",
    },
    {
      title: "Capture Asset",
      detail: "Photo evidence for estimate",
    },
  ],
  parameters: [
    { label: "Acreage", value: "12.4 acres" },
    { label: "Soil Grade", value: "Grade C • clay-heavy mix" },
    { label: "Materials Requirement", value: "Harvest oak timber, limestone slabs, river stone mix" },
    { label: "Access Points", value: "8 mapped points" },
    { label: "Interval Snapshot", value: "45 min cadence" },
    { label: "Voice Queue", value: "3 memos awaiting extraction" },
  ],
  completion: 85,
  aiSummary: [
    "GPS and date-taken metadata resolve to the Oakwood property cluster.",
    "OCR queue is ready for binder scans and handwritten labor sheets.",
    "Material parameters are synced to the estimation engine draft.",
  ],
};

export const timelineEntries = [
  {
    year: "2024",
    date: "March 12",
    type: "Email",
    tone: "primary" as const,
    title: "Master Plan Expansion",
    description:
      "Correspondence regarding the northern acreage development. The client requested sustainable irrigation and a specialized apothecary garden.",
    attachment: {
      label: "Site_Survey_Rev_A.pdf",
      meta: "4.2 MB • Added by Studio Admin",
    },
  },
  {
    year: "2018",
    date: "October 04",
    type: "Photos",
    tone: "secondary" as const,
    title: "Oak Terrace Installation",
    description:
      "Phase II completion featuring custom-cut limestone terraces and restoration of the mature oak canopy. Awarded Project of the Year by the local landscape guild.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr2ENskzwXimgT1sxfsY5dmegHSvpGZew5ms8XkwmCClCLSAOdtonOPxHBRf9-iaRwPUUmKliIdXMr6qHiTn-K6Ckr-4PoW0GEk0cLkFiQJT13ufN2JRHK2lq5knN0LhK0MhMdQcxmFNncSNe7fUKmM-t6vWGTtCau7cXuSqVnb_hzaqZ7fwbxaj11U4KPi3rYXHf5Sb0OEaWqqX1ACwr2me35TzDk2DklQUpMDGi_IcQblOxIQMiCHTQTAlL2YLg87xGUkesY3Oml",
  },
  {
    year: "2010",
    date: "June 21",
    type: "Scanned Notes",
    tone: "neutral" as const,
    title: "Initial Site Consultation",
    description:
      "Met with John on-site. Soil samples show high clay content in the western quadrant. Client wants timelessness over trendiness and a 10-year growth plan for the perimeter hedging.",
    verified: true,
  },
  {
    year: "Now",
    date: "Today",
    type: "Flagged Meeting",
    tone: "danger" as const,
    title: "Auto-scheduled walkthrough requires time confirmation",
    description:
      "An inbound message agreed to a walkthrough for Thursday but never pinned the exact hour. The assistant routed the thread into this timeline and marked it for review.",
    attachment: {
      label: "Open routed conversation",
      meta: "Needs manual confirmation before notifications send",
    },
  },
] as const;

export const estimateData = {
  project: "Riverstone Estate Plaza",
  summary:
    "A comprehensive hardscape and sustainable flora installation package balancing architectural symmetry and water-wise irrigation.",
  total: "$42,850.00",
  margin: "34.2%",
  range: "32% – 40%",
  grossProfit: "$14,655.70",
  directCosts: "$28,194.30",
  materials: [
    { name: "Reclaimed Granite Pavers", quantity: "1,250 sqft", price: "$15,552.70" },
    { name: "High-Traction Mason Sand", quantity: "12 tons", price: "$2,487.50" },
    { name: "Recycled Base Gravel", quantity: "35 yd", price: "$3,825.15" },
  ],
  labor: {
    crewSize: "04",
    days: "12.5",
    total: "$15,835",
  },
  documents: [
    "Client Estimate",
    "Crew Work Order",
    "Purchase Order",
    "Field Supervisor Checklist",
  ],
  notes: [
    "Optimization favors the riverstone edge treatment because it keeps the premium look while lowering waste exposure.",
    "Voice memos and photographed measurements are already synced to this calculation snapshot.",
  ],
};
