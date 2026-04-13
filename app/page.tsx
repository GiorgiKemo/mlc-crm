import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Camera,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  FileText,
  Leaf,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Estimate to Invoice",
    description: "From site visit to final payment through one connected workflow.",
  },
  {
    icon: Users,
    title: "Crew Scheduling",
    description: "Morning prompts, work orders, and crew-specific views from the moment the day starts.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "EXIF-sorted photos, interval snapshots, and visual job logs.",
  },
  {
    icon: DollarSign,
    title: "Job Costing",
    description: "Pre-loaded formulas for materials, labor, and profitability.",
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "Calendar sync, contact linking, and scheduling intelligence.",
  },
  {
    icon: ClipboardList,
    title: "Client Tracking",
    description: "A full chronological timeline of communications, files, and site history.",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Years in Business" },
  { value: "5-Star", label: "Client Rated" },
];

const capabilityTags = [
  "Site Visit Capture",
  "Auto-Scheduling",
  "Voice-to-Task",
  "EXIF Photo Sorting",
  "Crew Privacy Mode",
  "Document Generation",
];

const fadeClass = "animate-fade-in-up motion-safe:[animation-duration:0.6s]";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/chronicle/mlc-logo.jpg"
              alt="MLC Group"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              MLC Group
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">
              Testimonials
            </a>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open CRM
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <section className="relative px-6 pb-20 pt-32 md:pb-32 md:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className={`mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ${fadeClass}`}>
            <Leaf className="h-4 w-4" />
            #1 CRM Built by Landscapers, for Landscapers
          </div>

          <h1 className={`${fadeClass} text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl`}>
            My Landscape
            <br />
            <span className="text-primary">Contractor</span>
          </h1>

          <p
            className={`${fadeClass} mt-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-base`}
            style={{ animationDelay: "80ms" }}
          >
            Brick Patios - Patio Restoration - Yard Drainage
          </p>

          <p
            className={`${fadeClass} mx-auto mb-10 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl`}
            style={{ animationDelay: "160ms" }}
          >
            We do not just cut grass. We build landscapes.
            <br className="hidden md:block" />
            This CRM was built the same way.
          </p>

          <div
            className={`${fadeClass} flex flex-col items-center justify-center gap-4 sm:flex-row`}
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              Open CRM
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border/60 px-8 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-card/50 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 px-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${fadeClass} text-center`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-1 text-3xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className={`mb-16 text-center ${fadeClass}`}>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Everything You Need in the Field
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              From the first site visit to the final invoice, one system and zero guesswork.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`${fadeClass} group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-primary/[0.03] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className={fadeClass}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Built from the Dirt Up</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              After years of tracking projects in binders, spreadsheets, and scattered
              messages, this system was shaped around real field operations rather than
              generic CRM templates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {capabilityTags.map((item, index) => (
                <span
                  key={item}
                  className={`${fadeClass} inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-24">
        <div className={`mx-auto max-w-3xl text-center ${fadeClass}`}>
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mb-6 text-xl leading-relaxed text-foreground md:text-2xl">
            &quot;Finally a system that thinks like a contractor. No more lost estimates
            or scrambling for photos. Everything from the site visit to the final
            invoice lives in one place.&quot;
          </blockquote>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            MLC Group Team
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className={`${fadeClass} mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center text-primary-foreground`}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Run Your Operation?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-primary-foreground/80">
            Stop losing estimates in your inbox. Start managing your business from one place.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-secondary px-8 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            Open CRM
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/chronicle/mlc-logo.jpg"
              alt="MLC Group"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium text-muted-foreground">
              Copyright {new Date().getFullYear()} MLC Group. All rights reserved.
            </span>
          </div>
          <a
            href="https://mylandscapecontractor.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            mylandscapecontractor.com
          </a>
        </div>
      </footer>
    </div>
  );
}
