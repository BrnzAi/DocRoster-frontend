import React from "react";
import userImage from "../assets/user.png";

export const Box = () => {
  return (
    <div className="w-[155px] h-[150px] relative">
      {/* User photo */}
      <img
        className="absolute top-0 left-0 w-[155px] h-[150px] object-cover rounded-lg"
        alt="User Profile"
        src={userImage}
        onError={(e) => {
          // Fallback to a default user image
          e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1NSAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTUiIGhlaWdodD0iMTUwIiByeD0iOCIgZmlsbD0iI0Y5RkFGQiIvPgo8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5Vc2VyIFBob3RvPC90ZXh0Pgo8L3N2Zz4K";
        }}
      />
      
      {/* Camera icon for photo upload */}
      <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#0a1748] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#0a1748]/90 transition-all">
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
      </div>
    </div>
  );
};