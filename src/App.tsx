import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Menu />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-dark text-center text-white app-footer">
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright Image Restoration
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
