const tabs = [
  { key: "low", label: "Low Risk" },
  { key: "moderate", label: "Moderate Risk" },
  { key: "high", label: "High Risk" },
];

export function RiskTabs({ active }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => {
        const isActive = active === tab.key;

        return (
          <span
            className={`rounded-full border px-5 py-2 text-[16px] font-semibold ${
              isActive
                ? "border-amber-300 bg-amber-100 text-orange-700 shadow-[0_4px_10px_rgba(245,158,11,0.18)]"
                : "border-[#dce6f2] bg-white text-[#596d8f]"
            }`}
            key={tab.key}
          >
            {tab.label}
          </span>
        );
      })}
    </div>
  );
}
