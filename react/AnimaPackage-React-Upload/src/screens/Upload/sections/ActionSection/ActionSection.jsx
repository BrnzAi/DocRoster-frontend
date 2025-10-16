import React, { useState } from "react";

export const ActionSection = () => {
  const [photoFile, setPhotoFile] = useState(null);
  const [notes, setNotes] = useState("");

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotoFile(file);
    }
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleAddSpecialist = () => {
    console.log("Add specialist clicked", { photoFile, notes });
  };

  return (
    <section className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
      <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#0a1748] text-lg tracking-[-0.41px] leading-[21.6px] whitespace-nowrap">
        OTHER
      </h2>

      <label
        htmlFor="photo-upload"
        className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative cursor-pointer hover:bg-[#0a174814] transition-colors"
      >
        <span className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px]">
          {photoFile ? photoFile.name : "Upload photo..."}
        </span>

        <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
          <img
            className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
            alt=""
            src="/img/vector-6.svg"
          />
        </div>

        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="sr-only"
          aria-label="Upload photo"
        />
      </label>

      <div className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative">
        <label htmlFor="notes-input" className="sr-only">
          Notes (visible only to you)
        </label>
        <input
          id="notes-input"
          type="text"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Notes (visible only to you)"
          className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px] placeholder:opacity-100 focus:opacity-100 bg-transparent outline-none"
        />
      </div>

      <button
        onClick={handleAddSpecialist}
        className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer hover:bg-[#0a1748e6] active:bg-[#0a1748] transition-colors"
        type="button"
        aria-label="Add specialist"
      >
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
          Add specialist
        </span>
      </button>
    </section>
  );
};
