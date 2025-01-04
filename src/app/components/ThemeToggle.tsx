import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

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
        <MoonIcon className='h-6 w-6 text-gray-900 dark:text-white' />
      ) : (
        <SunIcon className='h-6 w-6 text-gray-900 dark:text-white' />
      )}
    </button>
  );
};

export default ThemeToggle;
