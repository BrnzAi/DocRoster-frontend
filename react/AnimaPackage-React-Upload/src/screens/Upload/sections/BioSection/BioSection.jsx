import React, { useState } from "react";

export const BioSection = () => {
  const [fieldOfPractice, setFieldOfPractice] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [assessmentType, setAssessmentType] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [averageFees, setAverageFees] = useState("");
  const [clinicHospital, setClinicHospital] = useState("");

  const selectFields = [
    {
      id: "fieldOfPractice",
      placeholder: "Field of practice",
      value: fieldOfPractice,
      onChange: setFieldOfPractice,
      hasDropdown: true,
    },
    {
      id: "speciality",
      placeholder: "Speciality",
      value: speciality,
      onChange: setSpeciality,
      hasDropdown: true,
    },
    {
      id: "assessmentType",
      placeholder: "Assessment type",
      value: assessmentType,
      onChange: setAssessmentType,
      hasDropdown: true,
    },
  ];

  const textInputFields = [
    {
      id: "workingHours",
      placeholder: "Working hours",
      value: workingHours,
      onChange: setWorkingHours,
    },
    {
      id: "workingDays",
      placeholder: "Working days",
      value: workingDays,
      onChange: setWorkingDays,
    },
  ];

  const singleFields = [
    {
      id: "averageFees",
      placeholder: "Average fees",
      value: averageFees,
      onChange: setAverageFees,
    },
    {
      id: "clinicHospital",
      placeholder: "Clinic / hospital",
      value: clinicHospital,
      onChange: setClinicHospital,
    },
  ];

  return (
    <section className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
      <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
        WORK
      </h2>

      {selectFields.map((field) => (
        <div
          key={field.id}
          className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative"
        >
          <label htmlFor={field.id} className="sr-only">
            {field.placeholder}
          </label>
          <select
            id={field.id}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] cursor-pointer w-full"
            aria-label={field.placeholder}
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
          </select>

          <div
            className="relative w-6 h-6 aspect-[1] pointer-events-none"
            aria-hidden="true"
          >
            <img
              className="absolute w-[50.00%] h-[30.87%] top-[35.79%] left-[25.00%]"
              alt=""
              src="/img/vector-5.svg"
            />
          </div>
        </div>
      ))}

      <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
        {textInputFields.map((field) => (
          <div
            key={field.id}
            className="h-12 items-center gap-3 px-4 py-3 flex-1 grow bg-[#0a17480d] rounded-xl flex relative"
          >
            <label htmlFor={field.id} className="sr-only">
              {field.placeholder}
            </label>
            <input
              type="text"
              id={field.id}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder={field.placeholder}
              className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] w-full placeholder:opacity-30"
              aria-label={field.placeholder}
            />
          </div>
        ))}
      </div>

      {singleFields.map((field) => (
        <div
          key={field.id}
          className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative"
        >
          <label htmlFor={field.id} className="sr-only">
            {field.placeholder}
          </label>
          <input
            type="text"
            id={field.id}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            placeholder={field.placeholder}
            className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] w-full placeholder:opacity-30"
            aria-label={field.placeholder}
          />
        </div>
      ))}
    </section>
  );
};
