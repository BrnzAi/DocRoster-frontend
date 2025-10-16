import React from "react";

export const SpecialistListSection = () => {
  const specialists = [
    { id: 1, name: "Кардиология", count: 45, icon: "❤️" },
    { id: 2, name: "Терапия", count: 62, icon: "🩺" },
    { id: 3, name: "Неврология", count: 28, icon: "🧠" },
    { id: 4, name: "Педиатрия", count: 34, icon: "👶" },
    { id: 5, name: "Офтальмология", count: 19, icon: "👁️" },
    { id: 6, name: "Стоматология", count: 41, icon: "🦷" }
  ];

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Specialist List Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Список специализаций с количеством доступных врачей
      </p>
      <div className="grid grid-cols-2 gap-3">
        {specialists.map(specialist => (
          <div key={specialist.id} className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{specialist.icon}</span>
              <h4 className="font-medium text-gray-800 text-sm">{specialist.name}</h4>
            </div>
            <p className="text-xs text-gray-600">{specialist.count} врачей</p>
          </div>
        ))}
      </div>
    </div>
  );
};