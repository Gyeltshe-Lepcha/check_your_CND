import {
  ActivityIcon,
  AlertIcon,
  BrainIcon,
  GaugeIcon,
  HeartIcon,
  ScaleIcon,
  StethoscopeIcon,
  UserIcon,
} from "@/components/icons/Icons";

export const summaryItems = [
  {
    key: "age",
    label: "Age",
    icon: GaugeIcon,
    format: (value) => `${value} yrs`,
  },
  {
    key: "gender",
    label: "Gender",
    icon: UserIcon,
    format: (value) => value,
  },
  {
    key: "weight",
    label: "Weight",
    icon: ScaleIcon,
    format: (value) => `${value} kg`,
  },
  {
    key: "height",
    label: "Height",
    icon: ActivityIcon,
    format: (value) => `${value} cm`,
  },
  {
    key: "bloodPressure",
    label: "Blood Pressure",
    icon: HeartIcon,
    format: (_, summary) => `${summary.systolic}/${summary.diastolic}`,
  },
  {
    key: "cholesterol",
    label: "Cholesterol",
    icon: StethoscopeIcon,
    format: (value) => (value ? `${value} mg/dL` : "Not provided"),
  },
  {
    key: "glucose",
    label: "Glucose",
    icon: GaugeIcon,
    format: (value) => (value ? `${value} mg/dL` : "Not provided"),
  },
  {
    key: "activityLevel",
    label: "Activity Level",
    icon: ActivityIcon,
    format: (value) => value,
  },
  {
    key: "smokingStatus",
    label: "Smoking Status",
    icon: AlertIcon,
    format: (value) => value,
  },
  {
    key: "dietType",
    label: "Diet Type",
    icon: StethoscopeIcon,
    format: (value) => value,
  },
];

export const insightItems = [
  {
    title: "Increase Physical Activity",
    body: "Aim for at least 150 min of moderate aerobic exercise weekly.",
    icon: ActivityIcon,
    tone: "amber",
  },
  {
    title: "Improve Diet Quality",
    body: "Increase vegetables, whole grains, and lean protein intake daily.",
    icon: StethoscopeIcon,
    tone: "amber",
  },
  {
    title: "Reduce Sodium Intake",
    body: "Limit salt to less than 2,300mg per day to protect heart health.",
    icon: GaugeIcon,
    tone: "amber",
  },
  {
    title: "Monitor Blood Pressure",
    body: "Check BP at least twice weekly; target below 120/80 mmHg.",
    icon: StethoscopeIcon,
    tone: "blue",
  },
  {
    title: "Maintain Healthy Weight",
    body: "A 5-10% weight reduction can significantly lower NCD risk.",
    icon: ScaleIcon,
    tone: "green",
  },
  {
    title: "Manage Stress Levels",
    body: "Practice mindfulness or relaxation techniques 10 min/day.",
    icon: BrainIcon,
    tone: "blue",
  },
];
