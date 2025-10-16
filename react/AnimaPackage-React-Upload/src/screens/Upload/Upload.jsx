import React from "react";
import { ActionSection } from "./sections/ActionSection";
import { BioSection } from "./sections/BioSection";
import { SpecialistDetailsSection } from "./sections/SpecialistDetailsSection";
import { UploadDataSection } from "./sections/UploadDataSection";
import { WorkSection } from "./sections/WorkSection";

export const Upload = () => {
  return (
    <div
      className="bg-[#ffffff3d] overflow-hidden w-full min-w-[393px] min-h-[808px] flex flex-col"
      data-model-id="1850:1880"
    >
      <button
        className="fixed top-6 left-[333px] w-9 z-[5] aspect-[1]"
        aria-label="Close"
        type="button"
      >
        <img className="w-full h-full" alt="Close" src="/img/close.svg" />
      </button>

      <button
        className="flex z-[6] w-[77px] h-9 items-center justify-center gap-0.5 pl-3 pr-4 py-1.5 fixed top-6 left-6 bg-[#ffffff7a] rounded-[1000px] shadow-[0px_0px_48px_#0a17483d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_3px_rgba(0,0,0,0.20),inset_-1px_0_3px_rgba(0,0,0,0.16)] backdrop-blur-[4.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[-5.2deg] [-webkit-backdrop-filter:blur(4.5px)_brightness(100.0%)_saturate(100.0%)_hue-rotate(-5.2deg)]"
        type="button"
        aria-label="Go back"
      >
        <div className="relative w-5 h-5 ml-[-4.00px] aspect-[1]">
          <img
            className="absolute w-[44.76%] h-[78.19%] top-[10.93%] left-[26.03%]"
            alt=""
            src="/img/vector-7.svg"
          />
        </div>

        <span className="relative flex items-center justify-center w-fit mr-[-4.00px] [font-family:'SF_UI_Display-Medium',Helvetica] font-medium text-[#0a1748] text-base text-center tracking-[-0.41px] leading-4 whitespace-nowrap">
          Back
        </span>
      </button>

      <header className="z-[2] ml-6 w-[345px] h-[38px] mt-[84px] flex-col items-start gap-2 flex relative">
        <h1 className="relative w-[345px] mt-[-1.00px] [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
          Add specialists
        </h1>
      </header>

      <WorkSection />

      <div
        className="z-[3] w-[393px] h-[22px] mt-6 items-center gap-4 px-6 py-0 flex relative"
        role="separator"
        aria-label="or"
      >
        <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />

        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-40 [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
          OR
        </div>

        <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />
      </div>

      <div className="flex z-[4] ml-6 w-[345px] h-[1126px] relative mt-6 flex-col items-start gap-4 pt-0 pb-6 px-0">
        <SpecialistDetailsSection />
        <BioSection />
        <UploadDataSection />
        <ActionSection />
      </div>
    </div>
  );
};
