"use client";

import BottomNav from "@/components/BottomNav";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppointmentsPage() {
  const appointments = [
    {
      id: 1,
      date: "2025-08-14",
      time: "10:00 AM",
      type: "Counselling",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2025-08-21",
      time: "2:00 PM",
      type: "Follow-up",
      status: "Pending",
    },
  ];

  const router = useRouter();

  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        <h1 className="text-xl font-bold">My Appointments</h1>
      </div>
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="border px-4 py-2 rounded-md cursor-pointer"
          onClick={() => router.push(`/appointments/${appointment.id}`)}
        >
          <p className="text-sm">
            {appointment.type} - {appointment.date}, {appointment.time}
          </p>
          <p className="text-xs text-gray-500">{appointment.status}</p>
        </div>
      ))}

      <button
        onClick={() => router.push("/appointments/book")}
        className="w-full bg-black text-white py-2 rounded-md"
      >
        Book Session
      </button>

      <BottomNav />
    </main>
  );
}
