// src/lib/auth.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                // Find login record + related user profile
                const userAuth = await prisma.userAuth.findUnique({
                    where: { username: credentials.email },
                    include: {
                        user: true,
                    },
                });

                if (!userAuth) return null;

                const valid = await compare(
                    credentials.password,
                    userAuth.passwordHash
                );
                if (!valid) return null;

                // Return object that becomes JWT payload
                return {
                    id: userAuth.user.id,            // Prisma User ID
                    email: userAuth.username,        // Email
                    name: userAuth.user.firstName,   // Display name
                    image: null,                     // Optional
                };
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
};

