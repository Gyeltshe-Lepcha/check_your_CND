function getBmiPosition(value) {
  if (value < 18.5) return 18;
  if (value < 25) return 42;
  if (value < 30) return 64;
  return 88;
}

export function BmiCard({ bmi }) {
  return (
    <article className="rounded-[20px] border border-[#dce6f2] bg-white p-[26px] shadow-[0_2px_8px_rgba(15,23,42,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-black text-[#061633]">BMI Indicator</h2>
          <p className="mt-4 text-[16px] text-[#64789d]">{bmi.status}</p>
        </div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-[15px] font-black text-orange-400">
          {bmi.value}
        </span>
      </div>

      <div className="relative mt-[64px]">
        <span
          className="absolute -top-[45px] h-3 w-[3px] rounded-full bg-[#061633]"
          style={{ left: `${getBmiPosition(bmi.value)}%` }}
        />
        <div className="h-[13px] rounded-full bg-[linear-gradient(90deg,#93c5fd_0%,#facc15_48%,#fb923c_72%,#ef4444_100%)]" />
        <div className="mt-3 grid grid-cols-4 text-[13px] text-[#64789d]">
          <span>Under</span>
          <span className="text-center">Normal</span>
          <span className="text-center">Over</span>
          <span className="text-right">Obese</span>
        </div>
      </div>

      <div className="mt-[22px] grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-[17px] bg-[#f3f6fa] px-4 py-3">
          <p className="text-[13px] text-[#64789d]">Ideal BMI</p>
          <p className="mt-1 text-[16px] font-black">18.5-24.9</p>
        </div>
        <div className="rounded-[17px] bg-[#f3f6fa] px-4 py-3">
          <p className="text-[13px] text-[#64789d]">Your BMI</p>
          <p className="mt-1 text-[16px] font-black">
            {bmi.value} ({bmi.status})
          </p>
        </div>
      </div>
    </article>
  );
}
