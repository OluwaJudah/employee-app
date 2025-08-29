"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AssessmentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    therapyBefore: "",
    reasons: [] as string[],
    religionImportance: "",
    religion: "",
  });

  const toggleReason = (reason: string) => {
    setForm((prev) => {
      if (prev.reasons.includes(reason)) {
        return { ...prev, reasons: prev.reasons.filter((r) => r !== reason) };
      } else {
        return { ...prev, reasons: [...prev.reasons, reason] };
      }
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("assessment", JSON.stringify(form));
    alert("Assessment saved ✅");
    router.push("/register/book/practitioners");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black p-4 text-center text-lg font-semibold shadow-md z-10">
       InTake Questions
      </header>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 mt-16 mb-20">
        {/* Therapy Before */}
        <div>
          <label className="block mb-2 font-medium">
            Have you been in therapy before?
          </label>
          <select
            value={form.therapyBefore}
            onChange={(e) =>
              setForm({ ...form, therapyBefore: e.target.value })
            }
            className="w-full border rounded-md p-2"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Reasons */}
        <div>
          <label className="block mb-2 font-medium">
            What led you to book a session? (multiple choice)
          </label>
          <div className="space-y-2">
            {[
              "I've been feeling depressed",
              "I feel anxious or overwhelmed",
              "My mood is interfering with my job performance",
              "Gambling addiction",
              "Substance abuse (alcohol, drugs, pills, etc.)",
              "I struggle with building or maintaining relationships",
              "I can't find purpose and meaning in my life",
              "I am grieving",
              "I have experienced trauma",
              "I need to talk through a specific challenge",
              "I want to improve myself but I don't know where to start",
              "Just want to talk",
              "I'm thinking of taking my life",
              "Other",
            ].map((reason) => (
              <label
                key={reason}
                className="flex items-center space-x-2 border p-2 rounded-md"
              >
                <input
                  type="checkbox"
                  checked={form.reasons.includes(reason)}
                  onChange={() => toggleReason(reason)}
                />
                <span>{reason}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Religion Importance */}
        <div>
          <label className="block mb-2 font-medium">
            How important is religion for you?
          </label>
          <select
            value={form.religionImportance}
            onChange={(e) =>
              setForm({ ...form, religionImportance: e.target.value })
            }
            className="w-full border rounded-md p-2"
          >
            <option value="">Select</option>
            <option value="Very Important">Very Important</option>
            <option value="Important">Important</option>
            <option value="Not Important">Not Important</option>
            <option value="No Preference">I don't have a preference</option>
          </select>
        </div>

        {/* Religion */}
        <div>
          <label className="block mb-2 font-medium">
            Which religion do you identify with?
          </label>
          <select
            value={form.religion}
            onChange={(e) => setForm({ ...form, religion: e.target.value })}
            className="w-full border rounded-md p-2"
          >
            <option value="">Select</option>
            <option value="Christianity">Christianity</option>
            <option value="African Spirituality">African Spirituality</option>
            <option value="Islam">Islam</option>
            <option value="Judaism">Judaism</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Buddhism">Buddhism</option>
            <option value="Atheist">Atheist</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Fixed Submit Button */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-md bg-black text-white hover:bg-gray-900 transition"
        >
          Submit Assessment
        </button>
      </footer>
    </div>
  );
}
