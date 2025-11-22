"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signIn("credentials", {
            email: form.email,
            password: form.password,
            callbackUrl: "/dashboard",
        });
    };

    return (
        <div className="max-w-md mx-auto mt-20">
            <h1 className="text-2xl font-semibold mb-6">Login</h1>
            <form onSubmit={submit} className="space-y-4">
                <input
                    placeholder="Email"
                    type="email"
                    className="border p-2 w-full rounded"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="border p-2 w-full rounded"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="bg-black text-white px-4 py-2 rounded w-full">
                    Sign In
                </button>
            </form>
        </div>
    );
}
