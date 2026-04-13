export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  leadSource: string;
  projectStatus: string;
  paymentStatus: string;
  description: string;
  projectId: string;
  created: string;
  estimateTotal: number;
  paidAmount: number;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
  status: string;
  materials: string;
  cost: number;
}

export interface Communication {
  id: string;
  clientId: string;
  projectId: string;
  date: string;
  type: string;
  note: string;
}

export interface Timesheet {
  id: string;
  projectId: string;
  crew: string;
  date: string;
  hours: number;
  task: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  clientId: string;
  notes: string;
}

export const EVENT_COLORS: Record<string, string> = {
  "Estimate Appt": "hsl(217 91% 60%)",
  "Site Visit": "hsl(40 60% 55%)",
  "Project Start": "hsl(160 84% 39%)",
  "Follow Up": "hsl(43 96% 56%)",
  "Crew Schedule": "hsl(130 40% 25%)",
  "Client Meeting": "hsl(239 84% 67%)",
  Inspection: "hsl(0 84% 60%)",
  Other: "hsl(220 10% 46%)",
};

export const STATUS_COLOR_MAP: Record<string, string> = {
  Lead: "bg-status-lead",
  Quoted: "bg-status-quoted",
  "In Progress": "bg-status-in-progress",
  Completed: "bg-status-completed",
  Cancelled: "bg-status-cancelled",
  Unpaid: "bg-status-unpaid",
  "Deposit Paid": "bg-status-deposit",
  Partial: "bg-status-partial",
  "Paid in Full": "bg-status-paid",
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const SAMPLE_CLIENTS: Client[] = [
  {
    id: "CLT-001",
    name: "John Peterson",
    phone: "(847) 555-0123",
    email: "john.p@email.com",
    address: "1425 Oak Ave, Schaumburg, IL 60193",
    leadSource: "Website",
    projectStatus: "In Progress",
    paymentStatus: "Deposit Paid",
    description:
      "Complete backyard renovation with patio, retaining wall, and planting beds",
    projectId: "Peterson-2026-01-15-1425Oak",
    created: "2026-01-15",
    estimateTotal: 28500,
    paidAmount: 8550,
    tasks: [
      {
        id: "t1",
        name: "Site Preparation & Demo",
        status: "Complete",
        materials: "Dumpster rental, safety equipment",
        cost: 2200,
      },
      {
        id: "t2",
        name: "Retaining Wall",
        status: "In Progress",
        materials: "Versa-Lok blocks (240), gravel base, drainage pipe",
        cost: 8500,
      },
      {
        id: "t3",
        name: "Patio Installation",
        status: "Not Started",
        materials: "Belgard pavers (800 sqft), polymeric sand, base material",
        cost: 12000,
      },
      {
        id: "t4",
        name: "Planting & Mulch",
        status: "Not Started",
        materials: "12 shrubs, 6 trees, 15 yards mulch, topsoil",
        cost: 5800,
      },
    ],
  },
  {
    id: "CLT-002",
    name: "Maria Santos",
    phone: "(847) 555-0456",
    email: "maria.s@email.com",
    address: "890 Elm St, Hoffman Estates, IL 60169",
    leadSource: "Yelp",
    projectStatus: "Quoted",
    paymentStatus: "Unpaid",
    description: "Front yard landscape design with walkway and lighting",
    projectId: "Santos-2026-02-03-890Elm",
    created: "2026-02-03",
    estimateTotal: 15200,
    paidAmount: 0,
    tasks: [],
  },
  {
    id: "CLT-003",
    name: "Robert Kim",
    phone: "(847) 555-0789",
    email: "r.kim@email.com",
    address: "2100 Maple Dr, Arlington Heights, IL 60004",
    leadSource: "Referral",
    projectStatus: "Completed",
    paymentStatus: "Paid in Full",
    description: "Drainage solution and sod installation",
    projectId: "Kim-2025-10-20-2100Maple",
    created: "2025-10-20",
    estimateTotal: 9800,
    paidAmount: 9800,
    tasks: [
      {
        id: "t1",
        name: "French Drain Install",
        status: "Complete",
        materials: "Perforated pipe, gravel, fabric",
        cost: 4200,
      },
      {
        id: "t2",
        name: "Grading & Sod",
        status: "Complete",
        materials: "Topsoil (20 yards), sod (3000 sqft)",
        cost: 5600,
      },
    ],
  },
  {
    id: "CLT-004",
    name: "Sarah Williams",
    phone: "(847) 555-1011",
    email: "s.williams@email.com",
    address: "456 Pine Rd, Palatine, IL 60067",
    leadSource: "Google",
    projectStatus: "Lead",
    paymentStatus: "Unpaid",
    description: "Interested in full backyard hardscape",
    projectId: "Williams-2026-02-20-456Pine",
    created: "2026-02-20",
    estimateTotal: 0,
    paidAmount: 0,
    tasks: [],
  },
  {
    id: "CLT-005",
    name: "Mike Thompson",
    phone: "(847) 555-1213",
    email: "m.thompson@email.com",
    address: "3200 Birch Ln, Schaumburg, IL 60193",
    leadSource: "Social Media",
    projectStatus: "In Progress",
    paymentStatus: "Partial",
    description: "Commercial parking lot landscaping and irrigation",
    projectId: "Thompson-2026-01-28-3200Birch",
    created: "2026-01-28",
    estimateTotal: 42000,
    paidAmount: 21000,
    tasks: [
      {
        id: "t1",
        name: "Irrigation System",
        status: "Complete",
        materials: "Hunter rotors, drip lines, controller, valves",
        cost: 14000,
      },
      {
        id: "t2",
        name: "Tree Planting",
        status: "In Progress",
        materials: "20 shade trees, stakes, mulch rings",
        cost: 16000,
      },
      {
        id: "t3",
        name: "Bed Installation",
        status: "Not Started",
        materials: "Shrubs, perennials, edging, mulch",
        cost: 12000,
      },
    ],
  },
];

export const SAMPLE_COMMS: Communication[] = [
  {
    id: "c1",
    clientId: "CLT-001",
    projectId: "Peterson-2026-01-15-1425Oak",
    date: "2026-01-15",
    type: "Call",
    note:
      "Initial consultation call. Client wants full backyard renovation. Scheduled site visit for 1/18.",
  },
  {
    id: "c2",
    clientId: "CLT-001",
    projectId: "Peterson-2026-01-15-1425Oak",
    date: "2026-01-18",
    type: "In-Person",
    note:
      "Site visit completed. Measured yard, discussed retaining wall options and paver styles.",
  },
  {
    id: "c3",
    clientId: "CLT-001",
    projectId: "Peterson-2026-01-15-1425Oak",
    date: "2026-01-22",
    type: "Email",
    note: "Sent estimate $28,500. Includes retaining wall, patio, and planting.",
  },
  {
    id: "c4",
    clientId: "CLT-001",
    projectId: "Peterson-2026-01-15-1425Oak",
    date: "2026-01-25",
    type: "Call",
    note: "Client accepted estimate. Deposit of 30% received.",
  },
  {
    id: "c5",
    clientId: "CLT-002",
    projectId: "Santos-2026-02-03-890Elm",
    date: "2026-02-03",
    type: "Email",
    note: "Inquiry from Yelp. Client wants front yard redesign with walkway.",
  },
  {
    id: "c6",
    clientId: "CLT-002",
    projectId: "Santos-2026-02-03-890Elm",
    date: "2026-02-07",
    type: "In-Person",
    note: "Site visit. Front yard is 1200 sqft. Discussed natural stone walkway.",
  },
  {
    id: "c7",
    clientId: "CLT-005",
    projectId: "Thompson-2026-01-28-3200Birch",
    date: "2026-01-28",
    type: "Call",
    note: "Commercial client needs parking lot landscaping. Large project.",
  },
  {
    id: "c8",
    clientId: "CLT-005",
    projectId: "Thompson-2026-01-28-3200Birch",
    date: "2026-02-10",
    type: "Text",
    note: "Irrigation phase complete. Moving to tree planting next week.",
  },
];

export const SAMPLE_TIMESHEETS: Timesheet[] = [
  {
    id: "ts1",
    projectId: "Peterson-2026-01-15-1425Oak",
    crew: "Carlos M.",
    date: "2026-02-10",
    hours: 8,
    task: "Retaining Wall",
  },
  {
    id: "ts2",
    projectId: "Peterson-2026-01-15-1425Oak",
    crew: "James R.",
    date: "2026-02-10",
    hours: 8,
    task: "Retaining Wall",
  },
  {
    id: "ts3",
    projectId: "Peterson-2026-01-15-1425Oak",
    crew: "Carlos M.",
    date: "2026-02-11",
    hours: 7.5,
    task: "Retaining Wall",
  },
  {
    id: "ts4",
    projectId: "Thompson-2026-01-28-3200Birch",
    crew: "Alex P.",
    date: "2026-02-08",
    hours: 9,
    task: "Irrigation System",
  },
  {
    id: "ts5",
    projectId: "Thompson-2026-01-28-3200Birch",
    crew: "David L.",
    date: "2026-02-08",
    hours: 9,
    task: "Irrigation System",
  },
];

export const SAMPLE_EVENTS: CalendarEvent[] = [
  {
    id: "ev1",
    title: "Site Visit - Sarah Williams",
    date: "2026-03-06",
    time: "9:00 AM",
    type: "Site Visit",
    clientId: "CLT-004",
    notes: "Measure backyard, discuss hardscape options",
  },
  {
    id: "ev2",
    title: "Estimate - Maria Santos",
    date: "2026-03-07",
    time: "2:00 PM",
    type: "Estimate Appt",
    clientId: "CLT-002",
    notes: "Present walkway & lighting estimate",
  },
  {
    id: "ev3",
    title: "Crew: Peterson Patio",
    date: "2026-03-10",
    time: "7:00 AM",
    type: "Crew Schedule",
    clientId: "CLT-001",
    notes: "Start patio installation - 4 crew members",
  },
  {
    id: "ev4",
    title: "Crew: Peterson Patio",
    date: "2026-03-11",
    time: "7:00 AM",
    type: "Crew Schedule",
    clientId: "CLT-001",
    notes: "Continue patio installation",
  },
  {
    id: "ev5",
    title: "Crew: Peterson Patio",
    date: "2026-03-12",
    time: "7:00 AM",
    type: "Crew Schedule",
    clientId: "CLT-001",
    notes: "Finish patio, start planting prep",
  },
  {
    id: "ev6",
    title: "Follow Up - Maria Santos",
    date: "2026-03-10",
    time: "11:00 AM",
    type: "Follow Up",
    clientId: "CLT-002",
    notes: "Check if estimate was accepted",
  },
  {
    id: "ev7",
    title: "Thompson Tree Planting",
    date: "2026-03-13",
    time: "7:00 AM",
    type: "Crew Schedule",
    clientId: "CLT-005",
    notes: "Tree planting phase - 3 crew",
  },
  {
    id: "ev8",
    title: "Inspection - Kim Property",
    date: "2026-03-05",
    time: "1:00 PM",
    type: "Inspection",
    clientId: "CLT-003",
    notes: "Final walkthrough, drainage check",
  },
];
