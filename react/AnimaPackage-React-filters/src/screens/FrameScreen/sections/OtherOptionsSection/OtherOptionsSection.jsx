import React, { useState } from "react";

export const OtherOptionsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    language: "",
  });

  const formFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "address", label: "Address", type: "text" },
    { id: "phone", label: "Phone", type: "tel" },
  ];

  const handleInputChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#0a17481a]">
      <header className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          OTHER
        </h2>
      </header>

      <div className="flex flex-col w-[345px] items-start gap-2 relative flex-[0_0_auto]">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="flex h-12 items-center gap-3 px-4 py-3 relative self-stretch w-full bg-[#0a17480d] rounded-xl"
          >
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder={field.label}
              aria-label={field.label}
              className="flex-1 opacity-30 text-lg tracking-[-0.50px] leading-[21.6px] relative [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] placeholder:text-[#0a1748] placeholder:opacity-30 focus:opacity-100"
            />
          </div>
        ))}

        <button
          type="button"
          aria-label="Select Language"
          className="flex h-12 items-center gap-3 px-4 py-3 relative self-stretch w-full bg-[#0a17480d] rounded-xl cursor-pointer hover:bg-[#0a17481a] transition-colors"
        >
          <span className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] text-left">
            Language
          </span>

          <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
            <img
              className="absolute w-[50.00%] h-[30.87%] top-[35.79%] left-[25.00%]"
              alt=""
              src="/img/vector-72.svg"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
