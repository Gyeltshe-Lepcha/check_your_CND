const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function HeartIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M20.8 4.6c-1.8-1.7-4.6-1.6-6.3.2L12 7.4 9.5 4.8C7.8 3 5 2.9 3.2 4.6 1.1 6.7 1.2 10 3.4 12.2L12 21l8.6-8.8c2.2-2.2 2.3-5.5.2-7.6Z" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M12 3 5.5 5.8v5.5c0 4.2 2.7 7.9 6.5 9.1 3.8-1.2 6.5-4.9 6.5-9.1V5.8L12 3Z" />
      <path d="M12 7v4" />
      <path d="M12 15h.01" />
    </svg>
  );
}

export function ActivityIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M3 12h4l2.6-7 4.8 14 2.3-7H21" />
    </svg>
  );
}

export function BrainIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M9 6a3 3 0 0 0-5.7 1.3A3 3 0 0 0 4 13v.5A3.5 3.5 0 0 0 9 16.7V6Z" />
      <path d="M15 6a3 3 0 0 1 5.7 1.3A3 3 0 0 1 20 13v.5a3.5 3.5 0 0 1-5 3.2V6Z" />
      <path d="M9 9H7.5" />
      <path d="M15 9h1.5" />
      <path d="M9 13H7.5" />
      <path d="M15 13h1.5" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function StethoscopeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M5 4v5a5 5 0 0 0 10 0V4" />
      <path d="M9 14v2a4 4 0 0 0 8 0v-1" />
      <circle cx="19" cy="13" r="2" />
      <path d="M5 4H4" />
      <path d="M15 4h1" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
      <path d="m9 11 2.2 2.2L22 2.8" />
    </svg>
  );
}

export function LeafIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M20 4c-7.5.2-13 3.8-14.8 9.6-1 3.1.5 5.9 3.4 6.6 5.8 1.4 10.5-5.8 11.4-16.2Z" />
      <path d="M4 20c3.1-5.2 7.2-8.2 12.4-9.2" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function UserIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

export function ScaleIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M12 4v16" />
      <path d="M5 8h14" />
      <path d="m6 8-3 7h6L6 8Z" />
      <path d="m18 8-3 7h6l-3-7Z" />
    </svg>
  );
}

export function GaugeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M5 17a7 7 0 1 1 14 0" />
      <path d="m12 17 4-5" />
      <path d="M8 17h8" />
    </svg>
  );
}

export function StandingIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <circle cx="12" cy="5" r="1.5" />
      <path d="M12 8v6" />
      <path d="M8 10h8" />
      <path d="m12 14-4 6" />
      <path d="m12 14 4 6" />
    </svg>
  );
}

export function FootstepsIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M8.5 14.5c1.6.4 2.9 2.2 2.4 4.2-.3 1.4-1.5 2.2-2.9 1.9-1.6-.4-2.5-1.8-2.1-3.3.4-1.7 1.1-3.1 2.6-2.8Z" />
      <path d="M8.5 11.2c.5-2.7.8-5.4 2.8-5 1.7.3 1.8 2.3 1.3 4.6-.6 2.7-1.7 3-2.8 2.8-1.1-.2-1.6-.9-1.3-2.4Z" />
      <path d="M16.2 3.7c1.7-.2 2.3 1.6 2.5 3.9.2 2.8-.8 3.4-1.9 3.5-1.1.1-1.8-.4-2-2-.3-2.7-.5-5.2 1.4-5.4Z" />
      <path d="M15.3 14.6c1.6-.5 3.3.7 3.9 2.6.4 1.4-.3 2.7-1.6 3.1-1.5.5-3-.3-3.4-1.8-.5-1.7-.3-3.4 1.1-3.9Z" />
    </svg>
  );
}

export function BicycleIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M8.5 17h3.5l3-6 3 6" />
      <path d="m9 9 3 8" />
      <path d="M11 9h4" />
      <path d="M14 6h2" />
      <path d="M10 6h.01" />
    </svg>
  );
}

export function SaladIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M4 12h16l-1.5 5.5A3.2 3.2 0 0 1 15.4 20H8.6a3.2 3.2 0 0 1-3.1-2.5L4 12Z" />
      <path d="M8 12c-1.3-1.3-.4-3.5 1.5-3.5.7 0 1.3.3 1.7.8" />
      <path d="M12 12c-.6-2.5 2.5-4 4-2" />
      <path d="M7 9c.5-1.9 2.4-2.8 4-1.8" />
      <path d="M16 9c.4-1.5 1.7-2.3 3-1.7" />
    </svg>
  );
}

export function AppleIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M12 7c1.8-2.2 4.9-1.8 6.1.9 1.3 3 .2 9.7-3.5 11.4-1 .5-1.8-.2-2.6-.2s-1.6.7-2.6.2C5.7 17.6 4.6 10.9 5.9 7.9 7.1 5.2 10.2 4.8 12 7Z" />
      <path d="M12 7c.2-2.1 1.2-3.4 3-4" />
      <path d="M12 7c-.3-1.4-1.1-2.3-2.4-2.8" />
    </svg>
  );
}

export function PizzaIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M4 20 20 4c-5.4-.6-11.6 2-16 16Z" />
      <path d="M8.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M12.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M16 8c1.7 1.7 2.6 3.6 2.8 5.6" />
    </svg>
  );
}

export function DownloadIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function ShareIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.6 6.8-4.2" />
      <path d="m8.6 13.4 6.8 4.2" />
    </svg>
  );
}

export function RotateIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v6h6" />
    </svg>
  );
}

export function AlertIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <path d="m12 3 10 18H2L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function InfoIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...baseProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}
