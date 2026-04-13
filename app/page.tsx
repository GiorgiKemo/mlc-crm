import Link from "next/link";
import {
  ArrowRight,
  Bot,
  DatabaseZap,
  FolderArchive,
  GitBranch,
  HardDriveDownload,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActionLink,
  SectionLabel,
  StatusPill,
  SurfaceCard,
} from "@/components/primitives";
import {
  architecturePillars,
  developmentTracks,
  routePreviews,
  supabaseBlueprint,
} from "@/lib/crm-data";

export default function HomePage() {
  return (
    <AppShell
      currentPath="/"
      eyebrow="Development Workspace"
      title="MLC Group CRM rebuild"
      subtitle="This workspace now targets your GitHub, Vercel, and Supabase accounts for development so we can iterate cheaply, then move ownership later without rewriting the app."
      action={<ActionLink href="/crew">Open crew morning prompt</ActionLink>}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <SurfaceCard className="editorial-grid overflow-hidden">
          <SectionLabel>North Star</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Architectural Greenhouse UI with a real operational backend.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-on-surface-variant sm:text-base">
                The Stitch exports define the visual system. This rebuild turns
                those surfaces into a real App Router product with room for
                historical ingestion, communication routing, estimate
                generation, crew privacy, and later transfer to a different
                owner account.
              </p>
              <div className="flex flex-wrap gap-3">
                <StatusPill tone="primary" icon={LayoutTemplate}>
                  Four stitched workflows translated into routes
                </StatusPill>
                <StatusPill tone="secondary" icon={FolderArchive}>
                  Historical Gmail, Drive, and archive ingestion planned
                </StatusPill>
                <StatusPill tone="neutral" icon={Bot}>
                  AI assistant reserved for routing, OCR, and estimate logic
                </StatusPill>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] bg-surface-container-low p-5">
              {developmentTracks.map((track) => (
                <div
                  key={track}
                  className="rounded-[1.5rem] bg-surface-container-lowest p-4 text-sm leading-6 text-on-surface-variant"
                >
                  {track}
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionLabel>Current Dev Target</SectionLabel>
          <div className="space-y-5">
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <GitBranch className="size-4" />
                Development ownership
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Code and deployments should point to your GitHub repository,
                your Vercel workspace, and your Supabase project during
                development. Later handoff should be an environment transfer, not
                a redesign.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <DatabaseZap className="size-4" />
                Supabase first
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Authentication, timeline storage, site-visit assets, estimate
                snapshots, and generated documents will all fit inside the same
                typed database layer.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <ShieldCheck className="size-4" />
                Transfer strategy
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Keep all secrets and project refs in env files, keep auth logic
                claim-based, and avoid hardcoding owner-specific endpoints. That
                keeps the move to Dian later operationally cheap.
              </p>
            </div>
          </div>
        </SurfaceCard>
      </div>

      <section className="space-y-4">
        <SectionLabel>Stitched Surfaces</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {routePreviews.map((route) => (
            <Link key={route.href} href={route.href} className="group">
              <SurfaceCard className="panel-hover h-full overflow-hidden p-4">
                <div className="overflow-hidden rounded-[1.5rem] bg-surface-container-low">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="h-60 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 space-y-3">
                  <StatusPill tone="secondary">{route.label}</StatusPill>
                  <h3 className="text-2xl font-semibold text-primary">
                    {route.title}
                  </h3>
                  <p className="text-sm leading-6 text-on-surface-variant">
                    {route.summary}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open surface
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </SurfaceCard>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionLabel>Master Plan Mapped Into Build Tracks</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {architecturePillars.map((pillar) => (
            <SurfaceCard key={pillar.title} className="h-full">
              <StatusPill tone="primary">{pillar.kicker}</StatusPill>
              <h3 className="mt-4 text-2xl font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                {pillar.summary}
              </p>
              <div className="mt-5 space-y-3">
                {pillar.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.25rem] bg-surface-container-low px-4 py-3 text-sm leading-6 text-on-surface-variant"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard>
          <SectionLabel>Supabase Blueprint</SectionLabel>
          <div className="space-y-4">
            {supabaseBlueprint.map((entry) => (
              <div
                key={entry.table}
                className="rounded-[1.5rem] bg-surface-container-low px-5 py-4"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {entry.table}
                </div>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  {entry.purpose}
                </p>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionLabel>Immediate Next Work</SectionLabel>
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <HardDriveDownload className="size-4" />
                Historical import pipeline
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Build Gmail and Drive ingestion workers, then map OCR and EXIF
                enrichment into the unified timeline model.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 text-sm font-semibold text-primary">
                Communication routing
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Wire message ingestion to contact identity resolution, schedule
                extraction, and incomplete-detail flagging.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <div className="mb-2 text-sm font-semibold text-primary">
                Estimate outputs
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">
                Convert estimate snapshots into templated PDFs and operator-ready
                field packets.
              </p>
            </div>
          </div>
        </SurfaceCard>
      </section>
    </AppShell>
  );
}
