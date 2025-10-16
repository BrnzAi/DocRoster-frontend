import React, { useState } from "react";

export const FilterOptionsSection = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "Кардиология", "Терапия", "Неврология", "Педиатрия", 
    "Онлайн консультация", "Срочная запись"
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Filter Options Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Фильтры для поиска врачей
      </p>
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedFilters.includes(filter)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};