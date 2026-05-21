export function RangeInput({ label, name, min, max, value, unit, onChange }) {
  const inputId = name || label;
  const numericValue = Number(value);
  const safeValue = Number.isFinite(numericValue)
    ? Math.min(Math.max(numericValue, min), max)
    : min;
  const percent = ((safeValue - min) / (max - min)) * 100;
  const clampAndCommit = () => onChange(safeValue);

  return (
    <div>
      <div className="mb-[26px] flex items-center justify-between gap-4">
        <label className="text-[18px] font-semibold text-[#061633]" htmlFor={inputId}>
          {label}
        </label>
        <div className="flex items-center gap-3">
          <input
            id={inputId}
            name={name}
            className="h-[54px] w-[100px] rounded-[16px] border-2 border-[#dce6f2] bg-white px-4 text-center text-[21px] font-bold text-blue-500 outline-none transition focus:border-blue-400"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min={min}
            max={max}
            value={value}
            onBlur={clampAndCommit}
            onChange={(event) => {
              const nextValue = event.target.value;
              if (/^\d*$/.test(nextValue)) {
                onChange(nextValue);
              }
            }}
          />
          <span className="text-[18px] text-[#596d8f]">{unit}</span>
        </div>
      </div>
      <input
        id={`${inputId}-slider`}
        className="assessment-range"
        type="range"
        min={min}
        max={max}
        value={safeValue}
        onChange={(event) => onChange(Number(event.target.value))}
        onWheel={(event) => event.currentTarget.blur()}
        style={{ "--range-progress": `${percent}%` }}
        aria-label={label}
      />
      <div className="mt-3 flex justify-between text-[16px] text-[#596d8f]">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
