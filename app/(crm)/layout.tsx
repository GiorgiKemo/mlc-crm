import type { ReactNode } from "react";
import { ChronicleShell } from "@/components/chronicle/crm-shell";

export default function CrmLayout({ children }: { children: ReactNode }) {
  return <ChronicleShell>{children}</ChronicleShell>;
}
