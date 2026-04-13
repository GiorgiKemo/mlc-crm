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
  Sparkles,
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

const revealDelays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function HomePage() {
  return (
    <AppShell
      currentPath="/"
      eyebrow="Arbor and Earth System"
      title="A sharper MLC CRM direction with room to grow into the real backend."
      subtitle="The current build was technically sound but visually too flat, too pale, and too compressed. This pass shifts the product toward a more premium field-operations interface with stronger contrast, better pacing, and motion that feels deliberate."
      action={
        <div className="flex flex-wrap gap-3">
          <ActionLink href="/crew">Open crew morning prompt</ActionLink>
          <ActionLink href="/timeline" variant="ghost">
            Review client timeline
          </ActionLink>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SurfaceCard
          tone="dark"
          className="reveal-up editorial-grid shimmer-border overflow-hidden"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <SectionLabel className="text-white/[0.72]">Visual Reset</SectionLabel>
              <div className="space-y-5">
                <h2 className="max-w-xl text-5xl font-semibold text-white sm:text-[4.2rem]">
                  Landscape operations should feel high-end, not like a beige admin tool.
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/[0.72]">
                  The interface now leans into an architectural, editorial tone:
                  darker anchors, warmer neutrals, longer line lengths, more air
                  between blocks, and a clearer separation between executive
                  planning and field execution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <StatusPill
                  tone="secondary"
                  icon={LayoutTemplate}
                  className="border-white/10 bg-white/10 text-white"
                >
                  Stitch surfaces translated into product UI
                </StatusPill>
                <StatusPill
                  tone="primary"
                  icon={FolderArchive}
                  className="border-white/10 bg-white/10 text-white"
                >
                  Historical import and routing still fit the model
                </StatusPill>
                <StatusPill
                  tone="neutral"
                  icon={Bot}
                  className="border-white/10 bg-white/10 text-white"
                >
                  Motion and spacing upgraded
                </StatusPill>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  label: "Crew-safe entry",
                  value: "01",
                  detail: "Open directly into assignment, order of operations, and private mode.",
                },
                {
                  label: "Connected workflows",
                  value: "04",
                  detail: "Morning prompt, site intake, timeline, and estimating now share one visual language.",
                },
                {
                  label: "Backend target",
                  value: "SB",
                  detail: "Supabase remains the typed source of truth for auth, storage, routing, and generated docs.",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${index === 1 ? "float-card" : ""}`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    {item.label}
                  </div>
                  <div className="mt-3 font-headline text-5xl font-semibold text-white">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>

        <div className="grid gap-6">
          <SurfaceCard tone="warm" className="reveal-up reveal-delay-1">
            <SectionLabel>Current Dev Target</SectionLabel>
            <div className="space-y-4">
              <div className="rounded-[1.75rem] bg-white/60 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                  <GitBranch className="size-4" />
                  Development ownership
                </div>
                <p className="text-sm leading-7 text-on-surface-variant">
                  Code and deployment stay in your GitHub, Vercel, and Supabase
                  accounts while we iterate. Transfer later should be a clean
                  ownership change, not another rebuild.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/60 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                  <DatabaseZap className="size-4" />
                  Supabase first
                </div>
                <p className="text-sm leading-7 text-on-surface-variant">
                  Auth, timeline events, site assets, estimates, and generated
                  documents are still designed around one typed backend instead
                  of disconnected tools.
                </p>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard className="reveal-up reveal-delay-2">
            <SectionLabel>Immediate Work</SectionLabel>
            <div className="space-y-4">
              {[
                {
                  icon: HardDriveDownload,
                  title: "Historical import pipeline",
                  detail:
                    "Scan Gmail, Drive, OCR notes, and EXIF metadata into the same timeline model.",
                },
                {
                  icon: Sparkles,
                  title: "Communication routing",
                  detail:
                    "Extract meetings, detect missing details, and route everything into the correct project folder.",
                },
                {
                  icon: ShieldCheck,
                  title: "Estimate output layer",
                  detail:
                    "Generate client estimates, crew work orders, purchase orders, and field packets from one source record.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] bg-surface-container-low px-5 py-4"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <item.icon className="size-4" />
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>

      <section className="space-y-4">
        <SectionLabel>Primary Workflows</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {routePreviews.map((route, index) => (
            <Link key={route.href} href={route.href} className="group">
              <SurfaceCard
                className={`panel-hover reveal-up h-full overflow-hidden p-0 ${revealDelays[index]}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,21,0.08),rgba(17,24,21,0.16)_32%,rgba(17,24,21,0.85)_100%)]" />
                  <div className="absolute left-5 top-5">
                    <StatusPill tone="secondary">{route.label}</StatusPill>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 space-y-3">
                    <h3 className="text-3xl font-semibold text-white">
                      {route.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/[0.78]">
                      {route.summary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 pb-6 pt-5 text-sm font-semibold text-primary">
                  <span>Open workflow</span>
                  <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
                </div>
              </SurfaceCard>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <SurfaceCard className="reveal-up">
          <SectionLabel>Development Strategy</SectionLabel>
          <div className="grid gap-4">
            {developmentTracks.map((track, index) => (
              <div
                key={track}
                className={`rounded-[1.65rem] px-5 py-4 text-sm leading-7 text-on-surface-variant ${
                  index === 0 ? "bg-primary text-white" : "bg-surface-container-low"
                }`}
              >
                {track}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="reveal-up reveal-delay-1">
          <SectionLabel>Supabase Blueprint</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2">
            {supabaseBlueprint.map((entry) => (
              <div
                key={entry.table}
                className="rounded-[1.5rem] bg-surface-container-low px-5 py-4"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {entry.table}
                </div>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  {entry.purpose}
                </p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="space-y-4">
        <SectionLabel>Program Pillars</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {architecturePillars.map((pillar, index) => (
            <SurfaceCard
              key={pillar.title}
              tone={index === 0 ? "warm" : "default"}
              className={`reveal-up h-full ${revealDelays[index % revealDelays.length]}`}
            >
              <StatusPill tone={index % 2 === 0 ? "primary" : "secondary"}>
                {pillar.kicker}
              </StatusPill>
              <h3 className="mt-5 text-3xl font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                {pillar.summary}
              </p>
              <div className="mt-6 space-y-3">
                {pillar.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.35rem] bg-surface-container-low px-4 py-3 text-sm leading-7 text-on-surface-variant"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
