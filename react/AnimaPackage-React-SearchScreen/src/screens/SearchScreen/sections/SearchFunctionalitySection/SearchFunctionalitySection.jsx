import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchFunctionalitySection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex z-[3] w-[345px] h-12 items-end gap-3 fixed top-6 left-[calc(50.00%_-_172px)] shadow-[0px_0px_48px_#0a17483d]">
      <form
        onSubmit={handleSearchSubmit}
        className="items-center justify-center gap-2 pl-5 pr-6 py-1 flex-1 self-stretch grow bg-[#00000000] rounded-[750px] backdrop-blur-[6.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[-5.2deg] [-webkit-backdrop-filter:blur(6.0px)_brightness(100.0%)_saturate(100.0%)_hue-rotate(-5.2deg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_4px_rgba(0,0,0,0.20),inset_-1px_0_4px_rgba(0,0,0,0.16)] flex relative"
        role="search"
        aria-label="Search for specialists"
      >
        <div
          className="relative w-[18px] h-[18px] aspect-[1]"
          aria-hidden="true"
        >
          <img
            className="absolute w-[77.78%] h-[77.78%] top-[11.11%] left-[11.11%]"
            alt=""
            src="/img/vector.svg"
          />
        </div>

        <label htmlFor="specialist-search" className="sr-only">
          Find a specialist
        </label>
        <input
          id="specialist-search"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Find a specialist..."
          className="relative flex items-center justify-center flex-1 opacity-40 [font-family:'SF_Pro_Text-Medium',Helvetica] font-medium text-[#0a1748] text-[13.5px] tracking-[-0.31px] leading-[21.6px] bg-transparent border-0 outline-none placeholder:text-[#0a1748] placeholder:opacity-40 focus:opacity-100"
          aria-label="Search for a specialist"
        />

        <button
          type="button"
          className="relative w-[18px] h-[18px] aspect-[1]"
          aria-label="Filter search results"
        >
          <img
            className="absolute w-[83.33%] top-[calc(50.00%_-_8px)] left-[8.33%] h-[15px] aspect-[1]"
            alt=""
            src="/img/vector-1.svg"
          />
        </button>
      </form>

      <Link
        to="/profile"
        className="flex flex-col w-[67px] items-center justify-center gap-[1.5px] px-[9px] py-1.5 relative self-stretch bg-[#00000000] rounded-[750px] backdrop-blur-[4.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[-5.2deg] [-webkit-backdrop-filter:blur(4.5px)_brightness(100.0%)_saturate(100.0%)_hue-rotate(-5.2deg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_3px_rgba(0,0,0,0.20),inset_-1px_0_3px_rgba(0,0,0,0.16)]"
        aria-label="Go to profile"
      >
        <div
          className="relative w-[18px] h-[18px] aspect-[1]"
          aria-hidden="true"
        >
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-2.svg"
          />

          <img
            className="absolute w-[29.17%] h-[29.17%] top-[25.00%] left-[35.42%]"
            alt=""
            src="/img/vector-3.svg"
          />
        </div>

        <span className="relative flex items-center justify-center self-stretch [font-family:'SF_UI_Display-Medium',Helvetica] font-medium text-[#0a1748] text-[9px] text-center tracking-[-0.31px] leading-[9px]">
          Profile
        </span>
      </Link>
    </div>
  );
};
