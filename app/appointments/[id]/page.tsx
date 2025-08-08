"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Appointment {
  id: string;
  type: string;
  date: string;
  time: string;
  status: string;
  notes?: string;
}

export default function AppointmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    // Simulate fetching appointment data — replace with real fetch in future
    const fetchedAppointment: Appointment = {
      id,
      type: "Counselling",
      date: "August 15, 2025",
      time: "3:00 PM",
      status: "Confirmed",
      notes:
        "You will meet with your assigned counselor via video call. Please be ready 5 minutes before your session.",
    };

    setAppointment(fetchedAppointment);
  }, [id]);

  if (!appointment) {
    return (
      <main className="p-4 flex items-center justify-center h-screen text-gray-500">
        Loading appointment...
      </main>
    );
  }

  return (
    <main className="p-4 pb-20 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold">Appointment Details</h2>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Type:</strong> {appointment.type}
        </p>
        <p>
          <strong>Date:</strong> {appointment.date}
        </p>
        <p>
          <strong>Time:</strong> {appointment.time}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-green-600">{appointment.status}</span>
        </p>
        {appointment.notes && (
          <p>
            <strong>Notes:</strong> {appointment.notes}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <button
          className="w-full border px-4 py-2 rounded-md"
          onClick={() => router.push(`/appointments/${id}/join`)}
        >
          Join Virtual Session
        </button>
        <button
          className="w-full border px-4 py-2 rounded-md text-red-600 border-red-600"
          onClick={() => alert("Cancel functionality coming soon")}
        >
          Cancel Appointment
        </button>
        <button
          className="w-full border px-4 py-2 rounded-md"
          onClick={() => alert("Reschedule functionality coming soon")}
        >
          Reschedule
        </button>
      </div>

      <BottomNav />
    </main>
  );
}
