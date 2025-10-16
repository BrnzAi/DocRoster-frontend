import React from "react";

export const Close = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all cursor-pointer ${className}`}
      aria-label="Close"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1748" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
};