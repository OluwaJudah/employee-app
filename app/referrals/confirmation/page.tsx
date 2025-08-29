"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import ManagerBottomNav from "@/components/ManagerBottomNav";

export default function ReferralConfirmation() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Referral Submitted</h1>
        <p className="text-gray-600 mb-8">
          The employee has been successfully referred. They will be notified and
          guided to the appropriate session.
        </p>

        <div className="space-y-3 w-full max-w-sm">
          <Link
            href="/manager-dashboard"
            className="block w-full bg-black text-white py-2 rounded-md"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/employees"
            className="block w-full border border-black text-black py-2 rounded-md"
          >
            Refer Another Employee
          </Link>
          <Link
            href="/referrals"
            className="block w-full border border-black text-black py-2 rounded-md"
          >
            View Referrals
          </Link>
        </div>
      </main>

      {/* Bottom Navigation */}
      <ManagerBottomNav />
    </div>
  );
}
