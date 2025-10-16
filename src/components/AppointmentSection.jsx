import React from "react";

export const AppointmentSection = () => {
  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Appointment Section</h3>
      <p className="text-sm text-gray-600">
        Здесь будет компонент для записи на прием к врачу
      </p>
      <div className="mt-2 flex gap-2">
        <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded">
          Записаться
        </button>
        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded">
          Отменить
        </button>
      </div>
    </div>
  );
};