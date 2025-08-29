"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    phone: "",
    whatsapp: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.phone && form.emergencyName && form.emergencyPhone) {
      localStorage.setItem("contactDetails", JSON.stringify(form));
      alert("Contact details saved successfully");
      router.push("/register/assessment");
    } else {
      alert("Please complete all required fields.");
    }
  };

  return (
    <main className="p-4 min-h-screen flex flex-col justify-center bg-white text-black">
      <div className="w-full max-w-sm space-y-4 mx-auto">
        <h1 className="text-2xl font-semibold text-center">Contact Details</h1>

        {/* Contact Details */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          type="tel"
          placeholder="WhatsApp Number"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Emergency Contact */}
        <input
          name="emergencyName"
          value={form.emergencyName}
          onChange={handleChange}
          placeholder="Emergency Contact Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="emergencyRelationship"
          value={form.emergencyRelationship}
          onChange={handleChange}
          placeholder="Emergency Contact Relationship"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="emergencyPhone"
          value={form.emergencyPhone}
          onChange={handleChange}
          type="tel"
          placeholder="Emergency Contact Phone Number"
          className="w-full px-4 py-2 border rounded-md"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-md bg-black text-white hover:bg-gray-900 transition"
        >
          Save & Continue
        </button>
      </div>
    </main>
  );
}
