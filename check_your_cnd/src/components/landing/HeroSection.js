import Image from "next/image";
import { ActivityIcon, CheckCircleIcon } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { riskMetrics, stats, trustBadges } from "@/data/landing";

function TrustBadge({ item, className = "" }) {
  const Icon = item.icon;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.14)] ${className}`}
    >
      <Icon className="size-[18px] text-blue-600" />
      <span>{item.text}</span>
    </div>
  );
}

function AssessmentPreview() {
  return (
    <div
      id="assessment"
      className="relative mx-auto w-full max-w-[560px] scroll-mt-24 lg:mt-[21px] lg:self-start"
    >
      <TrustBadge
        item={trustBadges[1]}
        className="absolute -right-5 -top-5 z-20 hidden rounded-[18px] px-4 py-4 lg:inline-flex"
      />
      <TrustBadge
        item={trustBadges[2]}
        className="absolute -bottom-5 -left-5 z-20 hidden rounded-[18px] px-4 py-4 lg:inline-flex"
      />

      <article className="rounded-[30px] border border-blue-100 bg-white p-[29px] shadow-[0_22px_42px_rgba(37,99,235,0.13)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid size-[50px] place-items-center rounded-full bg-[#e9f1fb] text-blue-600">
              <ActivityIcon className="size-7" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-950">
                Health Assessment
              </h2>
              <p className="mt-1 text-sm text-[#50668f]">NCD Risk Profile</p>
            </div>
          </div>
          <span className="size-[10px] rounded-full bg-emerald-400" />
        </div>

        <div className="relative h-[200px] overflow-hidden rounded-[18px] bg-blue-50">
          <Image
            src="/doctor-phone-hero.png"
            alt="Healthcare professional holding a phone"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 496px"
            className="object-cover"
          />
        </div>

        <div className="mt-[26px] grid grid-cols-1 gap-[14px] sm:grid-cols-3">
          {riskMetrics.map((metric) => (
            <div key={metric.label} className="rounded-[20px] bg-[#e7f0fb] px-4 py-[15px]">
              <p className="text-xs font-semibold text-[#294a7b]">{metric.label}</p>
              <p className={`mt-3 text-[23px] font-extrabold leading-none ${metric.textClass}`}>
                {metric.value}
              </p>
              <div className="mt-3 h-[7px] overflow-hidden rounded-full bg-[#cbe0f7]">
                <div
                  className={`h-full rounded-full ${metric.colorClass}`}
                  style={{ width: metric.width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[26px] flex items-center gap-3 rounded-[19px] border border-emerald-200 bg-emerald-50 px-4 py-[15px] text-[15px] font-extrabold text-emerald-700">
          <CheckCircleIcon className="size-6 shrink-0" />
          <span>Based on WHO clinical risk factor guidelines</span>
        </div>
      </article>
    </div>
  );
}

export function HeroSection() {
  const IntroBadgeIcon = trustBadges[0].icon;

  return (
    <section className="bg-[#eef4fb]">
      <div className="mx-auto grid min-h-[760px] w-full max-w-[1440px] grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-[106px] lg:py-20">
        <div className="max-w-[650px] lg:-mt-[14px]">
          <div className="mb-[42px] inline-flex items-center gap-2 rounded-full bg-[#e4f0ff] px-4 py-2 text-sm font-extrabold text-blue-700">
            <IntroBadgeIcon className="size-[17px]" />
            <span>{trustBadges[0].text}</span>
          </div>

          <h1 className="max-w-[690px] text-[46px] font-black leading-[1.04] tracking-normal text-[#0b1b3f] sm:text-[64px] lg:text-[76px]">
            <span className="lg:hidden">
              Check Your <span className="text-blue-600">NCD Risk</span> in
              Minutes
            </span>
            <span className="hidden lg:block">
              <span className="whitespace-nowrap">
                Check Your <span className="text-blue-600">NCD</span>
              </span>
              <br />
              <span>
                <span className="text-blue-600">Risk</span> in Minutes
              </span>
            </span>
          </h1>

          <p className="mt-[36px] max-w-[635px] text-[18px] leading-[1.5] text-[#506a9c] sm:text-[24px]">
            Assess your risk of non-communicable diseases using basic health
            information. Get personalized insights powered by clinical risk
            models - free, private, and instant.
          </p>

          <div className="mt-[40px] flex flex-col gap-5 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto">Start Free Assessment</ButtonLink>
            <ButtonLink
              className="w-full px-9 sm:w-auto"
              href="#about"
              variant="secondary"
              showIcon={false}
            >
              Learn More
            </ButtonLink>
          </div>

          <div className="mt-[48px] grid max-w-[420px] grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="whitespace-nowrap text-[26px] font-black leading-none text-[#0b1b3f] sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[14px] font-extrabold leading-tight text-[#506a9c]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <AssessmentPreview />
      </div>
    </section>
  );
}
