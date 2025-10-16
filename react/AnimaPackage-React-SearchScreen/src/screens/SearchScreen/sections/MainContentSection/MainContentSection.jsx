import React from "react";

export const MainContentSection = () => {
  const searchQuery =
    "Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments";

  return (
    <section
      className="z-[2] ml-6 w-[345px] h-[258px] mt-24 flex-col items-start gap-2 flex relative"
      aria-labelledby="search-results-heading"
    >
      <h1
        id="search-results-heading"
        className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px]"
      >
        SEARCH RESULTS FOR
      </h1>

      <p className="relative self-stretch [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
        {searchQuery}
      </p>
    </section>
  );
};
