import React from "react";

export const ActionButtonsSection = () => {
  return (
    <section className="flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#0a17481a]">
      <img
        src="/img/ellipse-5-6.png"
        alt="Dr. Sarah Johnson profile"
        className="relative w-14 h-14 rounded-full object-cover"
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          Dr. Sarah Johnson
        </h2>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          General Medicine, fee $175
        </p>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          Health Advancement Center
        </p>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
        <button
          type="button"
          aria-label="Call Dr. Sarah Johnson"
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
        >
          <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
            <img
              className="absolute w-[75.01%] h-[75.01%] top-[12.49%] left-[12.50%]"
              alt=""
              src="/img/vector-20.svg"
            />
          </div>
        </button>

        <button
          type="button"
          aria-label="Message Dr. Sarah Johnson"
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
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
    </section>
  );
};
