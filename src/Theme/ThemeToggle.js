// ThemeToggle.js
import React, { useEffect, useState } from 'react';
import './ThemeToggle.css'; 
const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  // Load theme từ localStorage nếu có
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className='btn-theme' onClick={toggleTheme}>
      Chuyển sang {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
    </button>
  );
};

export default ThemeToggle;
