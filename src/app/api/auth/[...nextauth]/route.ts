import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const userAuth = await prisma.userAuth.findUnique({
                    where: {
                        username: credentials.email, // username = email
                    },
                    include: {
                        user: true,
                    },
                });

                if (!userAuth) return null;

                const valid = await compare(credentials.password, userAuth.passwordHash);
                if (!valid) return null;

                return {
                    id: userAuth.user.id,
                    email: userAuth.username,
                    name: userAuth.user.firstName,
                };
            },
        }),
    ],

    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            if (session.user) session.user.id = token.id as string;
            return session;
        },
    },

    pages: { signIn: "/login" },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
