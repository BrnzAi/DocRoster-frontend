import React, { useState } from "react";

export const PaginationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Pagination Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Пагинация для результатов поиска
      </p>
      <div className="flex items-center justify-center gap-2">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 text-sm rounded ${
              currentPage === page 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};