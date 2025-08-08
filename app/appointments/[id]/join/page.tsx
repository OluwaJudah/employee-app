
"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { useParams, useRouter } from "next/navigation";

export default function VirtualSessionPage() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold">Virtual Session</h2>
      </div>

      {/* Placeholder for video chat */}
      <div className="w-full aspect-video bg-black rounded-md flex items-center justify-center text-white">
        <p>🔒 Secure Video Chat (Coming Soon)</p>
      </div>

      {/* Timer */}
      <div className="text-sm text-center text-gray-600">
        Session started at 3:00 PM
      </div>

      {/* Shared Resources */}
      <div className="space-y-2">
        <h3 className="font-semibold">Shared Resources</h3>
        <div className="space-y-1 text-sm">
          <button className="underline">Download Session Notes.pdf</button>
          <input type="file" className="text-sm" />
        </div>
      </div>

      {/* End Session & Feedback */}
      <div className="space-y-2">
        <button
          onClick={() => router.push("/appointments")}
          className="w-full border border-red-500 text-red-500 py-2 rounded-md"
        >
          End Session
        </button>
        <button className="w-full bg-black text-white py-2 rounded-md">
          Leave Feedback
        </button>
      </div>

      <BottomNav />
    </main>
  );
}
