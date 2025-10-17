import React, { useState } from "react";

export const SidebarSection = () => {
  const [selectedFee, setSelectedFee] = useState("Low");

  const feeOptions = [
    { id: "low", label: "Low" },
    { id: "medium", label: "Medium" },
    { id: "high", label: "High" },
  ];

  return (
    <section
      className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]"
      aria-labelledby="fees-heading"
    >
      <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2
          id="fees-heading"
          className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap"
        >
          FEES
        </h2>
      </div>

      <div
        className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll"
        role="group"
        aria-label="Fee selection options"
      >
        {feeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedFee(option.label)}
            className={`flex h-[46px] items-center justify-center gap-2 px-6 py-3 relative flex-1 grow rounded-[1000px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] ${
              selectedFee === option.label ? "bg-[#0a17481a]" : ""
            }`}
            aria-pressed={selectedFee === option.label}
            type="button"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
