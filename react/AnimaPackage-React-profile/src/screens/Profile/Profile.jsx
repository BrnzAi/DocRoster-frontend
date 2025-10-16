import React from "react";

export const Profile = () => {
  const contactInfo = [
    {
      icon: "/img/vector.svg",
      text: "sarah@medicalcenter.com",
      iconStyle: {
        width: "83.33%",
        height: "66.67%",
        top: "16.67%",
        left: "8.33%",
      },
    },
    {
      icon: "/img/vector-1.svg",
      text: "(416) 123-4567",
      iconStyle: {
        width: "75.00%",
        height: "75.00%",
        top: "12.50%",
        left: "12.50%",
      },
    },
  ];

  const statistics = [
    {
      value: "503",
      label: "Total active pins",
    },
    {
      value: "11",
      label: "Added in 30 d.",
    },
  ];

  const specialists = [
    {
      name: "Dr. Emily Carter",
      schedule: "Mon-Fri  |  09:00-13:00",
      image: "/img/ellipse-5.png",
      phoneIcon: "/img/vector-3.svg",
      messageIcon: "/img/vector-8.svg",
    },
    {
      name: "Dr. Sarah Johnson",
      schedule: "Mon, Wed  |  09:00-18:00",
      image: "/img/ellipse-5-1.png",
      phoneIcon: "/img/vector-7.svg",
      messageIcon: "/img/vector-8.svg",
    },
    {
      name: "Dr. David Lee",
      schedule: "Thu  |  12:00-15:30",
      image: "/img/ellipse-5-2.png",
      phoneIcon: "/img/vector-7.svg",
      messageIcon: "/img/vector-8.svg",
    },
  ];

  return (
    <div
      className="bg-[#ffffff3d] overflow-hidden w-full min-w-[393px] min-h-[808px] flex flex-col"
      data-model-id="1802:304"
    >
      <header className="z-[1] -ml-9 w-[465px] h-[444px] relative">
        <img
          className="absolute top-0 left-0 w-[465px] h-[420px]"
          alt="Profile background"
          src="/img/image.png"
        />

        <div className="flex flex-col w-[393px] items-start gap-6 p-6 absolute top-[300px] left-[calc(50.00%_-_196px)]">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
              Sarah Rogers
            </h1>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={
                    index === 0
                      ? `mailto:${contact.text}`
                      : `tel:${contact.text}`
                  }
                  className="inline-flex h-[46px] items-center justify-center gap-2 pl-[18px] pr-6 py-3 relative flex-[0_0_auto] rounded-[1000px] border border-solid border-[#0a174833] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]"
                  aria-label={index === 0 ? "Email address" : "Phone number"}
                >
                  <div className="w-6 h-6 mt-[-1.00px] mb-[-1.00px] relative aspect-[1]">
                    <img
                      className="absolute"
                      style={contact.iconStyle}
                      alt=""
                      src={contact.icon}
                    />
                  </div>

                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <nav className="flex z-[4] w-[89px] h-9 items-center justify-center gap-3 px-[9px] py-1.5 fixed top-6 left-6 bg-[#00000000] rounded-[1000px] shadow-[0px_0px_48px_#0a17483d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_3px_rgba(0,0,0,0.20),inset_-1px_0_3px_rgba(0,0,0,0.16)] backdrop-blur-[4.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[-5.2deg] [-webkit-backdrop-filter:blur(4.5px)_brightness(100.0%)_saturate(100.0%)_hue-rotate(-5.2deg)]">
        <button
          className="w-5 h-5 relative aspect-[1]"
          aria-label="Edit profile"
        >
          <img
            className="absolute w-[75.01%] h-[75.01%] top-[12.49%] left-[12.50%]"
            alt=""
            src="/img/vector-9.svg"
          />
        </button>

        <div
          className="relative w-px h-5 bg-[#0a1748] opacity-20"
          role="separator"
        />

        <button
          className="w-5 h-5 relative aspect-[1]"
          aria-label="Share profile"
        >
          <img
            className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
            alt=""
            src="/img/vector-10.svg"
          />
        </button>
      </nav>

      <button
        className="fixed top-6 left-[333px] w-9 z-[5] aspect-[1]"
        aria-label="Close profile"
      >
        <img alt="" src="/img/close.svg" />
      </button>

      <section className="flex z-[3] h-[209px] w-[393px] self-center relative flex-col items-start gap-3 px-6 py-8 border-t [border-top-style:solid] border-[#0a17481a] overflow-x-scroll">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
          STATISTICS
        </h2>

        <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
          {statistics.map((stat, index) => (
            <article
              key={index}
              className="flex flex-col items-start gap-6 p-6 relative flex-1 grow bg-[#0000000d] rounded-3xl overflow-hidden border border-solid border-[#0a17481a]"
            >
              <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[-0.41px] leading-[38.4px]">
                  {stat.value}
                </div>

                <div className="relative self-stretch opacity-60 [font-family:'SF_UI_Display-Regular',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
                  {stat.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex z-[2] h-[300px] w-[393px] self-center relative flex-col items-start">
        <div className="flex flex-col w-[393px] items-start gap-4 p-6 relative flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex items-center justify-center w-fit [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              YOUR SPECIALISTS
            </h2>

            <button
              className="inline-flex h-9 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] rounded-[1000px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
              aria-label="Add specialist"
            >
              <span className="relative flex items-center justify-center w-fit [font-family:'SF_UI_Display-Medium',Helvetica] font-medium text-[#0a1748] text-base text-center tracking-[-0.41px] leading-4 whitespace-nowrap">
                Add
              </span>

              <div className="w-5 h-5 relative aspect-[1]">
                <img
                  className="absolute w-[58.33%] h-[58.33%] top-[20.83%] left-[20.83%]"
                  alt=""
                  src="/img/vector-2.svg"
                />
              </div>
            </button>
          </div>

          {specialists.map((specialist, index) => (
            <article
              key={index}
              className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-14 h-14 bg-cover bg-[50%_50%] rounded-full"
                src={specialist.image}
                alt={`${specialist.name} profile picture`}
              />

              <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.50px] leading-[19.8px]">
                  {specialist.name}
                </h3>

                <p className="relative flex items-center justify-center self-stretch [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a174899] text-sm tracking-[-0.41px] leading-[15.4px]">
                  {specialist.schedule}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <button
                  className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
                  aria-label={`Call ${specialist.name}`}
                >
                  <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
                    <img
                      className="absolute w-[75.01%] h-[75.01%] top-[12.49%] left-[12.50%]"
                      alt=""
                      src={specialist.phoneIcon}
                    />
                  </div>
                </button>

                <button
                  className="relative w-9 h-9 rounded-[18px] border-[0.5px] border-solid border-[#0a174814] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(10,23,72,0.08)_0%,rgba(10,23,72,0.08)_100%)]"
                  aria-label={`Message ${specialist.name}`}
                >
                  <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[18px] h-[18px] relative aspect-[1]">
                    <img
                      className="absolute w-[58.33%] h-[75.00%] top-[12.50%] left-[20.83%]"
                      alt=""
                      src={specialist.messageIcon}
                    />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
