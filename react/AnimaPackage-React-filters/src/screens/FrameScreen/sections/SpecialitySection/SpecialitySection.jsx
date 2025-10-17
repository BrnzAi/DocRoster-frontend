import React from "react";

const specialties = [
  {
    id: 1,
    name: "CAT (Catastrophic Assessment)",
    specialists: 15,
    icon: "/img/vector-40.svg",
    chevron: "/img/vector-25.svg",
    disabled: false,
  },
  {
    id: 2,
    name: "FCE (Functional Capacity Evaluation)",
    specialists: 17,
    icon: "/img/vector-40.svg",
    chevron: "/img/vector-41.svg",
    disabled: false,
  },
  {
    id: 3,
    name: "Neuropsych",
    specialists: 3,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-47.svg",
    disabled: false,
  },
  {
    id: 4,
    name: "Chronic Pain",
    specialists: 6,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-49.svg",
    disabled: false,
  },
  {
    id: 5,
    name: "Concussion / TBI",
    specialists: 0,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-45.svg",
    disabled: true,
  },
  {
    id: 6,
    name: "PTSD / Trauma",
    specialists: 10,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-47.svg",
    disabled: false,
  },
  {
    id: 7,
    name: "Pediatrics",
    specialists: 15,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-49.svg",
    disabled: false,
  },
  {
    id: 8,
    name: "Occupational Medicine",
    specialists: 17,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-47.svg",
    disabled: false,
  },
  {
    id: 9,
    name: "Return-to-Work Assessments",
    specialists: 3,
    icon: "/img/vector-40.svg",
    chevron: "/img/vector-41.svg",
    disabled: false,
  },
  {
    id: 10,
    name: "Addictions",
    specialists: 6,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-49.svg",
    disabled: false,
  },
  {
    id: 11,
    name: "Chronic Fatique",
    specialists: 0,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-45.svg",
    disabled: true,
  },
  {
    id: 12,
    name: "Internal Medicine",
    specialists: 10,
    icon: "/img/vector-46.svg",
    chevron: "/img/vector-47.svg",
    disabled: false,
  },
];

export const SpecialitySection = () => {
  return (
    <section className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
      <header className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          SPECIALITY
        </h2>
      </header>

      {specialties.map((specialty) => (
        <article
          key={specialty.id}
          className={`flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] ${
            specialty.disabled ? "opacity-30" : ""
          }`}
          role="button"
          tabIndex={specialty.disabled ? -1 : 0}
          aria-disabled={specialty.disabled}
        >
          <div
            className={`${
              specialty.disabled
                ? "bg-[#3d3d3d4c]"
                : "bg-[#0a17481a] border border-solid border-[#0a174833]"
            } relative w-14 h-14 rounded-[28px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]`}
          >
            <div className="relative top-4 left-4 w-6 h-6 aspect-[1]">
              <img
                className="absolute w-[75.00%] h-[83.33%] top-[4.17%] left-[12.50%]"
                alt=""
                src={specialty.icon}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
            <h3
              className={`relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-lg tracking-[-0.50px] leading-[19.8px] ${
                specialty.disabled ? "text-[#3d3d3d]" : "text-[#0a1748]"
              }`}
            >
              {specialty.name}
            </h3>

            <p
              className={`relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-sm tracking-[-0.41px] leading-[15.4px] ${
                specialty.disabled ? "text-[#3d3d3d99]" : "text-[#0a174899]"
              }`}
            >
              {specialty.specialists === 0
                ? "No specialists"
                : `${specialty.specialists} specialists`}
            </p>
          </div>

          <div className="relative w-8 h-8 aspect-[1]" aria-hidden="true">
            <img
              className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
              alt=""
              src={specialty.chevron}
            />
          </div>
        </article>
      ))}
    </section>
  );
};
