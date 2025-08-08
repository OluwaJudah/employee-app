"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.email && agreed) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Registration successful");
      router.push("/register/assessment");
    }
  };

  return (
    <main className="p-4 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-sm space-y-4 mx-auto">
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          type="number"
          placeholder="Age"
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="flex items-start gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className="underline">
              Terms and Conditions (POPIA)
            </a>
          </span>
        </label>

        <button
          onClick={handleSubmit}
          disabled={!agreed}
          className={`w-full py-2 rounded-md ${
            agreed
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue to Assessment
        </button>
      </div>
    </main>
  );
}
