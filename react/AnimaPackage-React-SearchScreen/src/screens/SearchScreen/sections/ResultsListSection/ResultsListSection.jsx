import React from "react";

export const ResultsListSection = () => {
  const results = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Dermatology",
      fee: "$150",
      organization: "Community Wellness Initiative",
      address: "Insight Development Center, 789 Awareness Blvd, 90212",
      image: "/img/ellipse-5-8.png",
    },
  ];

  return (
    <>
      {results.map((result) => (
        <article
          key={result.id}
          className="border-b [border-bottom-style:solid] border-[#0a17481a] flex items-center gap-6 px-6 py-3 relative self-stretch w-full flex-[0_0_auto]"
        >
          <img
            src={result.image}
            alt={`${result.name} profile`}
            className="relative w-14 h-14 rounded-full object-cover"
          />

          <div className="flex-col w-[265px] items-start gap-2 flex relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
              {result.name}
            </h3>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {result.specialty}, fee {result.fee}
            </p>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {result.organization}
            </p>

            <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
              {result.address}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};
