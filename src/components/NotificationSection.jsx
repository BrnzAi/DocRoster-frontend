import React, { useState } from "react";

export const NotificationSection = () => {
  const [notifications] = useState([
    { id: 1, message: "Запись к доктору подтверждена", type: "success" },
    { id: 2, message: "Новый доктор в вашем районе", type: "info" },
    { id: 3, message: "Напоминание о приеме", type: "warning" }
  ]);

  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Notification Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Уведомления и важные сообщения
      </p>
      <div className="space-y-2">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className={`p-2 rounded text-sm ${
              notification.type === 'success' ? 'bg-green-100 text-green-800' :
              notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};