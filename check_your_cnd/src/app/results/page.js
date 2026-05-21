import { RiskResults } from "@/components/results/RiskResults";
import { clusterUser } from "@/lib/riskModel";

export const metadata = {
  title: "Risk Results | HealthCheck",
};

function getParam(params, key, fallback = "") {
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0] ?? fallback;
  }

  return value ?? fallback;
}

export default async function ResultsPage({ searchParams }) {
  const params = await searchParams;
  const result = clusterUser({
    age: getParam(params, "age"),
    gender: getParam(params, "gender", "Unknown"),
    weight: getParam(params, "weight", "71"),
    height: getParam(params, "height", "170"),
    systolic: getParam(params, "systolic", "120"),
    diastolic: getParam(params, "diastolic", "80"),
    cholesterol: getParam(params, "cholesterol"),
    glucose: getParam(params, "glucose"),
    activityLevel: getParam(params, "activityLevel", "Sedentary"),
    dietType: getParam(params, "dietType", "Average"),
    smokingStatus: getParam(params, "smokingStatus", "Unknown"),
  });

  return <RiskResults result={result} retakeHref="/assessment" />;
}
