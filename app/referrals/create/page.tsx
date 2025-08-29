"use client";

import BottomNav from "@/components/BottomNav";
import ManagerBottomNav from "@/components/ManagerBottomNav";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mockEmployees = [
  { id: "E001", name: "John Doe", department: "Finance" },
  { id: "E002", name: "Jane Smith", department: "HR" },
  { id: "E003", name: "Michael Brown", department: "IT" },
  { id: "E004", name: "Emily Davis", department: "Finance" },
  { id: "E005", name: "Chris Johnson", department: "Operations" },
  { id: "E006", name: "Olivia White", department: "Marketing" },
  { id: "E007", name: "Daniel Green", department: "Finance" },
  { id: "E008", name: "Sophia Turner", department: "HR" },
  { id: "E009", name: "James Wilson", department: "IT" },
  { id: "E010", name: "Ava Thompson", department: "Operations" },
  { id: "E011", name: "William Harris", department: "Marketing" },
  { id: "E012", name: "Mia Lewis", department: "Finance" },
  { id: "E013", name: "Ethan Walker", department: "HR" },
  { id: "E014", name: "Isabella Young", department: "IT" },
  { id: "E015", name: "Benjamin Scott", department: "Operations" },
];

export default function CreateReferral() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  const filteredEmployees = mockEmployees.filter((emp) => {
    const matchesSearch = emp.id.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department ? emp.department === department : true;
    return matchesSearch && matchesDept;
  });

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50 p-4">
        <h1 className="text-lg font-bold">Create Referral</h1>
      </header>

      {/* Fixed Filters */}
      <div className="fixed top-14 left-0 right-0 bg-white border-b border-black z-40 p-4 flex flex-col gap-2">
        <select
          className="flex-1 border border-black rounded-lg p-2"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Finance">Finance</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Operations">Operations</option>
          <option value="Marketing">Marketing</option>
        </select>
        <input
          type="text"
          placeholder="Search by Employee No."
          className="flex-1 border border-black rounded-lg p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Scrollable Employee List */}
      <div className="flex-1 overflow-y-auto pt-48 pb-26 px-4">
        <ul className="space-y-3">
          {filteredEmployees.map((emp) => (
            <li
              key={emp.id}
              onClick={() => router.push(`/referrals/${emp.id}`)}
              className="border border-black rounded-lg p-3 text-sm cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            >
              <div className="">
                <p className="font-semibold">{emp.name}</p>
                <p className="text-xs text-gray-700">
                  {emp.department} · {emp.id}
                </p>{" "}
              </div>
              <ChevronRight />
            </li>
          ))}
          {filteredEmployees.length === 0 && (
            <p className="text-sm text-gray-600">No employees found.</p>
          )}
        </ul>
      </div>
      <ManagerBottomNav />
    </main>
  );
}
