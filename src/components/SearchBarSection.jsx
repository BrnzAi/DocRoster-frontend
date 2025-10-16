import React, { useState } from "react";

export const SearchBarSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Search Bar Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Строка поиска врачей и специалистов
      </p>
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Поиск врача или специализации..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
            🔍
          </button>
        </div>
        <input
          type="text"
          placeholder="Город или адрес..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};