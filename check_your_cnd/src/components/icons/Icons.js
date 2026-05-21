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
