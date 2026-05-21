"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons/Icons";
import { faqItems } from "@/data/landing";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-[#eef4fb] px-5 py-[103px] sm:px-8">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center">
          <h2 className="text-[36px] font-black leading-tight text-[#082150] sm:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-[14px] text-[21px] text-[#506a9c]">
            Everything you need to know about this assessment tool.
          </p>
        </div>

        <div className="mt-[52px] space-y-[15px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="overflow-hidden rounded-[20px] border border-[#cfe1f6] bg-[#eef4fb]"
                key={item.question}
              >
                <button
                  className="flex min-h-[75px] w-full items-center justify-between gap-6 px-[26px] text-left text-[17px] font-extrabold text-[#02163b]"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDownIcon
                    className={`size-5 shrink-0 text-[#506a9c] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[26px] pb-6 text-[16px] leading-7 text-[#506a9c]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
