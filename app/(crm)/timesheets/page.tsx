import { Clock, User } from "lucide-react";
import {
  SAMPLE_CLIENTS,
  SAMPLE_TIMESHEETS,
  formatDate,
} from "@/lib/chronicle-data";

export default function TimesheetsPage() {
  const totalHours = SAMPLE_TIMESHEETS.reduce((sum, entry) => sum + entry.hours, 0);
  const crewMembers = [...new Set(SAMPLE_TIMESHEETS.map((entry) => entry.crew))];

  const getClientName = (projectId: string) =>
    SAMPLE_CLIENTS.find((client) => client.projectId === projectId)?.name ?? projectId;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Timesheets</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Crew hours and labor tracking
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="animate-fade-in-up rounded-lg border bg-card p-5">
          <div className="mb-1 flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Total Hours</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{totalHours}</p>
        </div>
        <div className="animate-fade-in-up rounded-lg border bg-card p-5">
          <div className="mb-1 flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="text-sm">Crew Members</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{crewMembers.length}</p>
        </div>
        <div className="animate-fade-in-up rounded-lg border bg-card p-5">
          <div className="mb-1 flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Entries</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {SAMPLE_TIMESHEETS.length}
          </p>
        </div>
      </div>

      <div className="animate-fade-in-up overflow-hidden rounded-lg border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                  Crew
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                  Project
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                  Task
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                  Date
                </th>
                <th className="p-3 text-right text-xs font-semibold text-muted-foreground">
                  Hours
                </th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_TIMESHEETS.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-t transition-colors hover:bg-muted/20"
                >
                  <td className="p-3 text-sm font-medium text-foreground">
                    {entry.crew}
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {getClientName(entry.projectId)}
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">{entry.task}</td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {formatDate(entry.date)}
                  </td>
                  <td className="p-3 text-right text-sm font-semibold text-foreground">
                    {entry.hours}h
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
