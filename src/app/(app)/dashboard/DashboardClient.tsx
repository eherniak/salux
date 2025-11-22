"use client";

import React, { ReactNode, useMemo, useState, useEffect } from "react";
import {
    LayoutDashboard,
    Loader2,
    Stethoscope,
    SlidersHorizontal,
    RotateCcw,
    LogOut,
    Plus,
} from "lucide-react";

// shadcn/ui primitives
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

/* -----------------------------------------------------------
 * Utility Components
 * --------------------------------------------------------- */

interface PillProps {
    children: ReactNode;
    className?: string;
}

export function Pill({ children, className = "" }: PillProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}
        >
      {children}
    </span>
    );
}

/* -----------------------------------------------------------
 * Add Doctor Type Dialog (persists via /api/records)
 * --------------------------------------------------------- */

function AddTDDialog({ onCreate }: { onCreate: (label: string) => void }) {
    const [label, setLabel] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-2xl">
                    <Plus className="h-4 w-4 mr-2" /> Add Type of Doctor
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>New Type of Doctor</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="grid grid-cols-4 items-center gap-3">
                        <label className="col-span-1 text-sm text-muted-foreground">Label</label>
                        <Input
                            className="col-span-3"
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                            placeholder="e.g., Endocrinology"
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <Button variant="outline" className="rounded-2xl" onClick={() => setLabel("")}>
                            Clear
                        </Button>
                        <Button
                            className="rounded-2xl"
                            onClick={() => {
                                if (!label) return;
                                onCreate(label);
                                setLabel("");
                            }}
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

/* -----------------------------------------------------------
 * Main Dashboard Component (Website only)
 * --------------------------------------------------------- */

type User = {
    id: string;
    name: string;
    email: string;
};

type Row = {
    id: number;
    typeKey: string;
    type: string;
    result: string;
    owner: string;
    updated: string;
};

export default function DashboardClient({ user }: { user: User }) {
    const [rows, setRows] = useState<Row[]>([]);
    const [selected, setSelected] = useState<Row | null>(null);
    const [openDetail, setOpenDetail] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [q, setQ] = useState("");
    const [autoReq, setAutoReq] = useState(true);
    const [lastRun, setLastRun] = useState("");

    // ✅ Load records for the logged-in user
    useEffect(() => {
        async function loadRecords() {
            const res = await fetch("/api/records");
            if (res.ok) {
                const data = await res.json();
                setRows(data);
            }
        }
        loadRecords();
    }, []);

    const filtered = useMemo(
        () =>
            rows.filter((r) =>
                [r.type, r.result, r.owner].join(" ").toLowerCase().includes(q.toLowerCase())
            ),
        [rows, q]
    );

    const openRow = (r?: Row) => {
        if (!r) return;
        setSelected(r);
        setOpenDetail(true);
    };

    const handleAddDoctor = async (label: string) => {
        const res = await fetch("/api/records", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: label, result: "Report" }),
        });
        if (res.ok) {
            const newRecord = await res.json();
            setRows((cur) => [newRecord, ...cur]);
        }
    };

    const requestNow = () => {
        setConnecting(true);
        setTimeout(() => {
            setConnecting(false);
            setLastRun(new Date().toLocaleString());
        }, 1200);
    };

    /* -----------------------------------------------------------
     * UI
     * --------------------------------------------------------- */
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted/20 text-foreground">
            {connecting && (
                <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
                    <div className="rounded-full bg-background/95 border px-3 py-1.5 shadow flex items-center gap-2 text-sm">
                        <Loader2 className="h-4 w-4 animate-spin" /> Connecting…
                    </div>
                </div>
            )}

            {/* Top bar */}
            <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
                <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center font-bold">
                            WF
                        </div>
                        <div className="font-semibold tracking-tight">Dashboard</div>
                        <Badge variant="outline" className="ml-2">
                            Logged in as {user?.email || "User"}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <form action="/api/auth/signout" method="post">
                            <Button size="sm" variant="outline" className="rounded-2xl">
                                <LogOut className="h-4 w-4 mr-1" /> Logout
                            </Button>
                        </form>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 pb-12">
                {/* Website Dashboard */}
                <div className="space-y-6 mt-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5" /> Dashboard
                        </h1>
                        <AddTDDialog onCreate={handleAddDoctor} />
                    </div>

                    {/* Search */}
                    <div className="relative w-72 max-w-full">
                        <Input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search doctor type, owner, result…"
                            className="pl-3"
                        />
                    </div>

                    {/* Doctor Records Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map((row) => (
                            <Card key={row.id} className="shadow-sm hover:shadow transition">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base flex items-center gap-2">
                                        <Stethoscope className="h-4 w-4" />
                                        {row.type}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground">TD → R</div>
                                            <div className="text-sm">
                                                <Pill className="bg-primary/10 text-primary">{row.result}</Pill>
                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="rounded-2xl"
                                            onClick={() => openRow(row)}
                                        >
                                            View Result
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Automated Records Request */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <SlidersHorizontal className="h-4 w-4" /> Records Requests
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Auto-request records from providers</div>
                                    <div className="text-xs text-muted-foreground">
                                        Checks for updates daily and requests missing documents.
                                    </div>
                                </div>
                                <Switch checked={autoReq} onCheckedChange={setAutoReq} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground text-xs">
                                    Last requested: {lastRun || "—"}
                                </div>
                                <Button size="sm" className="rounded-2xl" onClick={requestNow}>
                                    <RotateCcw className="h-4 w-4 mr-1" /> Request Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* Detail Sheet */}
            {openDetail && selected && (
                <Sheet open={openDetail} onOpenChange={setOpenDetail}>
                    <SheetContent className="w-[460px] sm:w-[560px]">
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                                <Stethoscope className="h-5 w-5" /> {selected.type}
                            </SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 space-y-4 text-sm">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <div className="text-muted-foreground">Result</div>
                                    <Pill className="bg-primary/10 text-primary">{selected.result}</Pill>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-muted-foreground">Updated</div>
                                    <div className="font-medium">{selected.updated}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-muted-foreground">Owner</div>
                                    <div className="font-medium">{user?.name || "—"}</div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </div>
    );
}

