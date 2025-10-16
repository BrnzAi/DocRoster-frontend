import React, { useState } from "react";

export const Recover = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password recovery requested for:", email);
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div
      className="bg-[#ffffff3d] w-full min-w-[393px] min-h-[374px] flex flex-col gap-11"
      data-model-id="1850:1842"
    >
      <button
        className="fixed top-6 left-[333px] w-9 z-[3] aspect-[1] cursor-pointer"
        onClick={handleClose}
        aria-label="Close"
        type="button"
      >
        <img className="w-full h-full" alt="Close" src="/img/close.svg" />
      </button>

      <img
        className="z-[2] ml-px h-40 w-[258px] self-center aspect-[1.61] object-cover"
        alt="DocRoster Logo"
        src="/img/image-4.png"
      />

      <form
        className="z-[1] h-[102px] w-[393px] self-center flex-col items-center gap-6 flex relative"
        onSubmit={handleSubmit}
      >
        <div className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative">
          <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Registered email"
              className="relative w-full opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-100"
              required
              aria-label="Registered email"
            />
          </div>

          <button
            type="submit"
            className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
              Recover password
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
