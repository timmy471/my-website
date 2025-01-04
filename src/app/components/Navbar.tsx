'use client';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className='py-4'>
      <div className='container flex justify-between items-center'>
        <div className='flex items-center text-xl font-semibold text-gray-900 dark:text-white'>
          <span>A.T</span>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
