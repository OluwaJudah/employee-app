"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.trim()) {
      localStorage.setItem("email", email);
      alert("Login successful");
      router.push("/dashboard");
    }
  };

  return (
    <main className="p-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>
        <p className="text-sm text-gray-500 text-center">
          Enter your email below to log in to your account
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Sign In
        </button>
        <p
          className="text-sm text-center underline cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Don't have an account? Register
        </p>
      </div>
    </main>
  );
}
