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
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="glass-panel mx-auto max-w-[90rem] rounded-[2rem] border border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(240,211,157,0.28),rgba(255,255,255,0.08))] text-secondary-fixed">
                <Leaf className="size-5" />
              </div>
              <div>
                <div className="font-headline text-[1.45rem] font-semibold tracking-[-0.03em] text-white">
                  Arbor &amp; Earth
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/55">
                  MLC Group CRM
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5 md:flex">
              {nav.map(({ href, label, icon: Icon }) => {
                const active = href === currentPath;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                      active
                        ? "bg-surface-container-lowest text-primary shadow-[0_18px_40px_rgba(8,14,12,0.18)]"
                        : "text-white/70 hover:text-white"
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
                <StatusPill
                  tone="secondary"
                  icon={Shield}
                  className="border-white/10 bg-white/5 text-white"
                >
                  Crew access scoped to current assignment
                </StatusPill>
              ) : (
                <StatusPill
                  tone="primary"
                  icon={Bot}
                  className="border-white/10 bg-white/5 text-white"
                >
                  Dev hosted on your GitHub, Vercel, and Supabase
                </StatusPill>
              )}
              <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white">
                GK
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-28 pt-10 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle || action) && (
          <section className="reveal-up grid gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
            <div className="max-w-4xl">
              {eyebrow ? (
                <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant/75">
                  <span>{eyebrow}</span>
                  <span className="h-px w-20 bg-current/20" />
                </div>
              ) : null}
              {title ? (
                <h1 className="max-w-4xl font-headline text-5xl font-semibold text-on-background sm:text-6xl xl:text-[4.75rem]">
                  {title}
                </h1>
              ) : null}
              {subtitle ? (
                <p className="mt-5 max-w-3xl text-base leading-8 text-on-surface-variant sm:text-lg">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {action ? <div className="xl:justify-self-end">{action}</div> : null}
          </section>
        )}

        {children}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-5 pt-3 md:hidden">
        <div className="glass-panel mx-auto max-w-md rounded-[2rem] border border-white/10 px-3 py-3">
          <div className="flex items-center justify-around rounded-[1.65rem] border border-white/10 bg-white/5 px-2 py-2">
            {nav.map(({ href, label, icon: Icon }) => {
              const active = href === currentPath;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex min-w-[88px] flex-col items-center gap-1 rounded-2xl px-4 py-2.5 text-[11px] font-medium transition ${
                    active
                      ? "bg-surface-container-lowest text-primary shadow-[0_14px_30px_rgba(8,14,12,0.18)]"
                      : "text-white/70"
                  }`}
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              );
            })}

            {mode === "crew" ? (
              <div className="flex flex-col items-center gap-1 rounded-2xl px-4 py-2.5 text-[11px] font-medium text-white/60">
                <ClipboardList className="size-4" />
                Private
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
