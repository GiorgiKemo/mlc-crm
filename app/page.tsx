"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const features = [
  {
    icon: FileText,
    title: "Estimate to Invoice",
    description: "From site visit to final payment - one seamless pipeline.",
  },
  {
    icon: Users,
    title: "Crew Scheduling",
    description: "Morning prompts, work orders, and crew-specific views.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "EXIF-sorted photos, interval snapshots, and visual logs.",
  },
  {
    icon: DollarSign,
    title: "Job Costing",
    description: "Pre-loaded formulas for materials, labor, and margins.",
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "Bi-directional sync with contacts and auto-scheduling.",
  },
  {
    icon: ClipboardList,
    title: "Client Tracking",
    description: "Full chronological timeline of every interaction.",
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

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img
              src="/chronicle/mlc-logo.jpg"
              alt="MLC Group"
              className="h-10 w-10 rounded-full object-cover"
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

      <section className="relative px-6 pb-20 pt-32 md:px-6 md:pb-32 md:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Leaf className="h-4 w-4" />
            #1 CRM Built By Landscapers, For Landscapers
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-display mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            My Landscape
            <br />
            <span className="text-primary">Contractor</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-base"
          >
            Brick Patios - Patio Restoration - Yard Drainage
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We don&apos;t just cut grass - we build landscapes.
            <br className="hidden md:block" />
            This CRM was built the same way.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              Enter CRM
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border/60 px-8 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              See Features
            </a>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-card/50 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-display mb-1 text-3xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">
              Everything You Need in the Field
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              From the first site visit to the final invoice - one system, zero headaches.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-primary/[0.03] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="font-display mb-6 text-3xl font-bold md:text-4xl">
              Built from the Dirt Up
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              After 12 years of tracking projects in binders, spreadsheets, and sticky
              notes, we built the CRM we always needed. Every feature comes from real
              job-site experience - not a boardroom.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {capabilityTags.map((item, index) => (
                <motion.span
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUp}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="font-display mb-6 text-xl leading-relaxed text-foreground md:text-2xl">
            &quot;Finally a system that thinks like a contractor. No more lost estimates or
            scrambling for photos. Everything from the site visit to the final invoice
            - one place.&quot;
          </blockquote>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            MLC Group Team
          </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center text-primary-foreground"
        >
          <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">
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
        </motion.div>
      </section>

      <footer className="border-t border-border/50 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/chronicle/mlc-logo.jpg"
              alt="MLC Group"
              className="h-8 w-8 rounded-full object-cover"
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
