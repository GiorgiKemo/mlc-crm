import { AlertTriangle, Mail, Paperclip, ScanSearch } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActionLink,
  SectionLabel,
  StatusPill,
  SurfaceCard,
} from "@/components/primitives";
import { timelineEntries } from "@/lib/crm-data";

export default function TimelinePage() {
  return (
    <AppShell
      currentPath="/timeline"
      eyebrow="Clients / John Peterson"
      title="Archival History"
      subtitle="A single chronological record for old consultations, new communication, digitized notes, and media routed into the Peterson Estate project."
      action={<ActionLink href="/site-visit">Scan archive</ActionLink>}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <SurfaceCard className="reveal-up relative timeline-rail overflow-hidden">
          <div className="space-y-10">
            {timelineEntries.map((entry) => (
              <div key={`${entry.year}-${entry.title}`} className="relative pl-12">
                <div
                  className={`absolute left-0 top-2 size-7 rounded-full border-4 ${
                    entry.tone === "primary"
                      ? "border-primary"
                      : entry.tone === "secondary"
                        ? "border-secondary-fixed-dim"
                        : entry.tone === "danger"
                          ? "border-error"
                          : "border-outline-variant"
                  } bg-surface-container-lowest`}
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-on-surface-variant/70">
                      {entry.year}
                    </span>
                    <StatusPill
                      tone={
                        entry.tone === "danger"
                          ? "danger"
                          : entry.tone === "secondary"
                            ? "secondary"
                            : entry.tone === "primary"
                              ? "primary"
                              : "neutral"
                      }
                    >
                      {entry.type}
                    </StatusPill>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant/60">
                    {entry.date}
                  </span>
                </div>

                <div className="mt-4 rounded-[1.75rem] bg-surface-container-low px-5 py-6 sm:px-6 sm:py-7">
                  <h3 className="text-2xl font-semibold text-primary">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                    {entry.description}
                  </p>

                  {"image" in entry && entry.image ? (
                    <div className="mt-5 overflow-hidden rounded-[1.5rem]">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="h-56 w-full object-cover"
                      />
                    </div>
                  ) : null}

                  {"attachment" in entry && entry.attachment ? (
                    <div className="mt-5 flex items-start gap-3 rounded-[1.5rem] bg-surface-container-lowest px-4 py-4">
                      <div className="mt-1 flex size-10 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed-variant">
                        <Paperclip className="size-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-on-surface">
                          {entry.attachment.label}
                        </div>
                        <div className="mt-1 text-xs leading-5 text-on-surface-variant">
                          {entry.attachment.meta}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {"verified" in entry && entry.verified ? (
                    <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant/55">
                      Transcription verified
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard tone="warm" className="reveal-up reveal-delay-1">
            <SectionLabel>Communication Intelligence</SectionLabel>
            <div className="rounded-[1.5rem] bg-error-container/70 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 size-5 text-error" />
                <div>
                  <div className="text-base font-semibold text-on-surface">
                    Meeting detected, time missing
                  </div>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    An inbound message agreed to a walkthrough but did not
                    include a specific hour. The assistant routed the thread
                    into this timeline and flagged it before client reminders
                    send.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <StatusPill tone="primary" icon={Mail}>
                Gmail ingestion planned
              </StatusPill>
              <StatusPill tone="secondary" icon={ScanSearch}>
                OCR archive capture planned
              </StatusPill>
            </div>
          </SurfaceCard>

          <SurfaceCard className="reveal-up reveal-delay-2">
            <SectionLabel>Source Feeds</SectionLabel>
            <div className="space-y-3">
              {[
                "Gmail threads and attachments back to 2010",
                "Google Drive documents and scans",
                "Handwritten binders and field notebooks",
                "New calls, texts, photos, and recordings",
              ].map((source) => (
                <div
                  key={source}
                  className="rounded-[1.25rem] bg-surface-container-low px-4 py-3 text-sm leading-6 text-on-surface-variant"
                >
                  {source}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard
            tone="warm"
            className="reveal-up reveal-delay-3 bg-[linear-gradient(135deg,rgba(255,223,159,0.52),rgba(255,255,255,0.96))]"
          >
            <SectionLabel>Routing Rule</SectionLabel>
            <p className="text-sm leading-7 text-on-surface-variant">
              Contact identity, property address, and project affinity should
              all influence routing so incoming messages land in the right
              folder instantly and historical artifacts can be stitched back to
              the same project thread.
            </p>
          </SurfaceCard>
        </div>
      </div>
    </AppShell>
  );
}
