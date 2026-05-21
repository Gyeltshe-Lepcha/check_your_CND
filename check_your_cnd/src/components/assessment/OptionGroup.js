export function OptionGroup({ label, name, options, defaultValue }) {
  return (
    <fieldset>
      <legend className="mb-[18px] text-[18px] font-semibold text-[#061633]">
        {label}
      </legend>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;
          const optionId = `${name}-${option.label.replace(/\s+/g, "-").toLowerCase()}`;
          const isDefault = defaultValue === option.label;

          return (
            <label
              className="option-card relative block min-h-[139px] cursor-pointer rounded-[20px] border-2 border-[#dce6f2] bg-white px-5 py-5 text-center transition hover:border-blue-300 focus-within:border-blue-500"
              htmlFor={optionId}
              key={option.label}
            >
              <input
                id={optionId}
                name={name}
                className="absolute right-4 top-4 size-5 cursor-pointer accent-blue-500"
                type="radio"
                value={option.label}
                defaultChecked={isDefault}
              />
              <span className="option-card-icon mx-auto grid size-[61px] place-items-center rounded-full bg-[#f0f4f9] text-[#6a7b93]">
                <Icon className="size-[31px]" />
              </span>
              <span className="mt-4 block text-[20px] font-semibold text-[#061633]">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
