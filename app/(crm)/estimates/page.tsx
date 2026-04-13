import { FileText } from "lucide-react";
import { StatusBadge } from "@/components/chronicle/status-badge";
import { SAMPLE_CLIENTS, formatCurrency } from "@/lib/chronicle-data";

export default function EstimatesPage() {
  const clientsWithEstimates = SAMPLE_CLIENTS.filter(
    (client) => client.estimateTotal > 0,
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Estimates</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Project estimates and pricing
        </p>
      </div>

      <div className="grid gap-4">
        {clientsWithEstimates.map((client, index) => {
          const progress =
            client.estimateTotal > 0
              ? (client.paidAmount / client.estimateTotal) * 100
              : 0;

          return (
            <div
              key={client.id}
              className="animate-fade-in-up rounded-lg border bg-card p-5 transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.projectId}</p>
                  </div>
                </div>
                <StatusBadge status={client.projectStatus} />
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{client.description}</p>

              {client.tasks.length > 0 ? (
                <div className="mb-4 space-y-2">
                  {client.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between rounded bg-muted/30 px-3 py-1.5 text-sm"
                    >
                      <span className="text-foreground">{task.name}</span>
                      <span className="font-medium text-foreground">
                        {formatCurrency(task.cost)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="flex items-center justify-between border-t pt-3">
                <div>
                  <p className="text-xs text-muted-foreground">Total Estimate</p>
                  <p className="text-xl font-bold text-foreground">
                    {formatCurrency(client.estimateTotal)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Collected</p>
                    <p className="text-sm font-semibold text-foreground">
                      {formatCurrency(client.paidAmount)}
                    </p>
                  </div>
                  <div className="w-24">
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="mt-1 text-center text-[10px] text-muted-foreground">
                      {Math.round(progress)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
