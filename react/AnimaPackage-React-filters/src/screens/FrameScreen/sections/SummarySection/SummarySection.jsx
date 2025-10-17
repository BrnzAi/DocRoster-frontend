import React, { useState } from "react";

export const SummarySection = () => {
  const [selectedType, setSelectedType] = useState("Hybrid");

  const typeOptions = [
    { id: "hybrid", label: "Hybrid" },
    { id: "in-person", label: "In-person" },
    { id: "virtual", label: "Virtual" },
  ];

  return (
    <section
      className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]"
      aria-labelledby="type-heading"
    >
      <h2
        id="type-heading"
        className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]"
      >
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          TYPE
        </span>
      </h2>

      <div
        className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll"
        role="group"
        aria-label="Event type selection"
      >
        {typeOptions.map((option) => {
          const isSelected = selectedType === option.label;
          return (
            <button
              key={option.id}
              onClick={() => setSelectedType(option.label)}
              className={`flex ${isSelected ? "flex-1 grow bg-[#0a17481a]" : ""} h-[46px] items-center justify-center gap-2 px-6 py-3 relative ${isSelected ? "" : "flex-1 grow"} rounded-[1000px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] transition-colors hover:bg-[#0a17480d] focus:outline-none focus:ring-2 focus:ring-[#0a1748] focus:ring-offset-2`}
              aria-pressed={isSelected}
              type="button"
            >
              <span
                className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${option.label === "In-person" ? "ml-[-1.17px] mr-[-1.17px]" : ""} [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
