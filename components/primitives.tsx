import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Tone = "primary" | "secondary" | "neutral" | "danger";
type SurfaceTone = "default" | "dark" | "warm";

const toneClasses: Record<Tone, string> = {
  primary:
    "border border-[rgba(24,60,52,0.1)] bg-[rgba(24,60,52,0.08)] text-on-primary-container",
  secondary:
    "border border-[rgba(180,133,61,0.18)] bg-[rgba(240,211,157,0.35)] text-on-secondary-fixed-variant",
  neutral:
    "border border-black/5 bg-white/50 text-on-surface-variant backdrop-blur-sm",
  danger: "border border-red-200/70 bg-error-container/70 text-error",
};

const surfaceToneClasses: Record<SurfaceTone, string> = {
  default: "surface-panel border border-white/55 text-on-surface",
  dark:
    "border border-white/10 bg-[linear-gradient(145deg,rgba(15,25,21,0.98),rgba(29,49,42,0.96)_52%,rgba(49,78,67,0.96))] text-white shadow-[0_40px_100px_rgba(7,12,10,0.42)]",
  warm:
    "border border-[rgba(180,133,61,0.12)] bg-[linear-gradient(180deg,rgba(255,249,241,0.95),rgba(245,232,211,0.9))] text-on-surface shadow-[0_28px_72px_rgba(74,54,24,0.12)]",
};

export function SurfaceCard({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: SurfaceTone;
}) {
  return (
    <div
      className={`rounded-[2.25rem] p-7 sm:p-8 ${surfaceToneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

export function StatusPill({
  children,
  tone = "neutral",
  icon: Icon,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] ${toneClasses[tone]} ${className}`}
    >
      {Icon ? <Icon className="size-3.5" /> : null}
      {children}
    </span>
  );
}

export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant/75 ${className}`}
    >
      <span>{children}</span>
      <span className="h-px w-16 bg-current/20" />
    </div>
  );
}

export function ActionLink({
  href,
  children,
  icon: Icon = ArrowRight,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary:
      "bg-[linear-gradient(135deg,#183c34,#2b5a4c)] text-on-primary shadow-[0_22px_48px_rgba(15,36,31,0.22)]",
    secondary:
      "border border-[rgba(180,133,61,0.22)] bg-[linear-gradient(135deg,#f0d39d,#ddb36a)] text-on-secondary-fixed-variant shadow-[0_20px_40px_rgba(121,89,0,0.12)]",
    ghost:
      "border border-[rgba(24,60,52,0.08)] bg-white/55 text-primary backdrop-blur-sm",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon className="size-4" />
    </Link>
  );
}

export function ProgressTrack({
  value,
  label,
  helper,
  tone = "default",
}: {
  value: number;
  label?: string;
  helper?: string;
  tone?: "default" | "inverted";
}) {
  return (
    <div className="space-y-3">
      {(label || helper) && (
        <div className="flex items-center justify-between gap-3 text-sm">
          <span
            className={`font-semibold tracking-[0.01em] ${
              tone === "inverted" ? "text-white" : "text-on-surface"
            }`}
          >
            {label}
          </span>
          <span
            className={tone === "inverted" ? "text-white/65" : "text-on-surface-variant"}
          >
            {helper}
          </span>
        </div>
      )}
      <div
        className={`h-2.5 overflow-hidden rounded-full ring-1 ${
          tone === "inverted"
            ? "bg-white/10 ring-white/10"
            : "bg-black/5 ring-black/5"
        }`}
      >
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#b4853d,#183c34)] transition-[width] duration-700"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}
