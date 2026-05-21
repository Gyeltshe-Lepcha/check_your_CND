import modelArtifacts from "@/data/modelArtifacts.json";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const sigmoid = (value) => 1 / (1 + Math.exp(-value));
const clusterRiskScores = [95, 80, 25];

const bandMeta = {
  "Low Risk": {
    key: "low",
    label: "Low Risk",
    display: "LOW RISK",
    alert: "Your current profile shows fewer risk factors. Keep healthy habits consistent.",
    color: "#10b981",
    track: "#ecfdf5",
    scoreMin: 12,
    scoreMax: 39,
  },
  "Medium Risk": {
    key: "moderate",
    label: "Moderate Risk",
    display: "MODERATE RISK",
    alert: "Some risk factors detected - targeted lifestyle changes can help.",
    color: "#f59e0b",
    track: "#fff7ed",
    scoreMin: 40,
    scoreMax: 69,
  },
  "High Risk": {
    key: "high",
    label: "High Risk",
    display: "HIGH RISK",
    alert: "Multiple risk factors detected - medical guidance is recommended.",
    color: "#ef4444",
    track: "#fee2e2",
    scoreMin: 70,
    scoreMax: 95,
  },
};

function getBmiStatus(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function getAgeCategory(age) {
  if (age <= 24) return 1;
  if (age <= 29) return 2;
  if (age <= 34) return 3;
  if (age <= 39) return 4;
  if (age <= 44) return 5;
  if (age <= 49) return 6;
  if (age <= 54) return 7;
  if (age <= 59) return 8;
  if (age <= 64) return 9;
  if (age <= 69) return 10;
  if (age <= 74) return 11;
  if (age <= 79) return 12;
  return 13;
}

function getGeneralHealth({ bmi, systolic, diastolic, activityLevel, dietType }) {
  let score = 2;

  if (bmi >= 30) score += 1;
  if (systolic >= 140 || diastolic >= 90) score += 1;
  if (activityLevel === "Sedentary") score += 1;
  if (dietType === "Unhealthy") score += 1;
  if (dietType === "Healthy" && activityLevel === "Active" && bmi < 25) score -= 1;

  return clamp(score, 1, 5);
}

function buildFeatureMap(input) {
  const age = Number(input.age) || 42;
  const weight = Number(input.weight) || 71;
  const height = Number(input.height) || 170;
  const systolic = Number(input.systolic) || 120;
  const diastolic = Number(input.diastolic) || 80;
  const activityLevel = input.activityLevel || "Sedentary";
  const dietType = input.dietType || "Average";
  const heightMeters = height / 100;
  const bmi = Number((weight / (heightMeters * heightMeters)).toFixed(1));

  const features = {
    HighBP: systolic >= 130 || diastolic >= 80 ? 1 : 0,
    HighChol: null,
    CholCheck: 1,
    BMI: bmi,
    Smoker: null,
    Stroke: null,
    HeartDiseaseorAttack: null,
    PhysActivity: activityLevel === "Sedentary" ? 0 : 1,
    Fruits: dietType === "Unhealthy" ? 0 : 1,
    Veggies: dietType === "Healthy" ? 1 : dietType === "Average" ? 1 : 0,
    HvyAlcoholConsump: 0,
    AnyHealthcare: 1,
    NoDocbcCost: 0,
    GenHlth: getGeneralHealth({ bmi, systolic, diastolic, activityLevel, dietType }),
    MentHlth: null,
    PhysHlth: null,
    DiffWalk: bmi >= 35 ? 1 : 0,
    Sex: null,
    Age: getAgeCategory(age),
    Education: null,
    Income: null,
  };

  return {
    values: modelArtifacts.columns.map((column) => features[column]),
    summary: {
      age,
      weight,
      height,
      systolic,
      diastolic,
      activityLevel,
      dietType: dietType === "Average" ? "Mixed" : dietType,
    },
    bmi,
  };
}

function impute(values, statistics) {
  return values.map((value, index) =>
    Number.isFinite(value) ? value : statistics[index],
  );
}

function scale(values, mean, scaleValue) {
  return values.map((value, index) => (value - mean[index]) / scaleValue[index]);
}

function nearestCluster(selectedValues) {
  let bestCluster = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  const distances = [];

  modelArtifacts.kmeans.clusterCenters.forEach((center, cluster) => {
    const distance = center.reduce((sum, value, index) => {
      const delta = selectedValues[index] - value;
      return sum + delta * delta;
    }, 0);
    distances.push(distance);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestCluster = cluster;
    }
  });

  return { cluster: bestCluster, distances };
}

