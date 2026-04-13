import { Camera, MapPinned, Mic, Sparkles, Waypoints } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActionLink,
  ProgressTrack,
  SectionLabel,
  StatusPill,
  SurfaceCard,
} from "@/components/primitives";
import { siteVisitData } from "@/lib/crm-data";

export default function SiteVisitPage() {
  return (
    <AppShell
      currentPath="/site-visit"
      mode="crew"
      eyebrow="Site Visit Hub"
      title={siteVisitData.title}
      subtitle={siteVisitData.subtitle}
      action={<ActionLink href="/estimating">Sync parameters</ActionLink>}
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <SurfaceCard tone="dark" className="reveal-up overflow-hidden p-0">
            <div className="relative h-[26rem] bg-[radial-gradient(circle_at_30%_20%,rgba(161,212,148,0.9),transparent_18%),radial-gradient(circle_at_70%_35%,rgba(45,90,39,0.75),transparent_25%),linear-gradient(160deg,#6f9258,#d8e4c8)]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:26px_26px] opacity-50" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] bg-white/10 p-5 shadow-[0_18px_40px_rgba(25,28,30,0.12)] backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                  Current location
                </div>
                <div className="mt-3 flex items-center gap-2 text-xl font-semibold text-white">
                  <MapPinned className="size-4 text-secondary-fixed" />
                  {siteVisitData.location}
                </div>
              </div>
            </div>
          </SurfaceCard>

          <div className="grid gap-6 sm:grid-cols-2">
            {siteVisitData.actions.map((action) => (
              <SurfaceCard
                key={action.title}
                className="panel-hover reveal-up reveal-delay-1 h-full bg-surface-container-low"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-container-lowest text-primary">
                  {action.title.includes("Voice") ? (
                    <Mic className="size-5" />
                  ) : (
                    <Camera className="size-5" />
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-on-surface">
                  {action.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  {action.detail}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SurfaceCard tone="warm" className="reveal-up reveal-delay-1">
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Master Parameters</SectionLabel>
                <h2 className="text-3xl font-semibold text-on-surface">
                  Field-derived estimate inputs
                </h2>
              </div>
              <StatusPill tone="secondary" icon={Waypoints}>
                Site-sync ready
              </StatusPill>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {siteVisitData.parameters.map((parameter) => (
                <div
                  key={parameter.label}
                  className="rounded-[1.5rem] bg-surface-container-low px-4 py-4"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    {parameter.label}
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-6 text-on-surface">
                    {parameter.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <ProgressTrack
                value={siteVisitData.completion}
                label="Input completion"
                helper={`${siteVisitData.completion}%`}
              />
            </div>
          </SurfaceCard>

          <SurfaceCard className="reveal-up reveal-delay-2">
            <SectionLabel>AI Extraction Status</SectionLabel>
            <div className="space-y-3">
              {siteVisitData.aiSummary.map((summary) => (
                <div
                  key={summary}
                  className="rounded-[1.25rem] bg-surface-container-low px-4 py-3 text-sm leading-6 text-on-surface-variant"
                >
                  {summary}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <ActionLink href="/timeline" variant="ghost">
                Review routed timeline
              </ActionLink>
              <ActionLink href="/estimating" variant="secondary">
                Push into estimate
              </ActionLink>
            </div>
          </SurfaceCard>

          <SurfaceCard
            tone="warm"
            className="reveal-up reveal-delay-3 bg-[linear-gradient(135deg,rgba(188,240,174,0.4),rgba(255,255,255,0.96))]"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-container-lowest text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-on-surface">
                  Binder and archive digitization will land here
                </h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  This same intake surface will also receive OCR-processed binder
                  scans and handwritten crew logs so historical data reuses the
                  exact same master-parameter model as fresh field visits.
                </p>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </AppShell>
  );
}
