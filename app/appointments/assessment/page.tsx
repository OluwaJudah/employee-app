"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingAssessmentPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    stressLevel: "",
    sleepQuality: "",
    needSupport: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.stressLevel && form.sleepQuality && form.needSupport) {
      localStorage.setItem("bookingAssessment", JSON.stringify(form));
      router.push("/appointments/practitioners");
    } else {
      alert("Please answer all questions.");
    }
  };

  return (
    <main className="min-h-screen p-4 pb-20 space-y-4">
      <h1 className="text-xl font-semibold text-center">Quick Assessment</h1>

      <label className="block text-sm font-medium">
        How stressed are you feeling?
      </label>
      <select
        name="stressLevel"
        value={form.stressLevel}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select stress level</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <label className="block text-sm font-medium">
        How well have you been sleeping?
      </label>
      <select
        name="sleepQuality"
        value={form.sleepQuality}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select sleep quality</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="poor">Poor</option>
      </select>

      <label className="block text-sm font-medium">
        What kind of support do you feel you need?
      </label>
      <input
        name="needSupport"
        value={form.needSupport}
        onChange={handleChange}
        placeholder="e.g. emotional, work stress, trauma"
        className="w-full border p-2 rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded"
      >
        Continue to Practitioners
      </button>
    </main>
  );
}
