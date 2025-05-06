
import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';
import { useTranslation } from 'react-i18next';
const ThemeToggle = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('dark');

  // Load theme từ localStorage nếu có
  useEffect(() => {
    const savedTheme = 'dark'; //localStorage.getItem('theme') || 'dark';
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
    <div className='btn-theme' onClick={toggleTheme}>
      {theme === 'dark'
        ? `${t('darkMode')} 🌙`
        : `${t('lightMode')} 🌞`}
    </div>

  );
};

export default ThemeToggle;
