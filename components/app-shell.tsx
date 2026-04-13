import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  Bot,
  ClipboardList,
  Compass,
  House,
  Leaf,
  MapPinned,
  Shield,
  WalletCards,
} from "lucide-react";
import { StatusPill } from "@/components/primitives";

type AppMode = "office" | "crew";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const officeNav: NavItem[] = [
  { href: "/", label: "Overview", icon: House },
  { href: "/crew", label: "Crew", icon: Compass },
  { href: "/site-visit", label: "Site Visit", icon: MapPinned },
  { href: "/timeline", label: "Timeline", icon: BookMarked },
  { href: "/estimating", label: "Estimate", icon: WalletCards },
];

const crewNav: NavItem[] = [
  { href: "/crew", label: "Today", icon: Compass },
  { href: "/site-visit", label: "Field Hub", icon: MapPinned },
  { href: "/timeline", label: "Notes", icon: BookMarked },
];

export function AppShell({
  children,
  currentPath,
  mode = "office",
  eyebrow,
  title,
  subtitle,
  action,
}: {
  children: ReactNode;
  currentPath: string;
  mode?: AppMode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  const nav = mode === "crew" ? crewNav : officeNav;

  return (
    <div className="min-h-screen pb-24">
      <header className="glass-panel sticky top-0 z-50 border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Leaf className="size-5" />
            </div>
            <div>
              <div className="font-headline text-lg font-semibold text-primary">
                Arbor &amp; Earth
              </div>
              <div className="text-xs text-on-surface-variant">
                MLC Group CRM development workspace
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full bg-surface-container-low px-2 py-2 md:flex">
            {nav.map(({ href, label, icon: Icon }) => {
              const active = href === currentPath;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-surface-container-lowest text-primary shadow-[0_10px_30px_rgba(21,66,18,0.08)]"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {mode === "crew" ? (
              <StatusPill tone="secondary" icon={Shield}>
                Crew access scoped to current assignment
              </StatusPill>
            ) : (
              <StatusPill tone="primary" icon={Bot}>
                Dev hosted on your GitHub, Vercel, and Supabase
              </StatusPill>
            )}
            <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
              GK
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle || action) && (
          <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {eyebrow ? (
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant/70">
                  {eyebrow}
                </div>
              ) : null}
              {title ? (
                <h1 className="font-headline text-4xl font-semibold tracking-tight text-on-background sm:text-5xl">
                  {title}
                </h1>
              ) : null}
              {subtitle ? (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-on-surface-variant sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </section>
        )}

        {children}
      </main>

      <nav className="glass-panel fixed inset-x-0 bottom-0 z-50 border-t border-black/5 px-3 pb-5 pt-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around rounded-[1.75rem] bg-surface-container-low px-2 py-2">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = href === currentPath;

            return (
              <Link
                key={href}
                href={href}
                className={`flex min-w-[88px] flex-col items-center gap-1 rounded-2xl px-4 py-2 text-[11px] font-medium transition ${
                  active
                    ? "bg-surface-container-lowest text-primary shadow-[0_10px_30px_rgba(21,66,18,0.08)]"
                    : "text-on-surface-variant"
                }`}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}

          {mode === "crew" ? (
            <div className="flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-[11px] font-medium text-on-surface-variant">
              <ClipboardList className="size-4" />
              Private
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
