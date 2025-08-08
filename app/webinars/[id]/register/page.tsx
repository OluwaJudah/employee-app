"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function WebinarRegisterPage() {
  const router = useRouter();
  const params = useParams();
  const webinarId = params?.id;

  const [form, setForm] = useState({
    name: "John",
    email: "johndoe@gmail.com",
    phone: "06123456789",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle API call here
    router.push(`/webinars/${webinarId}/confirmation`);
  };

  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold">Register for Webinar</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Confirm Registration
        </button>
      </form>
    </main>
  );
}
