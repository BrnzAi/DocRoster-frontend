import React, { useState } from 'react'
import { Auth } from './components/Auth'
import { Register } from './components/Register'
import { Recover } from './components/Recover'
import { SearchScreen } from './components/Search'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('auth'); // 'auth', 'register', 'recover', 'search'

  const handleShowRegister = () => {
    setCurrentPage('register');
  };

  const handleShowRecover = () => {
    setCurrentPage('recover');
  };

  const handleBackToAuth = () => {
    setCurrentPage('auth');
  };

  const handleSuccessfulLogin = () => {
    setCurrentPage('search');
  };

  const handleLogout = () => {
    setCurrentPage('auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {currentPage === 'search' ? (
        <div className="w-full max-w-4xl">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">DocRoster - Поиск врачей</h1>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Выйти
            </button>
          </div>
          <SearchScreen />
        </div>
      ) : (
        <div className="w-full max-w-md">
          {currentPage === 'auth' ? (
            <Auth 
              onRegister={handleShowRegister} 
              onLogin={handleSuccessfulLogin}
              onRecover={handleShowRecover}
            />
          ) : currentPage === 'register' ? (
            <Register onBack={handleBackToAuth} onRegister={handleSuccessfulLogin} />
          ) : (
            <Recover onBack={handleBackToAuth} />
          )}
        </div>
      )}
    </div>
  )
}

export default App