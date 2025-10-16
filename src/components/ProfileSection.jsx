import React from "react";
import userImage from "../assets/user.png";

export const ProfileSection = () => {
  return (
    <div className="w-full p-4 bg-white/10 rounded-lg border border-dashed border-gray-400 mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Profile Section</h3>
      <p className="text-sm text-gray-600 mb-3">
        Профиль пользователя
      </p>
      <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
        <img 
          src={userImage}
          alt="User Profile"
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KPHA7ZQKOWNocj0KM20gMjB2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+";
          }}
        />
        <div>
          <h4 className="font-semibold text-gray-800">Иван Петров</h4>
          <p className="text-sm text-gray-600">ivan@email.com</p>
        </div>
      </div>
    </div>
  );
};