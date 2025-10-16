import React from "react";

export const SpecialistCardSection = () => {
  const specialist = {
    name: "Dr. Emily Greenfield",
    status: "Missing assessment type",
    avatarUrl: "/img/ellipse-5-9.png",
  };

  const actions = [
    {
      id: "edit",
      icon: "/img/vector-18.svg",
      alt: "Edit specialist",
      ariaLabel: "Edit Dr. Emily Greenfield",
    },
    {
      id: "delete",
      icon: "/img/vector-19.svg",
      alt: "Delete specialist",
      ariaLabel: "Delete Dr. Emily Greenfield",
    },
  ];

  return (
    <article className="flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#ff3d000d] border-b [border-bottom-style:solid] border-[#0a17481a]">
      <img
        src={specialist.avatarUrl}
        alt={`${specialist.name} profile picture`}
        className="relative w-14 h-14 rounded-full object-cover"
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          {specialist.name}
        </h3>

        <p
          className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#ff3d00] text-sm tracking-[-0.41px] leading-[15.4px]"
          role="status"
          aria-live="polite"
        >
          {specialist.status}
        </p>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            aria-label={action.ariaLabel}
            className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#ffffff14] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,61,0,1)_0%,rgba(255,61,0,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
              <img
                className={`absolute ${action.id === "edit" ? "w-[75.01%] h-[75.01%] top-[12.49%] left-[12.50%]" : "w-[58.33%] h-[75.00%] top-[12.50%] left-[20.83%]"}`}
                alt={action.alt}
                src={action.icon}
              />
            </div>
          </button>
        ))}
      </div>
    </article>
  );
};
