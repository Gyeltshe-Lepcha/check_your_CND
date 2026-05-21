export function OptionGroup({ label, name, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-[18px] text-[18px] font-semibold text-[#061633]">
        {label}
      </legend>
      <input type="hidden" name={name} value={value} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;
          const active = value === option.label;

          return (
            <button
              className={`min-h-[139px] rounded-[20px] border-2 bg-white px-5 py-5 text-center transition ${
                active
                  ? "border-blue-500 shadow-[0_12px_24px_rgba(59,130,246,0.14)]"
                  : "border-[#dce6f2] hover:border-blue-300"
              }`}
              key={option.label}
              type="button"
              onClick={() => onChange(option.label)}
            >
              <span
                className={`mx-auto grid size-[61px] place-items-center rounded-full ${
                  active ? "bg-blue-50 text-blue-500" : "bg-[#f0f4f9] text-[#6a7b93]"
                }`}
              >
                <Icon className="size-[31px]" />
              </span>
              <span className="mt-4 block text-[20px] font-semibold text-[#061633]">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
