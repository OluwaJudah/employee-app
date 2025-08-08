import Employee from "@/components/employees/[id]/Employee";

export default async function EmployeeProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <Employee id={id} />;
}
