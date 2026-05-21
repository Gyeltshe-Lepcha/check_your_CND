import { ArrowRightIcon } from "@/components/icons/Icons";

export function ButtonLink({
  children,
  href = "/assessment",
  variant = "primary",
  size = "large",
  className = "",
  showIcon = true,
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.28)] hover:bg-blue-700",
    secondary:
      "border border-blue-100 bg-white text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-blue-200 hover:bg-slate-50",
    inverse:
      "bg-white text-blue-700 shadow-[0_8px_16px_rgba(15,23,42,0.12)] hover:bg-blue-50",
  };
  const sizes = {
    large: "min-h-16 rounded-[18px] px-9 text-xl",
    nav: "min-h-11 rounded-[22px] px-5 text-base",
  };

  return (
    <a
      className={`inline-flex items-center justify-center gap-3 font-extrabold transition ${sizes[size]} ${variants[variant]} ${className}`}
      href={href}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRightIcon className="size-5 shrink-0" /> : null}
    </a>
  );
}
