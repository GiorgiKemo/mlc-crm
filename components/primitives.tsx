import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Tone = "primary" | "secondary" | "neutral" | "danger";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary-fixed text-on-primary-container",
  secondary: "bg-secondary-fixed text-on-secondary-fixed-variant",
  neutral: "bg-surface-container-high text-on-surface-variant",
  danger: "bg-error-container text-error",
};

export function SurfaceCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`surface-panel rounded-[2rem] border border-black/5 p-6 sm:p-7 ${className}`}
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
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${toneClasses[tone]} ${className}`}
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
      className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant/70 ${className}`}
    >
      {children}
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
      "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-[0_18px_40px_rgba(21,66,18,0.18)]",
    secondary:
      "bg-secondary-fixed text-on-secondary-fixed-variant shadow-[0_18px_40px_rgba(121,89,0,0.08)]",
    ghost: "bg-surface-container-high text-primary",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
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
}: {
  value: number;
  label?: string;
  helper?: string;
}) {
  return (
    <div className="space-y-3">
      {(label || helper) && (
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-on-surface">{label}</span>
          <span className="text-on-surface-variant">{helper}</span>
        </div>
      )}
      <div className="h-3 overflow-hidden rounded-full bg-secondary-fixed">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-700"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}
