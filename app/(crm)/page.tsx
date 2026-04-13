import {
  Calendar,
  Clock,
  ClipboardList,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/chronicle/stat-card";
import { StatusBadge } from "@/components/chronicle/status-badge";
import {
  SAMPLE_CLIENTS,
  SAMPLE_COMMS,
  SAMPLE_EVENTS,
  formatCurrency,
  formatDate,
} from "@/lib/chronicle-data";

export default function DashboardPage() {
  const totalRevenue = SAMPLE_CLIENTS.reduce((sum, client) => sum + client.paidAmount, 0);
  const totalPipeline = SAMPLE_CLIENTS.reduce(
    (sum, client) => sum + client.estimateTotal,
    0,
  );
  const activeProjects = SAMPLE_CLIENTS.filter(
    (client) => client.projectStatus === "In Progress",
  ).length;
  const leads = SAMPLE_CLIENTS.filter(
    (client) => client.projectStatus === "Lead",
  ).length;

  const recentComms = [...SAMPLE_COMMS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);
  const upcomingEvents = [...SAMPLE_EVENTS]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back to MLC Group CRM
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Clients"
          value={String(SAMPLE_CLIENTS.length)}
          subtitle={`${leads} new leads`}
          icon={Users}
        />
        <StatCard
          title="Active Projects"
          value={String(activeProjects)}
          subtitle="In progress"
          icon={ClipboardList}
          accentColor="bg-status-in-progress"
        />
        <StatCard
          title="Revenue"
          value={formatCurrency(totalRevenue)}
          subtitle="Collected"
          icon={DollarSign}
          accentColor="bg-accent"
        />
        <StatCard
          title="Pipeline"
          value={formatCurrency(totalPipeline)}
          subtitle="Total estimates"
          icon={TrendingUp}
        />
      </div>

      <div className="animate-fade-in-up rounded-lg border bg-card p-5">
        <h3 className="mb-4 font-display text-lg font-bold text-foreground">
          Pipeline Overview
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {["Lead", "Quoted", "In Progress", "Completed", "Cancelled"].map((status) => {
            const count = SAMPLE_CLIENTS.filter(
              (client) => client.projectStatus === status,
            ).length;
            const total = SAMPLE_CLIENTS.filter(
              (client) => client.projectStatus === status,
            ).reduce((sum, client) => sum + client.estimateTotal, 0);

            return (
              <div key={status} className="rounded-lg bg-muted/50 p-3 text-center">
                <StatusBadge status={status} />
                <p className="mt-2 text-2xl font-bold text-foreground">{count}</p>
                <p className="text-xs text-muted-foreground">
                  {formatCurrency(total)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="animate-fade-in-up rounded-lg border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Recent Activity
            </h3>
          </div>
          <div className="space-y-3">
            {recentComms.map((comm) => {
              const client = SAMPLE_CLIENTS.find((entry) => entry.id === comm.clientId);

              return (
                <div
                  key={comm.id}
                  className="flex items-start gap-3 rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {comm.type[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {client?.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {comm.note}
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {formatDate(comm.date)} - {comm.type}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animate-fade-in-up rounded-lg border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Upcoming Events
            </h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-3 rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
              >
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {event.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(event.date)} - {event.time}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {event.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
