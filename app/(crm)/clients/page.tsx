"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone, Plus, Search } from "lucide-react";
import { Button } from "@/components/chronicle/button";
import { ClientModal } from "@/components/chronicle/client-modal";
import { Input } from "@/components/chronicle/input";
import { StatusBadge } from "@/components/chronicle/status-badge";
import { SAMPLE_CLIENTS, type Client, formatCurrency, formatDate } from "@/lib/chronicle-data";

const filters = ["All", "Lead", "Quoted", "In Progress", "Completed"];

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filteredClients = useMemo(
    () =>
      SAMPLE_CLIENTS.filter((client) => {
        const query = search.toLowerCase();
        const matchesSearch =
          client.name.toLowerCase().includes(query) ||
          client.address.toLowerCase().includes(query) ||
          client.email.toLowerCase().includes(query);
        const matchesStatus =
          statusFilter === "All" || client.projectStatus === statusFilter;
        return matchesSearch && matchesStatus;
      }),
    [search, statusFilter],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Clients</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {SAMPLE_CLIENTS.length} total clients
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={statusFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredClients.map((client, index) => (
          <button
            key={client.id}
            type="button"
            onClick={() => setSelectedClient(client)}
            className="animate-fade-in-up cursor-pointer rounded-lg border bg-card p-5 text-left transition-all hover:border-primary/30 hover:shadow-md"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {client.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{client.name}</p>
                  <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {client.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <StatusBadge status={client.projectStatus} />
                <StatusBadge status={client.paymentStatus} />
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">
                    {formatCurrency(client.estimateTotal)}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {formatDate(client.created)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                {client.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                {client.email}
              </div>
              <div>{client.projectId}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedClient ? (
        <ClientModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      ) : null}
    </div>
  );
}
