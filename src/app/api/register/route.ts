import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            firstName,
            middleName,
            lastName,
            preferredName,
            dateOfBirth,
            gender,
            email,
            password,
        } = body;

        if (!email || !password || !firstName || !lastName || !dateOfBirth) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Check if contact email already exists
        const existing = await prisma.userContact.findUnique({
            where: { primaryEmail: email },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 }
            );
        }

        // 2. Create user profile
        const user = await prisma.user.create({
            data: {
                firstName,
                middleName,
                lastName,
                preferredName,
                dateOfBirth: new Date(dateOfBirth),
                gender,
                userRole: "Patient",
            },
        });

        // 3. Create contact record
        await prisma.userContact.create({
            data: {
                userId: user.id,
                primaryEmail: email,
                primaryPhone: "N/A",
                emergencyContactName: "N/A",
                emergencyContactPhone: "N/A",
                emergencyContactRelation: "N/A",
            },
        });

        // 4. Hash password
        const hash = await bcrypt.hash(password, 10);

        // 5. Create authentication record
        await prisma.userAuth.create({
            data: {
                userId: user.id,
                username: email,
                passwordHash: hash,
            },
        });

        return NextResponse.json(
            { message: "User registered successfully", userId: user.id },
            { status: 201 }
        );
    } catch (err) {
        console.error("Registration error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
