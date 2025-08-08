import Webinar from "@/components/webinars/[id]/Webinar";

export default async function WebinarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <Webinar id={id} />;
}
