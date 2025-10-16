import React from "react";

export const SpecialistListSection = () => {
  return (
    <article className="bg-[#21b1280d] border-b [border-bottom-style:solid] border-[#0a17481a] flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]">
      <img
        src="/img/ellipse-5-7.png"
        alt="Dr. Emily Carter profile"
        className="relative w-14 h-14 bg-cover bg-[50%_50%] rounded-full object-cover"
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          Dr. Emily Carter
        </h3>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#21b128] text-sm tracking-[-0.41px] leading-[15.4px]">
          Skipping duplicate
        </p>
      </div>

      <div
        className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]"
        role="group"
        aria-label="Specialist actions"
      >
        <button
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
          aria-label="Edit specialist"
          type="button"
        >
          <div className="relative top-[calc(50.00%_-_11px)] left-[calc(50.00%_-_11px)] w-[22px] h-[22px] aspect-[1]">
            <img
              className="absolute w-[53.42%] h-[70.46%] top-[14.58%] left-[23.29%]"
              alt=""
              src="/img/vector-4.svg"
            />
          </div>
        </button>

        <button
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
          aria-label="Delete specialist"
          type="button"
        >
          <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
            <img
              className="absolute w-[58.33%] h-[75.00%] top-[12.50%] left-[20.83%]"
              alt=""
              src="/img/vector-21.svg"
            />
          </div>
        </button>
      </div>
    </article>
  );
};
