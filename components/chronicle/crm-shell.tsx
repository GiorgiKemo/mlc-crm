"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  CalendarDays,
  Calculator,
  Clock,
  HardHat,
  LayoutDashboard,
  Menu,
  MessageSquare,
  PanelLeft,
  Settings,
  TreePine,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Clients", href: "/clients", icon: Users },
  { title: "Communications", href: "/communications", icon: MessageSquare },
  { title: "Estimates", href: "/estimates", icon: Calculator },
  { title: "Calendar", href: "/calendar", icon: CalendarDays },
  { title: "Timesheets", href: "/timesheets", icon: Clock },
  { title: "Field Ops", href: "/field-ops", icon: HardHat },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function ChronicleShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setCollapsed((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const sidebarContent = (
    <div className="flex h-full flex-col bg-sidebar-background text-sidebar-foreground">
      <div
        className={`flex items-center gap-3 px-4 py-5 ${
          collapsed ? "justify-center md:px-2" : ""
        }`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent">
          <TreePine className="h-5 w-5 text-sidebar-accent-foreground" />
        </div>
        {!collapsed ? (
          <div>
            <p className="text-sm font-bold tracking-wide text-sidebar-primary">MLC GROUP</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sidebar-foreground/60">
              CRM 1.0
            </p>
          </div>
        ) : null}
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2 pb-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-md p-2 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent font-semibold text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className={`h-4 w-4 ${collapsed ? "" : "mr-2"}`} />
              {!collapsed ? <span>{item.title}</span> : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside
        className={`hidden shrink-0 border-r border-sidebar-border bg-sidebar-background transition-[width] duration-200 md:block ${
          collapsed ? "w-12" : "w-64"
        }`}
      >
        {sidebarContent}
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div className="relative h-full w-72 border-r border-sidebar-border shadow-xl">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-3 rounded-md p-1 text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            {sidebarContent}
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center border-b bg-card px-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground transition hover:bg-muted md:hidden"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open navigation</span>
          </button>
          <button
            type="button"
            onClick={() => setCollapsed((current) => !current)}
            className="mr-4 hidden h-7 w-7 items-center justify-center rounded-md text-foreground transition hover:bg-muted md:inline-flex"
          >
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <h1 className="font-display text-lg font-bold text-foreground">
            MLC Group CRM
          </h1>
        </header>

        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
