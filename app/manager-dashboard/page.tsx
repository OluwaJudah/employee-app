"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  CalendarDays,
  Activity,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import ManagerBottomNav from "@/components/ManagerBottomNav";

export default function ManagerDashboard() {
  const [usage] = useState({
    counselling: 12,
    therapy: 8,
    trauma: 5,
    financial: 3,
    medical: 6,
  });

  const [employees] = useState(24);

  const totalSessions = Object.values(usage).reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col pb-20">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 p-4 border-b border-black flex justify-between items-center">
        <h1 className="text-xl font-semibold">Manager Dashboard</h1>
        <div className="text-sm">Welcome, Manager</div>
      </header>

      {/* Page Content (with padding for fixed header) */}
      <div className="pt-20 px-4 space-y-6">
        {/* Quick Stats */}
        <section className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-4 flex flex-col items-start">
            <Users className="w-5 h-5 mb-2" />
            <span className="text-lg font-semibold">{employees}</span>
            <p className="text-sm text-gray-600">Active Employees</p>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-start">
            <Activity className="w-5 h-5 mb-2" />
            <span className="text-lg font-semibold">{totalSessions}</span>
            <p className="text-sm text-gray-600">Total Sessions</p>
          </div>
        </section>

        {/* Create Referral Button */}
        <section>
          <Link
            href="/referrals/create"
            className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-lg py-3 font-medium"
          >
            <PlusCircle className="w-5 h-5" />
            Create Referral
          </Link>
        </section>

        {/* Usage Breakdown */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Usage by Category</h2>
          {Object.entries(usage).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <span className="capitalize">{key}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </section>

        {/* Recent Bookings */}
        <section className="space-y-3">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Referrals</h2>
            <Link href="/referrals" className="bg-black text-white border text-sm rounded-xl px-2 py-1">
              View all
            </Link>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="border rounded p-3 flex justify-between">
              <span>John Doe - Counselling</span>
              <span className="text-gray-600">Today 10:00</span>
            </li>
            <li className="border rounded p-3 flex justify-between">
              <span>Mary Smith - Therapy</span>
              <span className="text-gray-600">Yesterday</span>
            </li>
            <li className="border rounded p-3 flex justify-between">
              <span>James Brown - Medical</span>
              <span className="text-gray-600">Mon</span>
            </li>
          </ul>
        </section>
      </div>
      <ManagerBottomNav />
    </main>
  );
}
