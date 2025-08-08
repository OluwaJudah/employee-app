"use client";

import { useRouter } from "next/navigation";

const registeredWebinars = [
  {
    id: "webinar-1",
    title: "Managing Stress Effectively",
    date: "2025-08-10",
    time: "15:00",
    link: "https://zoom.us/stress-management",
  },
  {
    id: "webinar-2",
    title: "Nutrition for Mental Clarity",
    date: "2025-08-15",
    time: "13:00",
    link: "https://zoom.us/nutrition-clarity",
  },
];

export default function JoinWebinarPage() {
  const router = useRouter();

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Your Registered Webinars</h1>
      {registeredWebinars.length === 0 ? (
        <p className="text-sm text-gray-600">
          You haven't registered for any webinars yet.
        </p>
      ) : (
        <div className="space-y-4">
          {registeredWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="border rounded-md p-4 space-y-2 bg-white shadow-sm"
            >
              <h2 className="text-lg font-semibold">{webinar.title}</h2>
              <p className="text-sm text-gray-700">
                {webinar.date} at {webinar.time}
              </p>
              <a
                href={webinar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border rounded-md py-2 text-sm hover:bg-gray-100"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
