import React from "react";

export const FormSection = () => {
  return (
    <article className="border-b [border-bottom-style:solid] border-[#0a17481a] flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]">
      <img
        src="/img/ellipse-5-8.png"
        alt="Dr. David Lee profile"
        className="relative w-14 h-14 rounded-full object-cover"
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          Dr. David Lee
        </h3>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          Dermatology, fee $150
        </p>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          Innovative Care Clinic
        </p>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
        <button
          type="button"
          aria-label="Edit doctor information"
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)] hover:bg-[linear-gradient(0deg,rgba(10,23,72,0.12)_0%,rgba(10,23,72,0.12)_100%)] transition-colors cursor-pointer"
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
          aria-label="Delete doctor"
          className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)] hover:bg-[linear-gradient(0deg,rgba(10,23,72,0.12)_0%,rgba(10,23,72,0.12)_100%)] transition-colors cursor-pointer"
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
