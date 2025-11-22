import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const hashed = await bcrypt.hash(data.password, 10);

        const user = await prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: new Date(data.dateOfBirth),
                gender: "Unspecified",
                userRole: "Patient",
                accountStatus: "Active",
                auth: {
                    create: {
                        username: data.username,
                        passwordHash: hashed,
                    },
                },
                contacts: {
                    create: {
                        primaryEmail: data.email,
                        primaryPhone: "N/A",
                        emergencyContactName: "N/A",
                        emergencyContactPhone: "N/A",
                        emergencyContactRelation: "N/A",
                    },
                },
            },
            include: { auth: true },
        });

        return NextResponse.json({ id: user.id });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
