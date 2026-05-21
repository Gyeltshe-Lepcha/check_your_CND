import {
  ActivityIcon,
  AppleIcon,
  BicycleIcon,
  FootstepsIcon,
  GaugeIcon,
  SaladIcon,
  PizzaIcon,
  ScaleIcon,
  StandingIcon,
  UserIcon,
} from "@/components/icons/Icons";

export const assessmentSections = [
  {
    icon: UserIcon,
    title: "Personal Information",
    subtitle: "Basic details about you",
  },
  {
    icon: ScaleIcon,
    title: "Body Measurements",
    subtitle: "Your physical metrics",
  },
  {
    icon: GaugeIcon,
    title: "Health Information",
    subtitle: "Your vital measurements",
  },
  {
    icon: ActivityIcon,
    title: "Lifestyle Information",
    subtitle: "Your daily habits",
  },
];

export const activityOptions = [
  {
    label: "Sedentary",
    icon: StandingIcon,
  },
  {
    label: "Moderate",
    icon: FootstepsIcon,
  },
  {
    label: "Active",
    icon: BicycleIcon,
  },
];

export const dietOptions = [
  {
    label: "Healthy",
    icon: SaladIcon,
  },
  {
    label: "Average",
    icon: AppleIcon,
  },
  {
    label: "Unhealthy",
    icon: PizzaIcon,
  },
];
