import AppointmentConfirm from "@/components/appointments/confirm/AppointmentConfirm";
import { Suspense } from "react";

export default function AppointmentConfirmPage() {
  return (
    <main className="min-h-screen p-4 pb-20 space-y-4">
      <Suspense>
        <AppointmentConfirm />
      </Suspense>
    </main>
  );
}
