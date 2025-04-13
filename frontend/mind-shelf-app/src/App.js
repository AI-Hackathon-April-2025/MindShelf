import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import './App.css';


function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  
  const handleLogin = (userId) => {
    setUser(userId);
  };

  return (
    <div className='appContainer'>
      { user ? ( 
        <>
        <h1 className="mainTitle">MindSelf</h1>
        <DashboardPage />
        </>
      ) : (
        <LoginPage onLogin={handleLogin}/>
      )}
    </div>
  );
}

export default App;
