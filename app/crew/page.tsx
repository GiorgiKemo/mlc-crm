import { Compass, LocateFixed, Lock, Map, Shield, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActionLink,
  ProgressTrack,
  SectionLabel,
  StatusPill,
  SurfaceCard,
} from "@/components/primitives";
import { morningPrompt } from "@/lib/crm-data";

export default function CrewPage() {
  return (
    <AppShell
      currentPath="/crew"
      mode="crew"
      eyebrow="Morning Prompt"
      title={`Good morning, ${morningPrompt.user}.`}
      subtitle={`Your landscape itinerary for ${morningPrompt.dateLabel}. The crew view is intentionally narrowed to the current assignment and field-safe tools only.`}
      action={
        <div className="flex flex-wrap gap-3">
          <StatusPill tone="secondary" icon={Lock}>
            Restricted crew tabs only
          </StatusPill>
          <StatusPill tone="neutral" icon={Shield}>
            Private mode available
          </StatusPill>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <SurfaceCard>
            <SectionLabel>Daily Progress</SectionLabel>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <div className="text-3xl font-semibold text-on-surface">
                  {morningPrompt.taskLabel}
                </div>
                <p className="mt-2 text-sm text-on-surface-variant">
                  {morningPrompt.note}
                </p>
              </div>
              <div className="text-right text-3xl font-semibold text-primary">
                {morningPrompt.progress}%
              </div>
            </div>
            <ProgressTrack value={morningPrompt.progress} />
          </SurfaceCard>

          <SurfaceCard className="overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(254,206,101,0.28),transparent_30%),linear-gradient(135deg,rgba(21,66,18,0.04),rgba(45,90,39,0.12))]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-xl">
                <StatusPill tone="secondary" icon={LocateFixed}>
                  Next stop
                </StatusPill>
                <h2 className="mt-5 text-4xl font-semibold text-primary">
                  {morningPrompt.nextStop.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  {morningPrompt.nextStop.address}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-on-surface">
                  <span className="rounded-full bg-surface-container-lowest px-4 py-2">
                    ETA {morningPrompt.nextStop.eta}
                  </span>
                  <span className="rounded-full bg-surface-container-lowest px-4 py-2">
                    {morningPrompt.nextStop.distance}
                  </span>
                </div>
                <div className="mt-6 rounded-[1.5rem] bg-surface-container-lowest/80 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    Work order
                  </div>
                  <div className="mt-2 text-base font-semibold text-on-surface">
                    {morningPrompt.nextStop.order}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 rounded-[1.75rem] bg-surface-container-lowest/70 p-4">
                <ActionLink href="/site-visit" className="w-full justify-center">
                  Start field capture
                </ActionLink>
                <ActionLink
                  href="/timeline"
                  variant="ghost"
                  className="w-full justify-center"
                >
                  Open project notes
                </ActionLink>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard className="overflow-hidden p-0">
            <div className="relative h-72 bg-[radial-gradient(circle_at_25%_20%,rgba(161,212,148,0.65),transparent_18%),radial-gradient(circle_at_70%_45%,rgba(45,90,39,0.45),transparent_22%),linear-gradient(140deg,#dce5d7,#edf0ec)]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-[1.5rem] bg-surface-container-lowest/90 p-4 shadow-[0_20px_40px_rgba(25,28,30,0.08)] backdrop-blur">
                <div>
                  <div className="text-sm font-semibold text-primary">
                    Terrain snapshot
                  </div>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    Open the full map, route, and access-point overlay for the
                    current job.
                  </p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-on-primary">
                  <Map className="size-5" />
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>

        <div className="space-y-6">
          <SurfaceCard>
            <div className="mb-5 flex items-center gap-2">
              <Compass className="size-4 text-primary" />
              <h2 className="text-2xl font-semibold text-on-surface">
                Order of Operations
              </h2>
            </div>
            <div className="space-y-3">
              {morningPrompt.checklist.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[1.5rem] px-4 py-4 ${
                    item.active
                      ? "bg-surface-container-lowest border-l-4 border-secondary shadow-[0_18px_35px_rgba(121,89,0,0.08)]"
                      : item.done
                        ? "bg-primary/8"
                        : "bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex size-6 items-center justify-center rounded-full border ${
                        item.done
                          ? "border-primary bg-primary text-on-primary"
                          : item.active
                            ? "border-secondary bg-secondary/10"
                            : "border-outline-variant"
                      }`}
                    >
                      {item.done ? <Sparkles className="size-3.5" /> : null}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${
                          item.done ? "text-on-surface/45 line-through" : "text-on-surface"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-on-surface-variant">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-secondary-fixed/40 px-4 py-4 text-sm leading-6 text-on-secondary-fixed-variant">
              {morningPrompt.caution}
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <SectionLabel>Visible To Crew</SectionLabel>
            <div className="space-y-3">
              {morningPrompt.accessScope.map((scope) => (
                <div
                  key={scope}
                  className="rounded-[1.25rem] bg-surface-container-low px-4 py-3 text-sm font-medium text-on-surface"
                >
                  {scope}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="bg-[linear-gradient(135deg,rgba(255,218,214,0.85),rgba(255,255,255,0.96))]">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-container-lowest text-primary">
                <Shield className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-on-surface">
                  Privacy Shield
                </h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  {morningPrompt.privacyNote}
                </p>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </AppShell>
  );
}
