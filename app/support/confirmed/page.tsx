"use client";

import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function CallBackConfirmedPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen pb-20 p-4 flex flex-col items-center justify-center text-center space-y-6">
      <h2 className="text-2xl font-semibold">Callback logged!!</h2>

      <p className="text-sm text-gray-600">
        Callback Request has been logged successfully. We will reach out to you
        soon.
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-6 bg-black text-white px-6 py-2 rounded-md"
      >
        Back to Home
      </button>

      <BottomNav />
    </main>
  );
}
