import React from "react";

const doctorData = [
  {
    id: 1,
    name: "Dr. Sarah Ecohart",
    specialty: "Gynecology",
    fee: "$200",
    facility: "Progressive Health Hub",
    address: "Creativity Academy, 456 Inspire Ave, 90214",
    image: "/img/ellipse-5-11.png",
  },
];

export const NoResultsSection = () => {
  return (
    <article className="flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]">
      {doctorData.map((doctor) => (
        <React.Fragment key={doctor.id}>
          <div
            className="bg-[url(/img/ellipse-5-11.png)] relative w-14 h-14 bg-cover bg-[50%_50%]"
            role="img"
            aria-label={`${doctor.name} profile picture`}
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

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {doctor.address}
            </p>
          </div>
        </React.Fragment>
      ))}
    </article>
  );
};
