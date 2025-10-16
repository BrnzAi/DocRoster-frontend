import React, { useState } from "react";

export const Box = () => {
  const [email, setEmail] = useState("sarah@medicalcenter.com");
  const [password, setPassword] = useState("*********************");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in submitted", { email, password });
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
  };

  return (
    <div className="w-[1048px] h-[752px]" data-model-id="2116:87-frame">
      <div className="fixed top-[-2736px] left-[-804px] w-[1048px] h-[752px] flex bg-[url(/img/frame-18.png)] bg-[100%_100%]">
        <div className="mt-[84px] w-[393px] h-[585px] ml-[328px] flex flex-col items-center gap-11 bg-[#ffffff3d] rounded-[32px] overflow-hidden shadow-[0px_40px_80px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_21px_rgba(0,0,0,0.13),inset_-1px_0_21px_rgba(0,0,0,0.11)] backdrop-blur-[32.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(32.0px)_brightness(100.0%)_saturate(100.0%)] overflow-y-scroll">
          <img
            className="ml-px h-40 w-[258px] mt-11 aspect-[1.61] object-cover"
            alt="DocRoster Logo"
            src="/img/image-4.png"
          />

          <form
            className="h-[313px] w-[393px] flex-col items-center gap-6 flex relative"
            onSubmit={handleSubmit}
            aria-label="Sign in form"
          >
            <div className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <button
                  type="button"
                  onClick={() => handleSocialSignIn("Apple")}
                  className="flex h-[46px] items-center justify-center gap-2.5 px-6 py-3 relative flex-1 grow bg-black rounded-3xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer hover:opacity-90 transition-opacity"
                  aria-label="Sign in with Apple"
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
                    Sign in
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialSignIn("Google")}
                  className="flex h-[46px] items-center justify-center gap-2.5 px-6 py-3 relative flex-1 grow bg-black rounded-3xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer hover:opacity-90 transition-opacity"
                  aria-label="Sign in with Google"
                >
                  <div className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px] aspect-[1]">
                    <img
                      className="absolute w-[63.20%] h-[75.01%] top-[8.33%] left-[18.39%]"
                      alt=""
                      src="/img/vector-4.svg"
                    />
                  </div>

                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                    Sign in
                  </span>
                </button>
              </div>
            </div>

            <div
              className="h-[22px] items-center gap-4 px-6 py-0 self-stretch w-full flex relative"
              role="separator"
              aria-label="or"
            >
              <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />

              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-40 [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#0a1748] text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                OR
              </div>

              <div className="relative flex-1 grow h-px bg-[#0a1748] opacity-20" />
            </div>

            <div className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative">
              <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] bg-transparent outline-none"
                  placeholder="email@example.com"
                  required
                  aria-required="true"
                />
              </div>

              <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative flex-1 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] bg-transparent outline-none"
                  placeholder="Password"
                  required
                  aria-required="true"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="relative w-6 h-6 aspect-[1] cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                    alt=""
                    src="/img/vector-5.svg"
                  />
                </button>
              </div>

              <button
                type="submit"
                className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer hover:bg-[#0a1748e6] transition-colors"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
                  Sign in to DocRoster
                </span>
              </button>
            </div>

            <p className="relative flex items-center justify-center w-fit [font-family:'SF_UI_Display-Bold',Helvetica] font-bold text-transparent text-sm tracking-[-0.41px] leading-[15.4px] whitespace-nowrap">
              <span className="text-[#0a1748] tracking-[-0.06px]">
                Does not have an account?{" "}
              </span>

              <a
                href="/register"
                className="text-[#0a1748cc] tracking-[-0.06px] underline cursor-pointer hover:text-[#0a1748] transition-colors"
              >
                Register now!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
