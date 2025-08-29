"use client";
import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import ManagerBottomNav from "@/components/ManagerBottomNav";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React from "react";

const employees = [
  {
    id: "1",
    name: "Jane Doe",
    role: "Nurse",
    department: "Healthcare",
    jobDescription: "Provide patient care and administer medication.",
    email: "jane@example.com",
    phone: "+27 123 456 7890",
  },
  {
    id: "2",
    name: "John Smith",
    role: "Midwife",
    department: "Maternity",
    jobDescription: "Assist mothers during childbirth and prenatal care.",
    email: "john@example.com",
    phone: "+27 234 567 8901",
  },
  {
    id: "3",
    name: "Mary Johnson",
    role: "Receptionist",
    department: "Administration",
    jobDescription: "Manage front desk and coordinate appointments.",
    email: "mary@example.com",
    phone: "+27 345 678 9012",
  },
  {
    id: "4",
    name: "David Nkosi",
    role: "Social Worker",
    department: "Wellness",
    jobDescription: "Provide social support and counseling services.",
    email: "david@example.com",
    phone: "+27 456 789 0123",
  },
  {
    id: "5",
    name: "Linda Moyo",
    role: "Psychologist",
    department: "Mental Health",
    jobDescription: "Conduct psychological assessments and therapy.",
    email: "linda@example.com",
    phone: "+27 567 890 1234",
  },
];

const Employee = ({ id }: { id: string }) => {
  const router = useRouter();
  const employee = employees.find((e) => e.id === id);
  if (!employee) return notFound();

  const handleBookSession = () => {
    // Pass employee ID or name as query param if needed
    router.push(`/appointments/book?employeeId=${employee.id}`);
  };

  return (
    <main className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">{employee.name}</h1>
      </div>

      <p className="text-gray-700">
        <strong>Role:</strong> {employee.role}
      </p>
      <p className="text-gray-700">
        <strong>Department:</strong> {employee.department}
      </p>
      <p className="text-gray-700">
        <strong>Job Description:</strong> {employee.jobDescription}
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong> {employee.email}
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> {employee.phone}
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> {employee.phone}
      </p>
      <p className="text-gray-700">
        <strong>Attended Session:</strong> 3
      </p>

      <ManagerBottomNav />
    </main>
  );
};

export default Employee;
