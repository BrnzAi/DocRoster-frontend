import React from "react";

export const Specialist = () => {
  const specializations = [
    {
      id: 1,
      icon: "/img/vector-2.svg",
      iconWidth: "83.33%",
      iconHeight: "66.67%",
      iconTop: "16.67%",
      iconLeft: "8.33%",
      title: "Physiatrist",
      subtitle: "Field of practice",
      bgColor: "bg-[#0a1748cc]",
    },
    {
      id: 2,
      icon: "/img/vector-3.svg",
      iconWidth: "75.00%",
      iconHeight: "83.33%",
      iconTop: "4.17%",
      iconLeft: "12.50%",
      title: "CAT (Catastrophic Assessment)",
      subtitle: "Speciality",
      bgColor: "bg-[#0a17481a]",
    },
    {
      id: 3,
      icon: "/img/vector-4.svg",
      iconWidth: "83.33%",
      iconHeight: "79.17%",
      iconTop: "8.33%",
      iconLeft: "8.33%",
      title: "Paper, Chart, File\nReview Only",
      subtitle: "Assessment type",
      bgColor: "",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: "/img/vector-7.svg",
      iconWidth: "83.33%",
      iconHeight: "83.33%",
      iconTop: "8.33%",
      iconLeft: "8.33%",
      text: "English, Hispanic, French",
    },
    {
      id: 2,
      icon: "/img/vector-8.svg",
      iconWidth: "75.00%",
      iconHeight: "75.00%",
      iconTop: "12.50%",
      iconLeft: "12.50%",
      text: "1234 Elm St, Springfield, IL 62704",
    },
    {
      id: 3,
      icon: "/img/vector-9.svg",
      iconWidth: "83.33%",
      iconHeight: "66.67%",
      iconTop: "16.67%",
      iconLeft: "8.33%",
      text: "hello@vivocell.org",
    },
    {
      id: 4,
      icon: "/img/vector-10.svg",
      iconWidth: "75.00%",
      iconHeight: "75.00%",
      iconTop: "12.50%",
      iconLeft: "12.50%",
      text: "+1 423 890 1567",
    },
  ];

  return (
    <div
      className="bg-[#ffffff3d] overflow-hidden w-full min-w-[393px] min-h-[808px] relative"
      data-model-id="1801:1769"
    >
      <div className="absolute top-0 -left-9 w-[465px] h-[764px]">
        <img
          className="absolute top-0 left-0 w-[465px] h-[420px] object-cover"
          alt="Dr. Emily Carter"
          src="/img/image.svg"
        />

        <div className="flex flex-col w-[393px] items-start gap-6 p-6 absolute top-[300px] left-[calc(50.00%_-_196px)]">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
              Dr. Emily Carter
            </h1>

            <p className="relative self-stretch opacity-60 [font-family:'SF_UI_Display-Regular',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px]">
              Dr. Emily Carter is a licensed Physiatrist practicing at ABC
              Medical Center in Toronto, Ontario. She is fluent in both English
              and French and has completed over 500 Independent Medical
              Examinations (IMEs).
              <br />
              Dr. Carter specializes in assessments related to catastrophic
              impairment (CAT), chronic pain, motor vehicle accidents (MVAs),
              long-term disability (LTD), return-to-work (RTW), and
              post-concussion syndromes. Her expertise also includes
              neurological rehabilitation and functional capacity evaluations.
              She offers both in-person and virtual assessments and is available
              to travel within the GTA.
            </p>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
              <button
                className="inline-flex flex-[0_0_auto] bg-[#0a1748] h-[46px] items-center justify-center gap-2 pl-[18px] pr-6 py-3 relative rounded-[1000px] border border-solid border-[#ff3c9533] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
                aria-label="Call now"
              >
                <div className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px] aspect-[1]">
                  <img
                    className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
                    alt=""
                    src="/img/vector.svg"
                  />
                </div>

                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                  Call now
                </span>
              </button>

              <button
                className="inline-flex flex-[0_0_auto] h-[46px] items-center justify-center gap-2 pl-[18px] pr-6 py-3 relative rounded-[1000px] border border-solid border-[#ff3c9533] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
                aria-label="Navigate"
              >
                <div className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px] aspect-[1]">
                  <img
                    className="absolute w-[62.50%] h-[79.17%] top-[8.33%] left-[18.75%]"
                    alt=""
                    src="/img/vector-1.svg"
                  />
                </div>

                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                  Navigate
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[393px] items-start absolute top-[764px] left-[calc(50.00%_-_196px)]">
        <section className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
          <h2 className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              SPECIALIZATIONS
            </span>
          </h2>

          {specializations.map((spec) => (
            <div
              key={spec.id}
              className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
            >
              <div
                className={`relative w-14 h-14 ${spec.bgColor} rounded-[28px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]`}
              >
                <div className="relative top-4 left-4 w-6 h-6">
                  <img
                    className={`absolute w-[${spec.iconWidth}] h-[${spec.iconHeight}] top-[${spec.iconTop}] left-[${spec.iconLeft}]`}
                    alt=""
                    src={spec.icon}
                    style={{
                      width: spec.iconWidth,
                      height: spec.iconHeight,
                      top: spec.iconTop,
                      left: spec.iconLeft,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
                  {spec.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < spec.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>

                <div className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
                  {spec.subtitle}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col items-start gap-3 p-6 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
            <article className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#0000000d] rounded-3xl overflow-hidden border border-solid border-[#0a17481a]">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-12 h-12 aspect-[1]">
                  <img
                    className="absolute w-[83.33%] h-[75.00%] top-[12.50%] left-[8.33%]"
                    alt=""
                    src="/img/vector-5.svg"
                  />

                  <img
                    className="absolute w-[60.04%] h-[41.67%] top-[29.17%] left-[20.83%]"
                    alt=""
                    src="/img/vector-6.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[28.8px]">
                    MON – FRI, 09:00 – 14:00
                  </p>

                  <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[28.8px]">
                    SAT, 10:00 – 12:00
                  </p>

                  <p className="relative self-stretch opacity-60 [font-family:'SF_UI_Display-Regular',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[28.8px]">
                    at VivoCell Clinic
                  </p>
                </div>
              </div>

              <button
                className="flex self-stretch w-full bg-[#0a1748] h-[46px] items-center justify-center gap-2 pl-[18px] pr-6 py-3 relative rounded-[1000px] border border-solid border-[#ff3c9533] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
                aria-label="Make an appointment"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                  Make an appointment
                </span>
              </button>
            </article>
          </div>
        </section>

        <section className="flex flex-col w-[393px] items-start gap-3 p-6 relative flex-[0_0_auto] overflow-x-scroll">
          <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
            CLINIC CONTACTS
          </h2>

          <address className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll not-italic">
            {contactInfo.map((contact) => (
              <div
                key={contact.id}
                className="inline-flex h-12 items-center justify-center gap-2 relative rounded-[1000px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
              >
                <div className="relative w-6 h-6 aspect-[1]">
                  <img
                    className={`absolute w-[${contact.iconWidth}] h-[${contact.iconHeight}] top-[${contact.iconTop}] left-[${contact.iconLeft}]`}
                    alt=""
                    src={contact.icon}
                    style={{
                      width: contact.iconWidth,
                      height: contact.iconHeight,
                      top: contact.iconTop,
                      left: contact.iconLeft,
                    }}
                  />
                </div>

                <div className="relative flex items-center justify-center w-fit [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                  {contact.text}
                </div>
              </div>
            ))}
          </address>
        </section>
      </div>

      <div className="absolute top-[328px] left-[259px] w-8 h-8 aspect-[1]">
        <img
          className="absolute w-[45.83%] h-[70.83%] top-[16.67%] left-[27.08%]"
          alt=""
          src="/img/vector-11.svg"
        />
      </div>

      <button
        className="fixed top-6 left-[333px] w-9 h-9 aspect-[1]"
        aria-label="Close"
      >
        <img className="w-full h-full" alt="" src="/img/close.svg" />
      </button>
    </div>
  );
};
