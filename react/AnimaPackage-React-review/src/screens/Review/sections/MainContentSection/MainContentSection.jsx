import React from "react";

export const MainContentSection = () => {
  return (
    <section className="flex z-[2] w-[393px] h-[102px] relative mt-6 flex-col items-center gap-6">
      <div className="flex flex-col w-[345px] items-start gap-2 relative flex-[0_0_auto]">
        <div
          className="flex h-12 items-center gap-3 px-4 py-3 relative self-stretch w-full bg-[#0a17480d] rounded-xl"
          role="group"
          aria-label="Uploaded file"
        >
          <p className="relative flex-1 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px]">
            health-solutions-may-2025.csv
          </p>

          <button
            className="w-6 h-6 relative aspect-[1] cursor-pointer"
            aria-label="Delete file health-solutions-may-2025.csv"
            type="button"
          >
            <img
              className="absolute w-[58.33%] h-[75.00%] top-[12.50%] left-[20.83%]"
              alt=""
              src="/img/vector-22.svg"
            />
          </button>
        </div>

        <button
          className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer"
          type="button"
          aria-label="Publish now"
        >
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
            Publish now
          </span>
        </button>
      </div>
    </section>
  );
};
