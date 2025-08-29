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
    employeeNo: "",
  });
  const [showPopia, setShowPopia] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.email) {
      // Save user details to localStorage
      localStorage.setItem("user", JSON.stringify(form));

      // Show POPIA Terms popup
      setShowPopia(true);
    } else {
      alert("Please complete all required fields.");
    }
  };

  const handleConfirm = () => {
    setShowPopia(false);
    alert("Registration successful");
    router.push("/register/contact-details");
  };

  return (
    <main className="p-4 min-h-screen flex flex-col justify-center bg-white text-black">
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
        <input
          name="employeeNo"
          value={form.employeeNo}
          onChange={handleChange}
          placeholder="Employee No.:"
          className="w-full px-4 py-2 border rounded-md"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-md bg-black text-white hover:bg-gray-900 transition"
        >
          Continue
        </button>
      </div>

      {/* POPIA Modal */}
      {showPopia && (
        <div className="fixed inset-0 bg-gray-600/10 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-md shadow-lg w-full max-w-md max-h-[80vh] flex flex-col">
            <h2 className="text-xl font-semibold p-4 border-b">
              POPIA Terms & Conditions
            </h2>

            {/* Scrollable Content */}
            <div className="p-4 overflow-y-auto flex-1 text-sm space-y-2">
              <p>
                By continuing, you agree that your personal data will be
                processed in compliance with the Protection of Personal
                Information Act (POPIA).
              </p>
              <p>
                Your data will only be used for counselling services,
                appointment management, and secure record keeping. We will never
                share your information without your consent.
              </p>
              <p>
                You may request access, correction, or deletion of your
                information at any time by contacting our support team.
              </p>
              <p>
                Please review our full privacy policy for detailed information.
              </p>{" "}
              <p>
                By continuing, you agree that your personal data will be
                processed in compliance with the Protection of Personal
                Information Act (POPIA).
              </p>
              <p>
                Your data will only be used for counselling services,
                appointment management, and secure record keeping. We will never
                share your information without your consent.
              </p>
              <p>
                You may request access, correction, or deletion of your
                information at any time by contacting our support team.
              </p>
              <p>
                Please review our full privacy policy for detailed information.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t flex justify-between">
              <button
                onClick={() => setShowPopia(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
              >
                I Agree & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
