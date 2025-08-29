"use client";

import BackButton from "@/components/BackButton";
import ManagerBottomNav from "@/components/ManagerBottomNav";
import { notFound, useParams, useRouter } from "next/navigation";
import { useState } from "react";

const employees = [
  {
    id: "E001",
    name: "Jane Doe",
    role: "Nurse",
    department: "Healthcare",
    jobDescription: "Provide patient care and administer medication.",
    email: "jane@example.com",
    phone: "+27 123 456 7890",
  },
  {
    id: "E002",
    name: "John Smith",
    role: "Midwife",
    department: "Maternity",
    jobDescription: "Assist mothers during childbirth and prenatal care.",
    email: "john@example.com",
    phone: "+27 234 567 8901",
  },
  {
    id: "E003",
    name: "Mary Johnson",
    role: "Receptionist",
    department: "Administration",
    jobDescription: "Manage front desk and coordinate appointments.",
    email: "mary@example.com",
    phone: "+27 345 678 9012",
  },
  {
    id: "E004",
    name: "David Nkosi",
    role: "Social Worker",
    department: "Wellness",
    jobDescription: "Provide social support and counseling services.",
    email: "david@example.com",
    phone: "+27 456 789 0123",
  },
  {
    id: "E005",
    name: "Linda Moyo",
    role: "Psychologist",
    department: "Mental Health",
    jobDescription: "Conduct psychological assessments and therapy.",
    email: "linda@example.com",
    phone: "+27 567 890 1234",
  },
];

export default function ReferralDetails() {
  const { id } = useParams();
  const router = useRouter();
  const employee = employees.find((e) => e.id === id);
  const [sessionType, setSessionType] = useState("");
  const [notes, setNotes] = useState("");

  if (!employee) return notFound();

  const handleRefer = () => {
    if (!sessionType) {
      alert("Please select a session type before submitting.");
      return;
    }

    const newReferral = {
      id: Date.now().toString(),
      employeeId: employee.id,
      employeeName: employee.name,
      department: employee.department,
      sessionType,
      notes,
      date: new Date().toISOString(),
    };

    // Load existing referrals from localStorage
    const existing = JSON.parse(localStorage.getItem("referrals") || "[]");

    // Save new referral
    localStorage.setItem(
      "referrals",
      JSON.stringify([...existing, newReferral])
    );

    console.log("Referral saved:", newReferral);

    // Navigate to confirmation page
    router.push("/referrals/confirmation");
  };

  return (
    <main className="p-4 space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center gap-2 sticky top-0 bg-white py-2">
        <BackButton />
        <h1 className="text-xl font-bold">Refer {employee.name}</h1>
      </div>

      {/* Employee Details */}
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>
      </div>

      {/* Referral Form */}
      <div className="space-y-3">
        <label className="block text-sm font-medium">
          Session Type
          <select
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            className="mt-1 block w-full border border-gray-400 rounded-md p-2"
          >
            <option value="">Select a session type</option>
            <option value="counseling">Counseling</option>
            <option value="wellness">Wellness Support</option>
            <option value="medical">Medical Check</option>
            <option value="therapy">Therapy Session</option>
          </select>
        </label>

        <label className="block text-sm font-medium">
          Additional Notes
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full border border-gray-400 rounded-md p-2"
            rows={4}
            placeholder="Enter any notes for this referral..."
          />
        </label>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-600 mt-4">
        <strong>Disclaimer:</strong> When you refer this employee, they will be
        notified. You will not have access to any session reports or
        discussions. The employee will be informed that you initiated the
        referral.
      </p>

      {/* Refer Button */}
      <button
        onClick={handleRefer}
        className="w-full bg-black text-white py-3 rounded-md mt-4"
      >
        Refer Employee
      </button>

      <ManagerBottomNav />
    </main>
  );
}
