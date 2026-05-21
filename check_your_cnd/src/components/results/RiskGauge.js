export function RiskGauge({ score, band }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="risk-gauge"
        style={{
          "--risk-score": `${score}%`,
          "--risk-color": band.color,
          "--risk-track": band.track,
        }}
      >
        <div className="risk-gauge-inner">
          <strong className="text-[58px] font-medium leading-none text-amber-500">
            {score}
            <span className="text-[24px]">%</span>
          </strong>
          <span className="mt-3 text-[16px] font-semibold text-orange-700">
            {band.display}
          </span>
        </div>
      </div>
    </div>
  );
}
