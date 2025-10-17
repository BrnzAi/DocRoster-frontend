import React, { useState } from "react";

const locationData = [
  { id: 1, name: "Belleville", selected: false },
  { id: 2, name: "Sault Ste. Marie", selected: false },
  { id: 3, name: "Thunder Bay", selected: true },
  { id: 4, name: "Windsor", selected: false },
];

export const FilterSection = () => {
  const [locations, setLocations] = useState(locationData);

  const handleLocationClick = (id) => {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === id
          ? { ...location, selected: !location.selected }
          : location,
      ),
    );
  };

  return (
    <section className="flex flex-col w-[393px] items-start gap-4 p-6 relative flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
      <header className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          LOCATION
        </h2>
      </header>

      <div
        className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll"
        role="group"
        aria-label="Location filters"
      >
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => handleLocationClick(location.id)}
            className={`inline-flex flex-[0_0_auto] h-[46px] items-center justify-center gap-2 px-6 py-3 relative rounded-[1000px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] ${
              location.selected ? "bg-[#0a17481a]" : ""
            }`}
            aria-pressed={location.selected}
            type="button"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
              {location.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
