import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [page, setPage] = useState('home');
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar darkMode={isDarkMode} />
      <Sidebar darkMode={isDarkMode} toggle={toggleMode} undefined="true" setPage={setPage} />
      <MainPage page={page} darkMode={isDarkMode} />
      {/* <h1 >bus kar bsdk</h1>
      <h1>working on heap sort</h1> */}
    </div >
  );
}

export default App;