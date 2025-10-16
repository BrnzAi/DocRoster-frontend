import React from "react";

export const SearchBarSection = () => {
  const doctorData = {
    name: "Dr. Emily Greenfield",
    specialty: "General Medicine",
    fee: "$175",
    clinic: "Innovative Wellness Center",
    address: "Inspiration Institute, 789 Elevate Blvd, 90214",
    avatar: "/img/ellipse-5-10.png",
  };

  return (
    <article className="items-center gap-6 px-6 py-3 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#0a17481a] flex relative">
      <img
        src={doctorData.avatar}
        alt={`${doctorData.name} profile picture`}
        className="relative w-14 h-14 rounded-full object-cover"
      />

      <div className="flex-col w-[265px] items-start gap-2 flex relative">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
          {doctorData.name}
        </h2>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          {doctorData.specialty}, fee {doctorData.fee}
        </p>

        <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
          {doctorData.clinic}
        </p>

        <address className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px] not-italic">
          {doctorData.address}
        </address>
      </div>
    </article>
  );
};
