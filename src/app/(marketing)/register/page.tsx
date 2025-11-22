"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        dateOfBirth: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setLoading(false);
        if (res.ok) router.push("/log-in");
        else alert("Registration failed");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-2">Create Your Account</h1>
                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="border p-2 rounded"
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />
                <button
                    disabled={loading}
                    className="bg-black text-white rounded-lg w-full py-2 font-semibold"
                >
                    {loading ? "Registering..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
