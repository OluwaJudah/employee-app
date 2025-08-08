import { Suspense } from "react";
import AssessmentResults from "@/components/assessments/results/AssessmentResults";

export default function AssessmentResultsPage() {
  return (
    <main className="min-h-screen p-4 pb-24 bg-white text-black space-y-6">
      <Suspense>
        <AssessmentResults />
      </Suspense>
    </main>
  );
}
