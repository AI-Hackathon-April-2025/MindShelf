import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <h1 className="mainTitle">MindShelf</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;