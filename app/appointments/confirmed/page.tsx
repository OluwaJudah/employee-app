"use client";

import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function BookingConfirmedPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen pb-20 p-4 flex flex-col items-center justify-center text-center space-y-6">
      <h2 className="text-2xl font-semibold">Booking Confirmed 🎉</h2>

      <p className="text-sm text-gray-600">
        Your session has been successfully booked. You will receive a
        confirmation email and reminders closer to the session time.
      </p>

      <button
        onClick={() => router.push("/appointments")}
        className="mt-6 bg-black text-white px-6 py-2 rounded-md"
      >
        View My Appointments
      </button>

      <BottomNav />
    </main>
  );
}
