import { notFound } from "next/navigation";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const employees = [
  { id: "1", name: "Jane Doe" },
  { id: "2", name: "John Smith" },
  { id: "3", name: "Mary Johnson" },
  { id: "4", name: "David Nkosi" },
  { id: "5", name: "Linda Moyo" },
];

export default async function ReferConfirmation({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employee = employees.find((e) => e.id === id);
  if (!employee) return notFound();

  return (
    <main className="min-h-screen pb-20 p-4 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-xl font-bold">Referral Sent</h1>
      <p className="text-gray-700">
        You have successfully referred <strong>{employee.name}</strong> for a
        session.
      </p>
      <p className="text-sm text-gray-500">
        The employee will be notified and guided to book a wellness session.
      </p>

      <Link
        href="/employees"
        className="inline-block mt-6 bg-black text-white px-4 py-2 rounded-md"
      >
        Back to Employees
      </Link>
      <BottomNav />
    </main>
  );
}
