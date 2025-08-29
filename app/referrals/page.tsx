"use client";
import ManagerBottomNav from "@/components/ManagerBottomNav";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

interface Referral {
  employeeId: string;
  sessionType: string;
  notes: string;
  date: string;
}

export default function ReferralsList() {
  const [referrals, setReferrals] = useState<Referral[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("referrals") || "[]");
    setReferrals(saved);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-10 p-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          <h1 className="text-xl font-bold">Referrals</h1>
        </div>{" "}
      </header>

      {/* Scrollable List */}
      <main className="flex-1 overflow-y-auto pt-20 px-4 pb-20 space-y-3">
        {referrals.length === 0 && (
          <p className="text-gray-600 text-center mt-10">
            No referrals submitted yet.
          </p>
        )}

        {referrals.map((r, index) => (
          <div
            key={index}
            className="border border-black rounded-lg p-4 space-y-1"
          >
            <p>
              <strong>Employee ID:</strong> {r.employeeId}
            </p>
            <p>
              <strong>Session Type:</strong> {r.sessionType}
            </p>
            <p>
              <strong>Notes:</strong> {r.notes || "None"}
            </p>
            <p className="text-xs text-gray-600">
              <strong>Date:</strong> {new Date(r.date).toLocaleString()}
            </p>
          </div>
        ))}
      </main>

      <ManagerBottomNav />
    </div>
  );
}
