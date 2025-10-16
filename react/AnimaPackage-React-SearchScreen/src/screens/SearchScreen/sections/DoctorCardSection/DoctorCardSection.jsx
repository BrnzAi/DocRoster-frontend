import React from "react";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Medicine",
    fee: "$175",
    facility: "Health Advancement Center",
    address: "Sunny Path Community Center, 123 Sunshine Ave, 90210",
    image: "/img/ellipse-5-6.png",
  },
];

export const DoctorCardSection = () => {
  return (
    <>
      {doctorsData.map((doctor) => (
        <article
          key={doctor.id}
          className="items-center gap-6 px-6 py-3 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#0a17481a] flex relative"
          role="article"
          aria-label={`Doctor card for ${doctor.name}`}
        >
          <img
            src={doctor.image}
            alt={`${doctor.name} profile picture`}
            className="relative w-14 h-14 rounded-full object-cover"
          />

          <div className="flex-col w-[265px] items-start gap-2 flex relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
              {doctor.name}
            </h3>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {doctor.specialty}, fee {doctor.fee}
            </p>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {doctor.facility}
            </p>

            <address className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px] not-italic">
              {doctor.address}
            </address>
          </div>
        </article>
      ))}
    </>
  );
};
