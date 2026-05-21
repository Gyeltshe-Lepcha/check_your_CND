import { HeartIcon } from "@/components/icons/Icons";

export function Brand({ footer = false }) {
  return (
    <a className="inline-flex items-center gap-3" href="#top" aria-label="HealthCheck home">
      <span
        className={`grid shrink-0 place-items-center rounded-full bg-blue-600 text-white ${
          footer ? "size-9" : "size-10"
        }`}
      >
        <HeartIcon className={footer ? "size-[19px]" : "size-[21px]"} />
      </span>
      <span className={`font-extrabold text-slate-950 ${footer ? "text-lg" : "text-base sm:text-lg"}`}>
        {footer ? "HealthCheck NCD Risk" : "HealthCheck"}
      </span>
    </a>
  );
}
