import { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setDarkMode(savedMode === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <button onClick={toggleDarkMode} aria-label='Toggle Dark Mode'>
      {darkMode ? (
        <FaMoon className='h-5 w-5 text-gray-900 dark:text-white' />
      ) : (
        <FiSun className='h-5 w-5 text-gray-900 dark:text-white' />
      )}
    </button>
  );
};

export default ThemeToggle;
