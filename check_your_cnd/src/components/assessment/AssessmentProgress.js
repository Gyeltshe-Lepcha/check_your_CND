export function AssessmentProgress({ value = 29 }) {
  return (
    <section className="mx-auto mt-[43px] max-w-[960px] px-5 sm:px-8">
      <div className="mb-3 flex items-center justify-between gap-4 text-[18px] font-semibold text-[#061633]">
        <span>Assessment Progress</span>
        <span className="font-medium text-blue-600">{value}%</span>
      </div>
      <div className="h-[10px] overflow-hidden rounded-full bg-[#edf2f8]">
        <div className="h-full bg-blue-500" style={{ width: `${value}%` }} />
      </div>
    </section>
  );
}
