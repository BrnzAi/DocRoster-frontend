import React from "react";

export const Btn = ({ 
  btn = "default", 
  className = "", 
  text = "Button", 
  onClick,
  disabled = false,
  isLoading = false 
}) => {
  const baseClasses = "flex w-full items-center justify-center gap-2.5 px-6 py-3 rounded-3xl font-semibold text-sm text-center tracking-[-0.41px] leading-[22.4px] transition-all cursor-pointer";
  
  const variants = {
    default: "bg-[#0a1748] text-white hover:bg-[#0a1748]/90 border border-solid border-[#0a174866]",
    secondary: "bg-white text-[#0a1748] hover:bg-gray-50 border border-solid border-[#0a1748]",
    danger: "bg-red-500 text-white hover:bg-red-600 border border-solid border-red-400"
  };

  const variantClass = variants[btn] || variants.default;
  const disabledClass = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg transform hover:scale-[1.02]";

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClass} ${disabledClass} ${className}`}
    >
      {isLoading && (
        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      )}
      <span className="whitespace-nowrap">
        {isLoading ? 'Loading...' : text}
      </span>
    </button>
  );
};