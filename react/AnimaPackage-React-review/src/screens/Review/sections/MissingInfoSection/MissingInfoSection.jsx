import React from "react";

export const MissingInfoSection = () => {
  const doctorInfo = {
    name: "Dr. Sarah Ecohart",
    specialty: "Laboratory Diagnostics, fee $75",
    location: "Progressive Health Hub",
    avatar: "/img/ellipse-5-10.png",
  };

  const actionButtons = [
    {
      id: "edit",
      icon: "/img/vector-20.svg",
      alt: "Edit",
      iconStyles: "w-[75.01%] h-[75.01%] top-[12.49%] left-[12.50%]",
    },
    {
      id: "call",
      icon: "/img/vector-21.svg",
      alt: "Call",
      iconStyles: "w-[58.33%] h-[75.00%] top-[12.50%] left-[20.83%]",
    },
  ];

  return (
    <section
      className="flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]"
      aria-label="Doctor information"
    >
      <div
        className="bg-[url(/img/ellipse-5-10.png)] relative w-14 h-14 bg-cover bg-[50%_50%]"
        role="img"
        aria-label={`${doctorInfo.name} profile picture`}
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          {doctorInfo.name}
        </h2>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          {doctorInfo.specialty}
        </p>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          {doctorInfo.location}
        </p>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
        {actionButtons.map((button) => (
          <button
            key={button.id}
            className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
            aria-label={button.alt}
            type="button"
          >
            <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
              <img
                className={`absolute ${button.iconStyles}`}
                alt={button.alt}
                src={button.icon}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
