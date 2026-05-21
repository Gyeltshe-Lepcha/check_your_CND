"use client";

import { useState } from "react";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";
import { AssessmentHeader } from "@/components/assessment/AssessmentHeader";
import { AssessmentProgress } from "@/components/assessment/AssessmentProgress";
import { RiskResults } from "@/components/results/RiskResults";

export function AssessmentFlow() {
  const [result, setResult] = useState(null);

  if (result) {
    return <RiskResults result={result} onRetake={() => setResult(null)} />;
  }

  return (
    <main className="min-h-screen bg-[#eef4fb] pb-10 text-[#061633]">
      <AssessmentHeader />
      <AssessmentProgress />
      <div className="px-0 sm:px-8">
        <AssessmentForm onComplete={setResult} />
      </div>
      <p className="mx-auto mt-[32px] max-w-[960px] px-5 text-center text-[18px] leading-8 text-[#596d8f] sm:px-8">
        This assessment is for informational purposes only. Consult a healthcare
        professional for medical advice.
      </p>
    </main>
  );
}
