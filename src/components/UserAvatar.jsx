import React, { useState } from "react";
import defaultUserImage from "../assets/default-user.svg";

export const UserAvatar = () => {
  const [avatarSrc, setAvatarSrc] = useState(defaultUserImage);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[155px] h-[150px] relative">
      {/* User Avatar/Photo */}
      <div className="absolute top-0 left-0 w-[155px] h-[150px] bg-gray-300 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="User Avatar"
          src={avatarSrc}
        />
      </div>

      {/* Camera Icon for Upload */}
      <label className="absolute bottom-2 right-2 w-10 h-10 bg-[#0a1748] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0a1748]/90 transition-all shadow-lg">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="sr-only"
          aria-label="Upload profile photo"
        />
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-white"
        >
          <path 
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle 
            cx="12" 
            cy="13" 
            r="4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </div>
  );
};