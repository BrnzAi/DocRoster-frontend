import React, { useState } from "react";

export const WorkSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
    }
  };

  return (
    <section className="z-[1] h-[102px] w-[393px] self-center mt-6 flex-col items-center gap-6 flex relative">
      <div className="flex-col w-[345px] items-start gap-2 flex-[0_0_auto] flex relative">
        <label
          htmlFor="roster-file-input"
          className="h-12 items-center gap-3 px-4 py-3 self-stretch w-full bg-[#0a17480d] rounded-xl flex relative cursor-pointer"
          onClick={handleFileInputClick}
        >
          <span className="relative flex-1 opacity-30 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#0a1748] text-lg tracking-[-0.50px] leading-[21.6px]">
            {selectedFile ? selectedFile.name : "Select roster file (CSV)"}
          </span>

          <div className="relative w-6 h-6 aspect-[1]">
            <img
              className="absolute w-full h-[66.67%] top-[16.67%] left-0"
              alt="Upload icon"
              src="/img/vector.svg"
            />
          </div>

          <input
            ref={fileInputRef}
            id="roster-file-input"
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="sr-only"
            aria-label="Select roster file in CSV format"
          />
        </label>

        <button
          type="button"
          onClick={handleUpload}
          disabled={!selectedFile}
          className="all-[unset] box-border flex w-[345px] items-start justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-[#0a1748cc] rounded-3xl border border-solid border-[#0a174866] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Upload data"
        >
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[-0.41px] leading-[22.4px] whitespace-nowrap">
            Upload data
          </span>
        </button>
      </div>
    </section>
  );
};
