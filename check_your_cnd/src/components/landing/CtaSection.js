import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaSection() {
  return (
    <section className="bg-[#eef4fb] px-5 py-[80px] sm:px-8 lg:py-[128px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="relative overflow-hidden rounded-[28px] bg-blue-600 px-6 py-16 text-center text-white sm:px-10 lg:py-[62px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-[680px]">
            <h2 className="text-[33px] font-black leading-tight sm:text-[40px]">
              Take Control of Your Health Today
            </h2>
            <p className="mx-auto mt-[24px] max-w-[600px] text-[20px] leading-[1.5] text-white/95">
              Your assessment takes less than 2 minutes. No account. No data
              stored. Just clear, actionable insights.
            </p>
            <ButtonLink
              className="mt-[26px] min-h-[65px] min-w-[330px] rounded-[20px] px-8 text-[20px] max-sm:min-w-0 max-sm:w-full"
              href="#assessment"
              variant="inverse"
            >
              Start Free Assessment
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
