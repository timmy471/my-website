'use client';

import Image from 'next/image';
import SocialMediaIcons from './components/SocialMedia';

const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-y-20 gap-x-4 container mt-10 items-center pb-20'>
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
        <h4 className='text-xl lg:text-2xl font-semibold'>Hi, I&apos;m</h4>
        <h1 className='text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white'>
          Ayantunji Timilehin
        </h1>
        <ul className='mt-8 text-sm pl-4 lg:text-2xl space-y-4 list-disc text-gray-700 dark:text-gray-300'>
          <li className='leading-[1.5]'>
            Senior Software Engineer, Passionate About Performance
          </li>
          <li>Technical Writer on FreeCodeCamp and Hackernoon</li>
          <li>Open-source Contributor to Impactful Projects</li>
        </ul>
        <div className='mt-20'>
          <SocialMediaIcons />
        </div>
        <p className='mt-20'>
          <a
            className='underline'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={'Resume'}
            href='https://docs.google.com/document/d/16r6PF-Qqp-hKQ2BhVdnXf1VOsfZA1BF6hmUTAV5pM-I/edit?usp=drive_link'>
            Check Out My Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
