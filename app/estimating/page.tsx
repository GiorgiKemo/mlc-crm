import { Calculator, CheckSquare2, FileStack, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActionLink,
  ProgressTrack,
  SectionLabel,
  SurfaceCard,
} from "@/components/primitives";
import { estimateData } from "@/lib/crm-data";

export default function EstimatingPage() {
  return (
    <AppShell
      currentPath="/estimating"
      eyebrow="Estimation Engine"
      title={estimateData.project}
      subtitle={estimateData.summary}
      action={<ActionLink href="/timeline">Generate all docs</ActionLink>}
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <SurfaceCard>
            <SectionLabel>Total Project Estimate</SectionLabel>
            <div className="text-5xl font-semibold tracking-tight text-primary">
              {estimateData.total}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-surface-container-low px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Profit Margin
                </div>
                <div className="mt-2 text-2xl font-semibold text-on-surface">
                  {estimateData.margin}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container-low px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Optimization Range
                </div>
                <div className="mt-2 text-2xl font-semibold text-on-surface">
                  {estimateData.range}
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <ProgressTrack
                value={34.2}
                label="Gross profit"
                helper={estimateData.grossProfit}
              />
              <ProgressTrack
                value={65.8}
                label="Direct costs"
                helper={estimateData.directCosts}
              />
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <SectionLabel>Material Breakdown</SectionLabel>
            <div className="space-y-4">
              {estimateData.materials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] bg-surface-container-low px-5 py-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-on-surface">
                        {item.name}
                      </div>
                      <div className="mt-1 text-sm text-on-surface-variant">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="text-right text-base font-semibold text-primary">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div className="space-y-6">
          <SurfaceCard>
            <div className="flex items-center gap-2">
              <Calculator className="size-4 text-primary" />
              <h2 className="text-3xl font-semibold text-on-surface">
                Labor Hour Estimation
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-surface-container-low px-4 py-5 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Crew size
                </div>
                <div className="mt-2 text-4xl font-semibold text-on-surface">
                  {estimateData.labor.crewSize}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container-low px-4 py-5 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Project days
                </div>
                <div className="mt-2 text-4xl font-semibold text-on-surface">
                  {estimateData.labor.days}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container-low px-4 py-5 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Crew cost
                </div>
                <div className="mt-2 text-4xl font-semibold text-primary">
                  {estimateData.labor.total}
                </div>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <SectionLabel>Generated Outputs</SectionLabel>
            <div className="space-y-3">
              {estimateData.documents.map((document) => (
                <div
                  key={document}
                  className="flex items-center gap-3 rounded-[1.25rem] bg-surface-container-low px-4 py-3 text-sm font-medium text-on-surface"
                >
                  <CheckSquare2 className="size-4 text-primary" />
                  {document}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <ActionLink href="/" variant="ghost" icon={FileStack}>
                Save as draft
              </ActionLink>
              <ActionLink href="/" variant="secondary">
                Share proposal
              </ActionLink>
            </div>
          </SurfaceCard>

          <SurfaceCard className="overflow-hidden p-0">
            <div className="relative h-72 bg-[linear-gradient(150deg,#6b7f63,#d6dccf)]">
              <img
                src="/stitch/estimation-engine.png"
                alt="Estimation engine reference"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-30"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.38))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-surface-container-lowest/88 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Sparkles className="size-4" />
                  Project visualization
                </div>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  The same estimate snapshot will drive proposal rendering,
                  document generation, and crew packet assembly from one record.
                </p>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard className="bg-[linear-gradient(135deg,rgba(188,240,174,0.55),rgba(255,255,255,0.96))]">
            <SectionLabel>Calculation Notes</SectionLabel>
            <div className="space-y-3">
              {estimateData.notes.map((note) => (
                <div key={note} className="text-sm leading-6 text-on-surface-variant">
                  {note}
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </AppShell>
  );
}
