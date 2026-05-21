import { HeartIcon } from "@/components/icons/Icons";

export function AssessmentHeader() {
  return (
    <header className="mx-auto max-w-[960px] px-5 pt-[31px] text-center sm:px-8">
      <div className="mx-auto grid size-20 place-items-center rounded-[18px] bg-blue-500 text-white shadow-[0_12px_24px_rgba(59,130,246,0.28)]">
        <HeartIcon className="size-10" />
      </div>
      <h1 className="mt-5 text-[38px] font-black leading-tight text-[#081735] sm:text-[47px]">
        Check Your CND Risk
      </h1>
      <p className="mx-auto mt-3 max-w-[760px] text-[21px] leading-[1.45] text-[#596d8f] sm:text-[24px]">
        Complete the assessment to understand your cardiovascular risk
      </p>
    </header>
  );
}
