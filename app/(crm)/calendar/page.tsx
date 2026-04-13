"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/chronicle/button";
import { EVENT_COLORS, SAMPLE_EVENTS, formatDate } from "@/lib/chronicle-data";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const values: Array<number | null> = [];
    for (let index = 0; index < firstDay; index += 1) {
      values.push(null);
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      values.push(day);
    }
    return values;
  }, [daysInMonth, firstDay]);

  const getEventsForDay = (day: number) => {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return SAMPLE_EVENTS.filter((event) => event.date === dateString);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Calendar</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Schedule and crew assignments
        </p>
      </div>

      <div className="animate-fade-in-up rounded-lg border bg-card p-5">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-display text-lg font-bold text-foreground">{monthName}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg bg-border">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
            <div
              key={dayName}
              className="bg-muted p-2 text-center text-xs font-semibold text-muted-foreground"
            >
              {dayName}
            </div>
          ))}
          {days.map((day, index) => {
            const events = day ? getEventsForDay(day) : [];
            return (
              <div
                key={`${day ?? "empty"}-${index}`}
                className={`min-h-[80px] bg-card p-2 ${
                  day ? "transition-colors hover:bg-muted/30" : ""
                }`}
              >
                {day ? (
                  <>
                    <p className="mb-1 text-xs font-medium text-foreground">{day}</p>
                    <div className="space-y-1">
                      {events.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className="truncate rounded px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground"
                          style={{
                            backgroundColor:
                              EVENT_COLORS[event.type] ?? "hsl(var(--primary))",
                          }}
                          title={event.title}
                        >
                          {event.title}
                        </div>
                      ))}
                      {events.length > 2 ? (
                        <p className="text-[10px] text-muted-foreground">
                          +{events.length - 2} more
                        </p>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="animate-fade-in-up rounded-lg border bg-card p-5">
        <h3 className="mb-4 font-display text-lg font-bold text-foreground">
          Upcoming Events
        </h3>
        <div className="space-y-2">
          {[...SAMPLE_EVENTS]
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-3 rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
              >
                <div
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: EVENT_COLORS[event.type] }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {event.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(event.date)} - {event.time}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {event.type}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
