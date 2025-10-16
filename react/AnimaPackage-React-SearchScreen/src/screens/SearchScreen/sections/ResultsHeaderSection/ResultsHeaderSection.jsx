import React from "react";

export const ResultsHeaderSection = () => {
  const doctorData = {
    name: "Dr. Sarah Ecohart",
    avatar: "/img/ellipse-5-11.png",
    specialty: "Gynecology",
    fee: "$200",
    facility: "Progressive Health Hub",
    address: "Creativity Academy, 456 Inspire Ave, 90214",
  };

  return (
    <article className="flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]">
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
          {doctorData.facility}
        </p>

        <address className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px] not-italic">
          {doctorData.address}
        </address>
      </div>
    </article>
  );
};
