// File: app/notifications/page.tsx

import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

const notifications = [
  {
    id: 1,
    message: "Your next session is tomorrow at 10:00 AM.",
    timestamp: "Just now",
  },
  {
    id: 2,
    message: "Don’t forget to take your wellness assessment.",
    timestamp: "2 days ago",
  },
  {
    id: 3,
    message: "New webinar available: Mindfulness for Beginners.",
    timestamp: "Last week",
  },
];

export default function NotificationsPage() {
  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <ul className="space-y-3">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="border p-4 rounded-md flex flex-col text-sm"
          >
            <span>{note.message}</span>
            <span className="text-xs text-gray-500 mt-1">{note.timestamp}</span>
          </li>
        ))}
      </ul>

      <BottomNav />
    </main>
  );
}
