import {
  ActivityIcon,
  BrainIcon,
  HeartIcon,
  LeafIcon,
  ShieldIcon,
  StethoscopeIcon,
} from "@/components/icons/Icons";

export const stats = [
  {
    value: "< 2 min",
    label: "Assessment Time",
  },
  {
    value: "7 key",
    label: "Risk Factors",
  },
  {
    value: "None",
    label: "Data Stored",
  },
];

export const riskMetrics = [
  {
    label: "Cardiovascular",
    value: "28%",
    colorClass: "bg-blue-600",
    width: "56%",
    textClass: "text-blue-700",
  },
  {
    label: "Metabolic",
    value: "15%",
    colorClass: "bg-emerald-500",
    width: "31%",
    textClass: "text-emerald-600",
  },
  {
    label: "Respiratory",
    value: "9%",
    colorClass: "bg-amber-500",
    width: "18%",
    textClass: "text-amber-500",
  },
];

export const diseaseCards = [
  {
    icon: HeartIcon,
    tintClass: "bg-rose-50 text-red-500",
    title: "Cardiovascular Disease",
    body: "Heart attacks and strokes are the leading NCDs globally. Blood pressure, weight, and inactivity are key modifiable risk factors.",
  },
  {
    icon: ActivityIcon,
    tintClass: "bg-amber-50 text-orange-400",
    title: "Type 2 Diabetes",
    body: "Lifestyle factors including poor diet and physical inactivity strongly predict the onset of type 2 diabetes across all age groups.",
  },
  {
    icon: StethoscopeIcon,
    tintClass: "bg-sky-50 text-blue-600",
    title: "Chronic Respiratory",
    body: "Conditions like COPD and asthma are linked to lifestyle choices and environmental exposure - and can be managed with early action.",
  },
];

export const faqItems = [
  {
    question: "What are Non-Communicable Diseases (NCDs)?",
    answer:
      "NCDs are long-term conditions such as cardiovascular disease, diabetes, chronic respiratory disease, and some cancers. They are usually influenced by lifestyle, environment, and biological risk factors.",
  },
  {
    question: "How accurate is this risk assessment?",
    answer:
      "This tool is designed for awareness and education. It uses common clinical risk factors to estimate relative risk, but it is not a diagnosis or a replacement for medical advice.",
  },
  {
    question: "What does Blood Pressure (BP) mean?",
    answer:
      "Blood pressure measures the force of blood against artery walls. High readings can raise the risk of heart disease and stroke, especially when combined with other risk factors.",
  },
  {
    question: "Can I lower my risk score over time?",
    answer:
      "Yes. Regular movement, balanced nutrition, better sleep, tobacco avoidance, and routine checkups can improve many modifiable risk factors over time.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "No. The assessment is built to work without an account and does not store or share your answers.",
  },
];

export const trustBadges = [
  {
    icon: ShieldIcon,
    text: "No login required - 100% private",
  },
  {
    icon: BrainIcon,
    text: "AI-Powered",
  },
  {
    icon: LeafIcon,
    text: "Personalized Tips",
  },
];
