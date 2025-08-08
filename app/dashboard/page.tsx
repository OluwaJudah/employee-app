"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [assessment, setAssessment] = useState<number[]>([]);
  const [reminders, setReminders] = useState<string[]>([]);

  useEffect(() => {
    const u = localStorage.getItem("user");
    const a = localStorage.getItem("assessment");
    if (u) setUser(JSON.parse(u));
    if (a) setAssessment(JSON.parse(a));
    setReminders([
      "Upcoming session with counselor tomorrow at 10:00 AM.",
      "Don't forget to drink water and stretch today!",
      "Check-in with your mood journal this evening.",
    ]);
  }, []);

  const dismissReminder = (index: number) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
  };

  const averageScore = assessment.length
    ? assessment.reduce((sum, val) => sum + val, 0) / assessment.length
    : null;

  return (
    <main className="pb-16 p-4 space-y-4 min-h-screen bg-white text-black">
      <h2 className="text-2xl font-bold">Good afternoon{user ? `, ${user.name}` : ""}</h2>
      <p className="text-sm text-gray-700">3 of 3 sessions used</p>

      <div className="space-y-2">
        <button
          onClick={() => router.push("/appointments/book")}
          className="w-full border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
        >
          Book a Session
        </button>
        <button
          onClick={() => router.push("/dashboard/assessment/start")}
          className="w-full border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
        >
          Take Assessment
        </button>
        <button
          onClick={() => router.push("/webinars/join")}
          className="w-full border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
        >
          Join a Webinar
        </button>
      </div>

      {averageScore !== null && (
        <section className="border border-black p-3 rounded-md text-sm space-y-1">
          <p className="text-lg font-medium">Assessment Summary</p>
          <p>Average Score: {averageScore.toFixed(1)}</p>
          <p>
            Status:{" "}
            {averageScore < 2
              ? "Low Stress"
              : averageScore < 3
              ? "Moderate Stress"
              : "High Stress"}
          </p>
        </section>
      )}

      <section className="bg-gray-100 p-3 rounded-md text-sm text-black/80">
        Wellness Tip: Take short breaks to recharge and reset.
      </section>

      <section className="bg-gray-50 p-3 rounded-md space-y-2">
        <p className="text-sm font-semibold">Reminders</p>
        <ul className="space-y-1 text-sm text-black/80">
          {reminders.length === 0 && <li>No reminders</li>}
          {reminders.map((reminder, index) => (
            <li
              key={index}
              className="flex justify-between items-center border border-black/20 px-3 py-1 rounded-md"
            >
              <span>{reminder}</span>
              <button
                onClick={() => dismissReminder(index)}
                className="text-xs underline text-black/50 hover:text-black"
                aria-label="Dismiss reminder"
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      </section>

      <BottomNav />
    </main>
  );
}
