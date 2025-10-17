import React, { useState } from "react";

export const AssessmentTypeSection = () => {
  const assessmentTypes = [
    {
      id: 1,
      title: "LTD (Long-Term Disability)",
      specialists: "15 specialists",
      icon: "/img/vector-60.svg",
      checkIcon: "/img/vector-49.svg",
      isDisabled: false,
      isSelected: true,
    },
    {
      id: 2,
      title: "STD (Short-Term Disability)",
      specialists: "17 specialists",
      icon: "/img/vector-60.svg",
      checkIcon: "/img/vector-59.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 3,
      title: "MVA (Motor Vehicle Accident)",
      specialists: "3 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-71.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 4,
      title: "WSIB (Workplace Safety & Insurance Board)",
      specialists: "6 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-65.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 5,
      title: "Tort / Liability",
      specialists: "0 specialists",
      icon: "/img/vector-60.svg",
      checkIcon: "/img/vector-59.svg",
      isDisabled: true,
      isSelected: false,
    },
    {
      id: 6,
      title: "Section 44 (Statutory IMEs)",
      specialists: "0 specialists",
      icon: "/img/vector-60.svg",
      checkIcon: "/img/vector-59.svg",
      isDisabled: true,
      isSelected: false,
    },
    {
      id: 7,
      title: "CPP Disability",
      specialists: "17 specialists",
      icon: "/img/vector-60.svg",
      checkIcon: "/img/vector-61.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 8,
      title: "SABS / Catastrophic Determination",
      specialists: "3 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-71.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 9,
      title: "FCE (Functional Capacity Evaluation)",
      specialists: "6 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-65.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 10,
      title: "Cognitive / Neuropsych Assessment",
      specialists: "No specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-67.svg",
      isDisabled: true,
      isSelected: false,
    },
    {
      id: 11,
      title: "Return-to-Work or\nFit-for-Duty Evaluations",
      specialists: "10 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-71.svg",
      isDisabled: false,
      isSelected: false,
    },
    {
      id: 12,
      title: "Paper, Chart, File\nReview Only",
      specialists: "3 specialists",
      icon: "/img/vector-70.svg",
      checkIcon: "/img/vector-71.svg",
      isDisabled: false,
      isSelected: false,
    },
  ];

  const [selectedTypes, setSelectedTypes] = useState(
    assessmentTypes.filter((type) => type.isSelected).map((type) => type.id),
  );

  const handleToggle = (id, isDisabled) => {
    if (isDisabled) return;

    setSelectedTypes((prev) => {
      if (prev.includes(id)) {
        return prev.filter((typeId) => typeId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <section
      className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]"
      aria-labelledby="assessment-type-heading"
    >
      <header className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2
          id="assessment-type-heading"
          className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap"
        >
          ASSESSMENT TYPE
        </h2>
      </header>

      {assessmentTypes.map((type) => {
        const isSelected = selectedTypes.includes(type.id);
        const textColor = type.isDisabled ? "text-[#3d3d3d]" : "text-[#0a1748]";
        const subtextColor = type.isDisabled
          ? "text-[#3d3d3d99]"
          : "text-[#0a174899]";

        return (
          <button
            key={type.id}
            onClick={() => handleToggle(type.id, type.isDisabled)}
            disabled={type.isDisabled}
            className={`flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] ${type.isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-[#0a17480a] transition-colors"} rounded-lg p-2 -m-2`}
            aria-label={`${type.title}, ${type.specialists}${isSelected ? ", selected" : ""}${type.isDisabled ? ", disabled" : ""}`}
            aria-pressed={!type.isDisabled && isSelected}
          >
            <div
              className="relative w-14 h-14 rounded-[28px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] flex-shrink-0"
              aria-hidden="true"
            >
              <div className="relative top-4 left-4 w-6 h-6 aspect-[1]">
                <img
                  className="absolute w-[83.33%] h-[79.17%] top-[8.33%] left-[8.33%]"
                  alt=""
                  src={type.icon}
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
              <div
                className={`relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold ${textColor} text-lg tracking-[-0.50px] leading-[19.8px] text-left whitespace-pre-line`}
              >
                {type.title}
              </div>

              <div
                className={`relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal ${subtextColor} text-sm tracking-[-0.41px] leading-[15.4px]`}
              >
                {type.specialists}
              </div>
            </div>

            <div
              className="relative w-8 h-8 aspect-[1] flex-shrink-0"
              aria-hidden="true"
            >
              <img
                className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                alt=""
                src={type.checkIcon}
              />
            </div>
          </button>
        );
      })}
    </section>
  );
};
