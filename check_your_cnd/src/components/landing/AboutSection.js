import { diseaseCards } from "@/data/landing";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white px-5 py-[98px] sm:px-8">
      <div className="mx-auto max-w-[1380px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mx-auto inline-flex rounded-full bg-[#e7f1ff] px-4 py-2 text-sm font-extrabold text-blue-700">
            About This Tool
          </p>
          <h2 className="mt-[17px] text-[38px] font-black leading-tight text-[#082150] sm:text-[48px]">
            Why NCD Risk Matters
          </h2>
          <p className="mx-auto mt-[13px] max-w-[740px] text-[21px] leading-[1.45] text-[#506a9c]">
            Non-communicable diseases account for 74% of global deaths. Early
            awareness empowers you to act.
          </p>
        </div>

        <div className="mt-[66px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {diseaseCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                className="min-h-[276px] rounded-[18px] border border-[#cfe1f6] bg-[#eef4fb] px-[30px] py-[30px]"
                key={card.title}
              >
                <div
                  className={`grid size-[55px] place-items-center rounded-full ${card.tintClass}`}
                >
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-[24px] text-[23px] font-black leading-tight text-[#071a3d]">
                  {card.title}
                </h3>
                <p className="mt-[24px] text-[18px] leading-[1.58] text-[#506a9c]">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
