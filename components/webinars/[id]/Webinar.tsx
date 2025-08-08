"use client";

import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const dummyWebinar = {
  id: "1",
  title: "Understanding Stress & Anxiety",
  date: "2025-08-20",
  time: "4:00 PM - 5:00 PM",
  description:
    "Join our expert psychologist as we explore the roots of stress and anxiety and learn practical coping strategies.",
  speaker: "Dr. Jane Doe",
};

export default function WebinarDetailPage({ id }: { id: string }) {
  const [webinar, setWebinar] = useState(dummyWebinar);

  useEffect(() => {
    // Simulate fetching webinar details
    // setWebinar(dummyWebinar);
  }, []);

  if (!webinar) return <p className="p-4">Loading...</p>;

  return (
    <main className="p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">{webinar.title}</h1>
      </div>
      <p className="text-sm text-gray-600">
        {webinar.date} at {webinar.time}
      </p>

      <div className="space-y-2">
        <p className="text-sm">{webinar.description}</p>
        <p className="text-sm font-medium">Speaker: {webinar.speaker}</p>
      </div>

      <Link
        href={`/webinars/${webinar.id}/register`}
        className="block w-full text-center bg-black text-white py-2 rounded"
      >
        Register
      </Link>
      <BottomNav />
    </main>
  );
}
