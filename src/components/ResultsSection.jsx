import React from "react";

export const ResultsSection = () => {
  const results = [
    { id: 1, name: "Доктор Иванов", specialty: "Кардиолог", rating: 4.8 },
    { id: 2, name: "Доктор Петрова", specialty: "Терапевт", rating: 4.9 },
    { id: 3, name: "Доктор Сидоров", specialty: "Невролог", rating: 4.7 }
  ];

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Results Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Результаты поиска врачей (найдено: {results.length})
      </p>
      <div className="space-y-2">
        {results.map(result => (
          <div key={result.id} className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-800">{result.name}</h4>
              <p className="text-sm text-gray-600">{result.specialty}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">⭐ {result.rating}</p>
              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded mt-1">
                Записаться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};