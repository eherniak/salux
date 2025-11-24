// src/app/(app)/dashboard/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    // If no session → redirect to login
    if (!session || !session.user) {
        redirect("/login");
    }

    // Normalize session.user into a fully defined object
    const user = {
        id: session.user.id!, // your NextAuth callback guarantees this
        name: session.user.name ?? "",
        email: session.user.email ?? "",
        image: session.user.image ?? null,
    };

    return (
        <main className="min-h-screen w-full bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <DashboardClient user={user} />
            </div>
        </main>
    );
}
