import React from "react";

export const DoctorCardSection = () => {
  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Doctor Card Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Карточка врача с основной информацией
      </p>
      <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Доктор Иванов</h4>
          <p className="text-sm text-gray-600">Кардиолог • 15 лет опыта</p>
        </div>
      </div>
    </div>
  );
};