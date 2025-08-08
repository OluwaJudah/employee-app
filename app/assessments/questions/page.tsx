import { Suspense } from "react";
import AssessmentQuestions from "@/components/assessments/questions/AssessmentQuestions";

export default function AssessmentQuestionsPage() {
  return (
    <main className="min-h-screen p-4 pb-24 space-y-6">
      <Suspense>
        <AssessmentQuestions />
      </Suspense>
    </main>
  );
}
