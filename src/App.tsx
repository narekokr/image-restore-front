import React from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
// import dotenv from 'dotenv';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import './App.css';
import DrawContainer from './containers/DrawContainer';
import ImageEditor from './components/ImageEditor';
import PhotoBooth from './components/PhotoBooth';
import NotFoundPage from './components/NotFound';

// dotenv.config();

function App() {
  return (
    <Router>
      <div className="app-wrapper w-full bg-gradient-to-br from-amber-50 via-blue- 100 to-blue-200 ">
        <Menu />
        <main className="app-content flex min-h-screen w-full flex-col items-center justify-center py-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/draw" element={<ImageEditor />} />
            <Route path="/result" element={<PhotoBooth />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
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