function predictCluster(values) {
  const imputed = impute(values, modelArtifacts.kmeans.imputerStatistics);
  const scaled = scale(
    imputed,
    modelArtifacts.kmeans.scalerMean,
    modelArtifacts.kmeans.scalerScale,
  );
  const selected = modelArtifacts.kmeans.selectedIndices.map((index) => scaled[index]);

  return nearestCluster(selected);
}

function getDistanceRiskScore(distances) {
  const temperature = 6;
  const weights = distances.map((distance) => Math.exp(-distance / temperature));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  return weights.reduce(
    (sum, weight, index) =>
      sum + (weight / totalWeight) * clusterRiskScores[index],
    0,
  );
}

function predictDiabetesProbability(values) {
  const imputed = impute(values, modelArtifacts.classifier.imputerStatistics);
  const scaled = scale(
    imputed,
    modelArtifacts.classifier.scalerMean,
    modelArtifacts.classifier.scalerScale,
  );
  const linear = scaled.reduce(
    (sum, value, index) => sum + value * modelArtifacts.classifier.coef[index],
    modelArtifacts.classifier.intercept,
  );

  return sigmoid(linear);
}

function applyClinicalGuardrails({ band, bmi, riskScore, systolic, diastolic }) {
  let adjustedBand = band;
  let adjustedRiskScore = riskScore;
  let reason = null;

  if (bmi >= 30) {
    adjustedBand = bandMeta["High Risk"];
    adjustedRiskScore = Math.max(
      adjustedRiskScore,
      72 + Math.round((bmi - 30) * 2),
    );
    reason = "BMI is in the obese range";
  }

  if (systolic >= 140 || diastolic >= 90) {
    adjustedBand = bandMeta["High Risk"];
    adjustedRiskScore = Math.max(adjustedRiskScore, 76);
    reason = reason
      ? `${reason} and blood pressure is elevated`
      : "Blood pressure is elevated";
  }

  return {
    band: adjustedBand,
    riskScore: clamp(adjustedRiskScore, adjustedBand.scoreMin, adjustedBand.scoreMax),
    reason,
  };
}

export function clusterUser(input) {
  const { values, summary, bmi } = buildFeatureMap(input);
  const { cluster, distances } = predictCluster(values);
  const learnedClusterName = modelArtifacts.clusterNames[String(cluster)] || "Medium Risk";
  const band = bandMeta[learnedClusterName] || bandMeta["Medium Risk"];
  const diabetesProbability = predictDiabetesProbability(values);
  const distanceRiskScore = getDistanceRiskScore(distances);
  const bandPosition = clamp(
    distanceRiskScore * 0.0065 + diabetesProbability * 0.35,
    0,
    1,
  );
  const modelRiskScore = Math.round(
    band.scoreMin + bandPosition * (band.scoreMax - band.scoreMin),
  );
  const adjusted = applyClinicalGuardrails({
    band,
    bmi,
    riskScore: modelRiskScore,
    systolic: summary.systolic,
    diastolic: summary.diastolic,
  });

  return {
    band: adjusted.band,
    riskScore: adjusted.riskScore,
    model: {
      cluster,
      learnedClusterName,
      modelRiskScore,
      clinicalAdjustment: adjusted.reason,
      distanceRiskScore: Number(distanceRiskScore.toFixed(1)),
      diabetesProbability: Number(diabetesProbability.toFixed(3)),
      source: modelArtifacts.source,
    },
    bmi: {
      value: bmi,
      status: getBmiStatus(bmi),
    },
    summary,
  };
}
