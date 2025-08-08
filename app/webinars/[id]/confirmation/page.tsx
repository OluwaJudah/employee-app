"use client";

import { useParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";

export default function WebinarConfirmationPage() {
  const params = useParams();
  const router = useRouter();
  const webinarId = params?.id;

  return (
    <main className="min-h-screen pb-20 p-4 flex flex-col items-center justify-center text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>

      <h2 className="text-2xl font-semibold">Registration Successful</h2>
      <p className="text-sm text-gray-600">
        You’ve successfully registered for the webinar. We’ve sent you an email
        with the details.
      </p>

      <button
        onClick={() => router.push("/webinars")}
        className="w-full bg-black text-white py-2 rounded mt-6"
      >
        Back to Webinars
      </button>

      <BottomNav />
    </main>
  );
}
