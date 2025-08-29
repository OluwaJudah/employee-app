"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SupportPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    tel: "",
    callDescription: "",
  });
  const [showPopia, setShowPopia] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.tel && form.callDescription) {
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
    router.push("/support/confirmed");
  };

  return (
    <main className="min-h-screen p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Support</h1>
      </div>

      <section className="space-y-8">
        {/* WhatsApp Support */}
        <div className="border border-black p-4 rounded-md space-y-2">
          <h2 className="font-medium text-black">WhatsApp Support</h2>
          <a
            href="https://wa.me/1234567890" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black text-white text-center py-2 rounded"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Email & Phone */}
        <ul className="space-y-3">
          <li className="border p-4 rounded-md flex items-center gap-3">
            <MailIcon className="w-5 h-5" />
            <a href="mailto:support@example.com" className="underline">
              support@example.com
            </a>
          </li>
          <li className="border p-4 rounded-md flex items-center gap-3">
            <PhoneIcon className="w-5 h-5" />
            <a
              href="tel:+1234567890" // Replace with real number
              className="block text-black underline"
            >
              +27 06 123 456 7890
            </a>
          </li>
        </ul>

        {/* Callback Form */}
        <div className=" space-y-4">
          <h2 className="font-medium text-black">Request a Callback</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Employee or Family Member Name"
              className="w-full border border-black p-2 rounded text-black"
            />
            <input
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-black p-2 rounded text-black"
            />
            <textarea
              name="callDescription"
              value={form.callDescription}
              onChange={handleChange}
              placeholder="Nature of the call (E.g trauma debriefing, depressed/anxiety related, grieving, suicidal, admin related or other)"
              className="w-full border border-black p-2 rounded text-black"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* POPIA Modal */}
        {showPopia && (
          <div className="fixed inset-0 bg-gray-600/30 flex items-center justify-center p-4">
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
                  appointment management, and secure record keeping. We will
                  never share your information without your consent.
                </p>
                <p>
                  You may request access, correction, or deletion of your
                  information at any time by contacting our support team.
                </p>
                <p>
                  Please review our full privacy policy for detailed
                  information.
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
      </section>

      <BottomNav />
    </main>
  );
}
