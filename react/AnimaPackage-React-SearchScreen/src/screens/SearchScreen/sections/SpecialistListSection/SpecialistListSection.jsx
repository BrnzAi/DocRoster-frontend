import React from "react";

export const SpecialistListSection = () => {
  const specialists = [
    {
      id: 1,
      name: "Dr. David Lee",
      specialty: "Laboratory Diagnostics, fee $75",
      clinic: "Innovative Care Clinic",
      address: "Empowerment Academy, 321 Uplift Rd, 90213",
      image: "/img/ellipse-5-9.png",
    },
  ];

  return (
    <>
      {specialists.map((specialist) => (
        <article
          key={specialist.id}
          className="items-center gap-6 px-6 py-3 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#0a17481a] flex relative"
        >
          <img
            src={specialist.image}
            alt={`${specialist.name} profile`}
            className="relative w-14 h-14 rounded-full object-cover"
          />

          <div className="flex-col w-[265px] items-start gap-2 flex relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
              {specialist.name}
            </h3>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {specialist.specialty}
            </p>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {specialist.clinic}
            </p>

            <address className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px] not-italic">
              {specialist.address}
            </address>
          </div>
        </article>
      ))}
    </>
  );
};
