import React, { useState } from "react";

export const UploadDataSection = () => {
  const [formData, setFormData] = useState({
    fullAddress: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactFields = [
    {
      id: "fullAddress",
      name: "fullAddress",
      placeholder: "Full address",
      type: "text",
      value: formData.fullAddress,
      autoComplete: "street-address",
    },
    {
      id: "phone",
      name: "phone",
      placeholder: "Phone",
      type: "tel",
      value: formData.phone,
      autoComplete: "tel",
    },
    {
      id: "email",
      name: "email",
      placeholder: "Email",
      type: "email",
      value: formData.email,
      autoComplete: "email",
    },
  ];

  return (
    <section className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
      <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
        CONTACTS
      </h2>

      {contactFields.map((field) => (
        <div
          key={field.id}
          className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative"
        >
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            className="flex-1 relative [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-30 bg-transparent"
            aria-label={field.placeholder}
          />
        </div>
      ))}
    </section>
  );
};
