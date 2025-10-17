import React, { useState } from "react";

export const SortOptionsSection = () => {
  const [selectedGender, setSelectedGender] = useState("Any");

  const genderOptions = [
    { id: "any", label: "Any" },
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
  ];

  return (
    <section
      className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]"
      aria-labelledby="gender-filter-heading"
    >
      <h2
        id="gender-filter-heading"
        className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]"
      >
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          GENDER
        </span>
      </h2>

      <div
        className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll"
        role="group"
        aria-label="Gender filter options"
      >
        {genderOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedGender(option.label)}
            className={`flex h-[46px] items-center justify-center gap-2 px-6 py-3 relative flex-1 grow rounded-[1000px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] ${
              selectedGender === option.label ? "bg-[#0a17481a]" : ""
            }`}
            aria-pressed={selectedGender === option.label}
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
