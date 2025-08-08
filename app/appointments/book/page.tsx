"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { PlusCircle } from "lucide-react";

export default function BookingPage() {
  const router = useRouter();
  const [sessionType, setSessionType] = useState("");
  const [language, setLanguage] = useState("");
  // const [dateTime, setDateTime] = useState("");
  const [newPractitioner, setNewPractitioner] = useState(false);

  const handleSubmit = () => {
    if (sessionType && language /* && dateTime */) {
      const bookingData = {
        sessionType,
        language,
        // dateTime,
        newPractitioner,
      };
      localStorage.setItem("booking", JSON.stringify(bookingData));

      if (newPractitioner) {
        router.push("/appointments/assessment");
      } else {
        router.push("/appointments/confirm");
      }
    } else {
      alert("Please complete all required fields.");
    }
  };

  return (
    <main className="min-h-screen pb-20 p-4 space-y-4">
      <div className="flex items-center gap-2">
        <PlusCircle className="w-5 h-5" />
        <h1 className="text-xl font-bold">Book a Session</h1>
      </div>
      <select
        className="w-full border p-2 rounded"
        value={sessionType}
        onChange={(e) => setSessionType(e.target.value)}
      >
        <option value="">Select Session Type</option>
        <option value="therapy">Therapy</option>
        <option value="coaching">Coaching</option>
        <option value="trauma">Trauma Debriefing</option>
      </select>

      <select
        className="w-full border p-2 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">Preferred Language</option>
        <option value="english">English</option>
        <option value="zulu">Zulu</option>
        <option value="xhosa">Xhosa</option>
      </select>

      {/* <input
        type="datetime-local"
        className="w-full border p-2 rounded"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      /> */}

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={newPractitioner}
          onChange={(e) => setNewPractitioner(e.target.checked)}
        />
        <span>Choose a new practitioner for this session</span>
      </label>

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded"
      >
        Confirm Booking
      </button>

      <BottomNav />
    </main>
  );
}
