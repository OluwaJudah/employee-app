"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const employees = [
  {
    id: "1",
    name: "Jane Doe",
    role: "Nurse",
    department: "Healthcare",
    jobDescription: "Provide patient care and administer medication.",
    sessionsAttended: 3,
  },
  {
    id: "2",
    name: "John Smith",
    role: "Midwife",
    department: "Maternity",
    jobDescription: "Assist mothers during childbirth and prenatal care.",
    sessionsAttended: 2,
  },
  {
    id: "3",
    name: "Mary Johnson",
    role: "Receptionist",
    department: "Administration",
    jobDescription: "Manage front desk and coordinate appointments.",
    sessionsAttended: 0,
  },
  {
    id: "4",
    name: "David Nkosi",
    role: "Social Worker",
    department: "Wellness",
    jobDescription: "Provide social support and counseling services.",
    sessionsAttended: 4,
  },
  {
    id: "5",
    name: "Linda Moyo",
    role: "Psychologist",
    department: "Mental Health",
    jobDescription: "Conduct psychological assessments and therapy.",
    sessionsAttended: 1,
  },
];

export default function EmployeeManagementPage() {
  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton url="/menu" />
        <h1 className="text-xl font-bold">Manage Employees</h1>
      </div>

      <ul className="space-y-4">
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link
              href={`/employees/${employee.id}`}
              className="flex items-center justify-between border rounded-md p-4"
            >
              <div className="space-y-1">
                <h2 className="font-semibold text-lg">{employee.name}</h2>
                <p className="text-sm text-gray-600">
                  {employee.role} – {employee.department}
                </p>
                <p className="text-sm text-gray-800">
                  {employee.sessionsAttended} Session
                  {employee.sessionsAttended !== 1 && "s"} Attended
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
