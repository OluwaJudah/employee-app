"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Practitioner {
  id: number;
  name: string;
  specialty: string;
  language: string;
}

export default function AppointmentConfirm() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get("name");
  const date = params.get("date");
  const time = params.get("time");

  const [sessionType, setSessionType] = useState("");
  const [language, setLanguage] = useState("");
  const [dateTime, setDateTime] = useState("");
  
  const [practitioner, setPractitioner] = useState<Practitioner | null>(null);

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("booking") || "{}");
    const practitionerData = JSON.parse(
      localStorage.getItem("selectedPractitioner") || "{}"
    );

    setSessionType(bookingData.sessionType || "");
    setLanguage(bookingData.language || "");
    setDateTime(bookingData.dateTime || "");
    setPractitioner(practitionerData || null);
  }, []);

  const handleConfirm = () => {
    // In a real app, you'd POST this data to an API.
    alert("Session booked successfully!");
    router.push("/appointments/confirmed");
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-center">
        Confirm Your Booking
      </h1>

      <div className="border rounded p-4 space-y-2 text-sm">
        <div>
          <strong>Session Type:</strong> {sessionType}
        </div>
        <div>
          <strong>Preferred Language:</strong> {language}
        </div>
        <div>
          <strong>Date & Time:</strong>{" "}
          {date ? new Date(date).toLocaleString() : ""}
        </div>
        {practitioner && (
          <>
            <div>
              <strong>Practitioner:</strong> {practitioner.name}
            </div>
            <div>
              <strong>Specialty:</strong> {practitioner.specialty}
            </div>
            <div>
              <strong>Languages:</strong> {practitioner.language}
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleConfirm}
        className="w-full bg-black text-white py-2 rounded"
      >
        Confirm & Book Session
      </button>

      <button
        onClick={() => router.back()}
        className="w-full text-sm underline text-center mt-2 text-gray-600"
      >
        Go Back & Edit
      </button>
    </>
  );
}
