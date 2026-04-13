"use client";

import { useMemo, useState } from "react";
import { Mail, MessageSquare, Phone, Search, User } from "lucide-react";
import { Input } from "@/components/chronicle/input";
import { SAMPLE_CLIENTS, SAMPLE_COMMS, formatDate } from "@/lib/chronicle-data";

const typeIcons = {
  Call: Phone,
  Email: Mail,
  Text: MessageSquare,
  "In-Person": User,
} as const;

const filters = ["All", "Call", "Email", "Text", "In-Person"];

export default function CommunicationsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredCommunications = useMemo(() => {
    const sorted = [...SAMPLE_COMMS].sort((a, b) => b.date.localeCompare(a.date));

    return sorted.filter((entry) => {
      const client = SAMPLE_CLIENTS.find((item) => item.id === entry.clientId);
      const query = search.toLowerCase();
      const matchesSearch =
        (client?.name ?? "").toLowerCase().includes(query) ||
        entry.note.toLowerCase().includes(query);
      const matchesType = typeFilter === "All" || entry.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Communications
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          All client interactions
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search communications..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setTypeFilter(filter)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                typeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredCommunications.map((entry, index) => {
          const client = SAMPLE_CLIENTS.find((item) => item.id === entry.clientId);
          const Icon = typeIcons[entry.type as keyof typeof typeIcons] ?? MessageSquare;

          return (
            <div
              key={entry.id}
              className="animate-fade-in-up rounded-lg border bg-card p-4 transition-all hover:shadow-sm"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-foreground">
                      {client?.name}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {entry.type}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.note}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
