export function FormSection({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="grid size-[51px] shrink-0 place-items-center rounded-[14px] bg-[#eaf2ff] text-blue-500">
        <Icon className="size-[26px]" />
      </div>
      <div>
        <h2 className="text-[27px] font-black leading-tight text-[#061633]">{title}</h2>
        <p className="mt-1 text-[18px] text-[#596d8f]">{subtitle}</p>
      </div>
    </div>
  );
}
