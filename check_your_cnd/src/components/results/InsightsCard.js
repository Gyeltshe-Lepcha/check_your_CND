import { BrainIcon } from "@/components/icons/Icons";
import { insightItems } from "@/data/results";

const toneClasses = {
  amber: {
    card: "border-amber-300 bg-amber-50 text-orange-700",
    icon: "bg-amber-100 text-orange-500",
  },
  blue: {
    card: "border-blue-200 bg-blue-50 text-blue-700",
    icon: "bg-blue-100 text-blue-600",
  },
  green: {
    card: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: "bg-emerald-100 text-emerald-600",
  },
};

export function InsightsCard() {
  return (
    <article className="rounded-[20px] border border-[#dce6f2] bg-white p-[26px] shadow-[0_2px_8px_rgba(15,23,42,0.1)]">
      <div className="flex items-start gap-3">
        <span className="grid size-8 place-items-center rounded-full bg-blue-50 text-blue-600">
          <BrainIcon className="size-[18px]" />
        </span>
        <div>
          <h2 className="text-[20px] font-black text-[#061633]">AI Health Insights</h2>
          <p className="mt-2 text-[15px] text-[#64789d]">
            Personalized recommendations based on your profile
          </p>
        </div>
      </div>

      <div className="mt-[26px] grid grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-3">
        {insightItems.map((item) => {
          const Icon = item.icon;
          const tone = toneClasses[item.tone];

          return (
            <div
              className={`flex min-h-[111px] gap-4 rounded-[15px] border px-[20px] py-[22px] ${tone.card}`}
              key={item.title}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-[10px] ${tone.icon}`}>
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-6">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
