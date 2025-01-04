'use client';

import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-y-20 gap-x-4 container mt-20 items-center'>
      <div className='lg:w-1/2'>
        <Image
          src='/images/ayantunjitimilehin.webp'
          alt='Ayantunji Timilehin'
          width={500}
          height={500}
          className='rounded-xl'
        />
      </div>

      <div className='lg:w-1/2'>
        <h4 className='text-2xl font-semibold'>Hi, I&apos;m</h4>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
          Ayantunji Timilehin
        </h1>
        <ul className='mt-4 text-2xl space-y-2 list-disc text-gray-700 dark:text-gray-300'>
          <li>Senior Software Engineer, Passionate About Performance</li>
          <li>Technical Writer on FreeCodeCamp and Hackernoon</li>
          <li>Open-source Contributor to Impactful Projects</li>
          <li>Top African Mentor 2024 on ADPList</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
