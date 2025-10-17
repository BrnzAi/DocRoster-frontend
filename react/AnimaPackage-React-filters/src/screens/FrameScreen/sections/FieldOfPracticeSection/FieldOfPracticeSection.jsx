import React from "react";

export const FieldOfPracticeSection = () => {
  const practiceFields = [
    {
      id: 1,
      name: "Gynecology",
      specialists: 0,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-1.svg",
      isDisabled: true,
    },
    {
      id: 2,
      name: "Ophthalmology",
      specialists: 7,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-3.svg",
      isDisabled: false,
    },
    {
      id: 3,
      name: "Dermatology",
      specialists: 14,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-5.svg",
      isDisabled: false,
    },
    {
      id: 4,
      name: "Therapy",
      specialists: 2,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-11.svg",
      isDisabled: false,
    },
    {
      id: 5,
      name: "Laboratory Diagnostics",
      specialists: 19,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-9.svg",
      isDisabled: false,
    },
    {
      id: 6,
      name: "Pediatrics",
      specialists: 8,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-11.svg",
      isDisabled: false,
    },
    {
      id: 7,
      name: "Physiatry",
      specialists: 0,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-17.svg",
      isDisabled: true,
    },
    {
      id: 8,
      name: "Orthopaedics",
      specialists: 19,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-19.svg",
      isDisabled: false,
    },
    {
      id: 9,
      name: "Neurology",
      specialists: 0,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-17.svg",
      isDisabled: true,
    },
    {
      id: 10,
      name: "Rheumatology",
      specialists: 7,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-19.svg",
      isDisabled: false,
    },
    {
      id: 11,
      name: "General Practice",
      specialists: 14,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-23.svg",
      isDisabled: false,
    },
    {
      id: 12,
      name: "Psychiatry",
      specialists: 2,
      icon: "/img/vector-22.svg",
      arrowIcon: "/img/vector-23.svg",
      isDisabled: false,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
      <header className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          FIELD OF PRACTICE
        </h2>
      </header>

      {practiceFields.map((field) => (
        <article
          key={field.id}
          className={`flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] ${
            field.isDisabled ? "opacity-30" : ""
          }`}
        >
          <div className="bg-[#0a1748cc] border border-solid border-[#0a174833] relative w-14 h-14 rounded-[28px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
            <div className="relative top-4 left-4 w-6 h-6">
              <img
                className="absolute w-[83.33%] h-[66.67%] top-[16.67%] left-[8.33%]"
                alt={field.name}
                src={field.icon}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
            <h3
              className={`relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-lg tracking-[-0.50px] leading-[19.8px] ${
                field.isDisabled ? "text-[#3d3d3d]" : "text-[#0a1748]"
              }`}
            >
              {field.name}
            </h3>

            <p
              className={`relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-sm tracking-[-0.41px] leading-[15.4px] ${
                field.isDisabled ? "text-[#3d3d3d99]" : "text-[#0a174899]"
              }`}
            >
              {field.specialists === 0
                ? "No specialists"
                : `${field.specialists} specialists`}
            </p>
          </div>

          <div className="relative w-8 h-8 aspect-[1]">
            <img
              className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
              alt="Navigate"
              src={field.arrowIcon}
            />
          </div>
        </article>
      ))}
    </section>
  );
};
