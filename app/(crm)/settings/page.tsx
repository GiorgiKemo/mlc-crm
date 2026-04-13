import { Bell, Database, Palette, User } from "lucide-react";

const sections = [
  {
    icon: User,
    title: "Profile",
    description: "Company info, logo, and contact details",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Email and push notification preferences",
  },
  {
    icon: Database,
    title: "Data & Integrations",
    description: "Gmail sync, Google Drive, calendar connections",
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Theme, branding, and display options",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Settings</h2>
        <p className="mt-1 text-sm text-muted-foreground">Configure your CRM</p>
      </div>

      <div className="grid gap-4">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="animate-fade-in-up cursor-pointer rounded-lg border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{section.title}</p>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
