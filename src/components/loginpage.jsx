
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; 
import LoginPage from '../login'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* 기타 라우트 */}
      </Routes>
    </Router>
  );
}

export default App;