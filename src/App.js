import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import './main.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout handleDarkMode={toggleDarkMode} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
