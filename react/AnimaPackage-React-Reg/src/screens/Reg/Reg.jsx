import React, { useState } from "react";

export const Reg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }
    console.log("Form submitted:", formData);
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <div
      className="bg-[#ffffff3d] w-full min-w-[393px] min-h-[718px] flex flex-col"
      data-model-id="1848:1678"
    >
      <button
        className="fixed top-6 left-[333px] w-9 z-[4] aspect-[1] cursor-pointer"
        onClick={() => console.log("Close clicked")}
        aria-label="Close"
      >
        <img className="w-full h-full" alt="Close" src="/img/close.svg" />
      </button>

      <img
        className="z-[3] ml-[119px] w-[155px] h-[150px] mt-11"
        alt="Group"
        src="/img/group-38.png"
      />

      <header className="z-[1] ml-6 w-[345px] h-[68px] mt-6 flex-col items-start gap-2 flex relative">
        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#0a1748] text-[32px] tracking-[0.37px] leading-[38.4px]">
          Register account
        </h1>

        <p className="relative w-[345px] [font-family:'SF_UI_Display-Regular',Helvetica] font-normal text-[#0a174899] text-lg tracking-[-0.50px] leading-[21.6px]">
          Sign up to view and manage specialists
        </p>
      </header>

      <main className="z-[2] h-[376px] w-[393px] self-center mt-6 flex-col items-center gap-6 flex relative">
        <div className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative">
          <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
            <button
              className="all-[unset] box-border flex h-[46px] items-center justify-center gap-2.5 px-6 py-3 relative flex-1 grow bg-black rounded-3xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer"
              onClick={() => handleSocialSignUp("Google")}
              aria-label="Sign up with Google"
            >
              <div className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px] aspect-[1]">
                <img
                  className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                  alt=""
                  src="/img/vector.svg"
                />

                <img
                  className="absolute w-[65.23%] h-[32.31%] top-[8.33%] left-[13.14%]"
                  alt=""
                  src="/img/vector-1.svg"
                />

                <img
                  className="absolute w-[65.03%] h-[33.22%] top-[58.45%] left-[12.91%]"
                  alt=""
                  src="/img/vector-2.svg"
                />

                <img
                  className="absolute w-[41.67%] h-[39.23%] top-[41.67%] left-[50.00%]"
                  alt=""
                  src="/img/vector-3.svg"
                />
              </div>

              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                Sign up
              </span>
            </button>

            <button
              className="all-[unset] box-border flex h-[46px] items-center justify-center gap-2.5 px-6 py-3 relative flex-1 grow bg-black rounded-3xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer"
              onClick={() => handleSocialSignUp("Apple")}
              aria-label="Sign up with Apple"
            >
              <div className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px] aspect-[1]">
                <img
                  className="absolute w-[63.20%] h-[75.01%] top-[8.33%] left-[18.39%]"
                  alt=""
                  src="/img/vector-4.svg"
                />
              </div>

              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                Sign up
              </span>
            </button>
          </div>
        </div>

        <div className="h-[22px] items-center gap-4 px-6 py-0 self-stretch w-full flex relative">
          <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />

          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-40 [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
            OR
          </div>

          <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />
        </div>

        <form
          className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative"
          onSubmit={handleSubmit}
        >
          <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Person or company name"
              className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-100"
              required
              aria-label="Person or company name"
            />
          </div>

          <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email used for login"
              className="relative w-full opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-100"
              required
              aria-label="Email used for login"
            />
          </div>

          <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number (optional)"
              className="relative w-full opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-100"
              aria-label="Phone number (optional)"
            />
          </div>

          <button
            type="submit"
            className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
              Sign up to DocRoster
            </span>
          </button>
        </form>

        <div className="items-center justify-center gap-2.5 px-6 py-0 self-stretch w-full flex-[0_0_auto] mb-[-2.00px] flex relative">
          <label className="flex items-center justify-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="sr-only"
              aria-label="I've read and agree to the Terms and Conditions"
            />
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                alt=""
                src="/img/vector-5.svg"
              />
            </div>

            <p className="relative flex items-center justify-center w-fit [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-transparent text-sm tracking-[-0.41px] leading-[15.4px] whitespace-nowrap">
              <span className="text-[#0a1748] tracking-[-0.06px]">
                I&apos;ve read and agree to the{" "}
              </span>

              <span className="text-[#0a1748cc] tracking-[-0.06px] underline">
                Terms and Conditions
              </span>
            </p>
          </label>
        </div>
      </main>
    </div>
  );
};
