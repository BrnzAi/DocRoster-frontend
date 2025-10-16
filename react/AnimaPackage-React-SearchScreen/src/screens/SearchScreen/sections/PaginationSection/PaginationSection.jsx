import React from "react";

const doctorData = [
  {
    id: 1,
    name: "Dr. Emily Greenfield",
    specialty: "General Medicine",
    fee: "$175",
    facility: "Innovative Wellness Center",
    address: "Inspiration Institute, 789 Elevate Blvd, 90214",
    image: "/img/ellipse-5-10.png",
  },
];

export const PaginationSection = () => {
  return (
    <>
      {doctorData.map((doctor) => (
        <article
          key={doctor.id}
          className="items-center gap-6 px-6 py-3 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#0a17481a] flex relative"
        >
          <img
            src={doctor.image}
            alt={`${doctor.name} profile`}
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

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {doctor.address}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};
