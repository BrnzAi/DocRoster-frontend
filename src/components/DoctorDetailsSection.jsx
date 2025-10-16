import React from "react";

export const DoctorDetailsSection = () => {
  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Doctor Details Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Подробная информация о враче
      </p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Специализация:</span>
          <span className="text-sm font-medium">Кардиология</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Стаж:</span>
          <span className="text-sm font-medium">15 лет</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Рейтинг:</span>
          <span className="text-sm font-medium">⭐ 4.8</span>
        </div>
      </div>
    </div>
  );
};