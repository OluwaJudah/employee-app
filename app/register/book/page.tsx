"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function BookingPage() {
  const router = useRouter();
  const [attendanceType, setAttendanceType] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [language, setLanguage] = useState("");
  // const [dateTime, setDateTime] = useState("");
  const [newPractitioner, setNewPractitioner] = useState(true);

  const handleSubmit = () => {
    if (sessionType && language /* && dateTime */) {
      const bookingData = {
        sessionType,
        language,
        // dateTime,
        newPractitioner,
      };
      localStorage.setItem("booking", JSON.stringify(bookingData));

      router.push("/register/book/assessment");
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
        value={attendanceType}
        onChange={(e) => setAttendanceType(e.target.value)}
      >
        <option value="">Select Attendance Type</option>
        <option value="therapy">Individual</option>
        <option value="coaching">Group Session</option>
      </select>

      <select
        className="w-full border p-2 rounded"
        value={sessionType}
        onChange={(e) => setSessionType(e.target.value)}
      >
        <option value="">Select Session Type</option>
        <option value="therapy">Counselling</option>
        <option value="therapy">Trauma Debriefing</option>
        <option value="therapy">Medical</option>
        <option value="therapy">Financial</option>
      </select>

      <select
        className="w-full border p-2 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">Preferred Language</option>
        <option value="afrikaans">Afrikaans</option>
        <option value="english">English</option>
        <option value="isindebele">isiNdebele</option>
        <option value="isixhosa">isiXhosa</option>
        <option value="isizulu">isiZulu</option>
        <option value="sesotho">Sesotho</option>
        <option value="sepedi">Sepedi</option>
        <option value="setswana">Setswana</option>
        <option value="siswati">siSwati</option>
        <option value="tshivenda">Tshivenda</option>
        <option value="xitsonga">Xitsonga</option>{" "}
      </select>

      {/* <input
        type="datetime-local"
        className="w-full border p-2 rounded"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      /> */}

      {/* <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={newPractitioner}
          onChange={(e) => setNewPractitioner(e.target.checked)}
        />
        <span>Choose a new practitioner for this session</span>
      </label> */}

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded"
      >
        Submit
      </button>
    </main>
  );
}
