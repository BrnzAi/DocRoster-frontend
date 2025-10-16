import React from "react";
import logoImage from "../assets/logo-docroster.png";

export const SearchSection = () => {
  return (
    <div className="w-full p-4 bg-white/20 backdrop-blur-lg rounded-lg mb-4">
      <div className="flex items-center justify-between mb-4">
        <img 
          src={logoImage}
          alt="DocRoster Logo"
          className="h-12 w-auto"
          onError={(e) => {
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIj4KPHA7ZKhvcmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMEExNzQ4IiByeD0iOCIvPgo8dGV4dCBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIj5Eb2NSb3N0ZXI8L3RleHQ+Cjwvc3ZnPg==";
          }}
        />
        <h3 className="text-lg font-semibold text-gray-700">Search Section</h3>
      </div>
      <p className="text-sm text-gray-600">
        Верхняя секция с логотипом и основными элементами поиска
      </p>
    </div>
  );
};