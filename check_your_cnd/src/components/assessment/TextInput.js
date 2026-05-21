export function TextInput({
  label,
  name,
  placeholder,
  min,
  max,
  required = false,
  value,
  onChange,
  type = "text",
}) {
  const inputId = name || label;
  const isNumeric = type === "number";

  return (
    <label className="block" htmlFor={inputId}>
      <span className="mb-3 block text-[18px] font-semibold text-[#061633]">{label}</span>
      <input
        id={inputId}
        name={name}
        className="h-16 w-full rounded-[20px] border-2 border-[#dce6f2] bg-white px-5 text-[20px] text-[#061633] outline-none transition placeholder:text-[#8a96a8] focus:border-blue-400"
        type={isNumeric ? "text" : type}
        inputMode={isNumeric ? "numeric" : undefined}
        pattern={isNumeric ? "[0-9]*" : undefined}
        min={min}
        max={max}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          const nextValue = event.target.value;
          if (!isNumeric || /^\d*$/.test(nextValue)) {
            onChange(nextValue);
          }
        }}
      />
    </label>
  );
}
