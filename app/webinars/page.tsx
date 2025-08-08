"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";

export default function WebinarsPage() {
  const router = useRouter();

  // Placeholder webinar data
  const webinars = [
    {
      id: 1,
      title: "Managing Workplace Stress",
      date: "2025-08-20",
      time: "10:00 AM",
      description:
        "Learn techniques to handle stress effectively in the workplace.",
    },
    {
      id: 2,
      title: "Building Emotional Resilience",
      date: "2025-09-05",
      time: "2:00 PM",
      description:
        "Strategies to build your emotional strength and bounce back from challenges.",
    },
    {
      id: 3,
      title: "Coping with Grief and Trauma",
      date: "2025-09-15",
      time: "11:00 AM",
      description:
        "Support and guidance on dealing with grief and trauma in your life.",
    },
  ];

  return (
    <main className="p-4 pb-20 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold capitalize">Upcoming Webinars</h2>
      </div>

      {webinars.map((webinar) => (
        <div
          key={webinar.id}
          className="border rounded-md p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => router.push(`/webinars/${webinar.id}`)}
        >
          <h3 className="text-lg font-medium">{webinar.title}</h3>
          <p className="text-sm text-gray-700">
            {new Date(webinar.date).toDateString()} at {webinar.time}
          </p>
          <p className="mt-2 text-sm">{webinar.description}</p>
        </div>
      ))}

      <BottomNav />
    </main>
  );
}
