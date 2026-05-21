import { summaryItems } from "@/data/results";

export function SummaryCard({ result }) {
  return (
    <div>
      <h2 className="text-[28px] font-black text-[#061633]">Health Summary</h2>
      <p className="mt-2 text-[18px] text-[#596d8f]">
        Based on your submitted health information
      </p>

      <div className="mt-[27px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-3">
        {summaryItems.map((item) => {
          const Icon = item.icon;
          const value =
            item.key === "bloodPressure"
              ? item.format(null, result.summary)
              : item.format(result.summary[item.key], result.summary);

          return (
            <div
              className="rounded-[18px] border border-[#dce6f2] bg-[#f8fafc] px-[18px] py-[15px]"
              key={item.key}
            >
              <div className="flex items-center gap-2 text-[16px] text-[#64789d]">
                <Icon className="size-5" />
                <span>{item.label}</span>
              </div>
              <p className="mt-2 text-[19px] font-black text-[#061633]">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
