'use client';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className='bg-white dark:bg-gray-800 shadow-md p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-xl font-semibold text-gray-900 dark:text-white'>
          <span>My Website</span>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
