import React, { useState } from "react";

export const SpecialistDetailsSection = () => {
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");

  return (
    <section className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
      <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
        BIO
      </h2>

      <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full name"
          className="w-full whitespace-nowrap relative placeholder:opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px]"
          aria-label="Full name"
        />
      </div>

      <div className="h-[120px] items-start gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          className="relative w-full mt-[-1.00px] placeholder:opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] resize-none"
          aria-label="Short description"
        />
      </div>

      <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="relative flex-1 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] cursor-pointer"
          aria-label="Gender"
        >
          <option value="" disabled className="opacity-30">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>

        <div className="relative w-6 h-6 aspect-[1] pointer-events-none">
          <img
            className="absolute w-[50.00%] h-[30.87%] top-[35.79%] left-[25.00%]"
            alt=""
            src="/img/vector-2.svg"
          />
        </div>
      </div>

      <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
        <select
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
          className="relative flex-1 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] cursor-pointer"
          aria-label="Languages"
        >
          <option value="" disabled className="opacity-30">
            Languages
          </option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="mandarin">Mandarin</option>
          <option value="arabic">Arabic</option>
          <option value="portuguese">Portuguese</option>
          <option value="russian">Russian</option>
          <option value="japanese">Japanese</option>
          <option value="hindi">Hindi</option>
        </select>

        <div className="relative w-6 h-6 aspect-[1] pointer-events-none">
          <img
            className="absolute w-[50.00%] h-[30.87%] top-[35.79%] left-[25.00%]"
            alt=""
            src="/img/vector-2.svg"
          />
        </div>
      </div>
    </section>
  );
};
