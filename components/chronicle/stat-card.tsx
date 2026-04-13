import type { LucideIcon } from "lucide-react";

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accentColor,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  accentColor?: string;
}) {
  return (
    <div className="animate-fade-in-up rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
          {subtitle ? <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p> : null}
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            accentColor ?? "bg-primary/10"
          }`}
        >
          <Icon className={`h-5 w-5 ${accentColor ? "text-primary-foreground" : "text-primary"}`} />
        </div>
      </div>
    </div>
  );
}
