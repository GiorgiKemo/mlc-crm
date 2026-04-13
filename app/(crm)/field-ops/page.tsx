import { Camera, HardHat, MapPin, Mic, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Morning Prompt",
    description:
      "Crew sees destination, Work Order, and Order of Operations on app open.",
    status: "Planned",
  },
  {
    icon: Mic,
    title: "Voice-to-Task",
    description:
      "Push-to-Talk button transcribes crew audio into Maintenance Alerts or Project Notes.",
    status: "Planned",
  },
  {
    icon: Camera,
    title: "Smart Camera",
    description:
      "EXIF metadata sorting, interval snapshots, and photo-triggered clock-in.",
    status: "Planned",
  },
  {
    icon: Shield,
    title: "Privacy Shield",
    description:
      "Private Mode toggle kills all tracking and logs time as Personal.",
    status: "Planned",
  },
];

export default function FieldOpsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Field Operations
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Crew management and field tools
        </p>
      </div>

      <div className="animate-fade-in-up rounded-lg border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <HardHat className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">
          Field Operations Hub
        </h3>
        <p className="mx-auto max-w-md text-muted-foreground">
          This module will power your crew&apos;s daily workflow - from morning
          briefings to photo documentation and voice notes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="animate-fade-in-up rounded-lg border bg-card p-5 transition-all hover:shadow-md"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-foreground">{feature.title}</p>
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent">
                    {feature.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
