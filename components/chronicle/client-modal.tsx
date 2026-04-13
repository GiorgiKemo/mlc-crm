"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import type { Client } from "@/lib/chronicle-data";
import { formatCurrency } from "@/lib/chronicle-data";
import { StatusBadge } from "@/components/chronicle/status-badge";

export function ClientModal({
  client,
  onClose,
}: {
  client: Client;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg border bg-background p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm p-1 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="space-y-4">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {client.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {client.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {client.email}
            </div>
            <div className="col-span-full flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {client.address}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusBadge status={client.projectStatus} />
            <StatusBadge status={client.paymentStatus} />
          </div>

          <p className="text-sm text-muted-foreground">{client.description}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Estimate</p>
              <p className="text-lg font-bold text-foreground">
                {formatCurrency(client.estimateTotal)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Paid</p>
              <p className="text-lg font-bold text-foreground">
                {formatCurrency(client.paidAmount)}
              </p>
            </div>
          </div>

          {client.tasks.length > 0 ? (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Tasks</h4>
              <div className="space-y-2">
                {client.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between rounded-lg bg-muted/30 p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{task.name}</p>
                      <p className="text-xs text-muted-foreground">{task.materials}</p>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={task.status} />
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatCurrency(task.cost)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
