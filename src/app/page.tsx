'use client';

import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
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
        <h1 className='text-3xl xl:text-4xl font-bold'>Ayantunji Timilehin</h1>
        <ul className='mt-8 text-sm pl-4 lg:text-2xl space-y-4 list-disc'>
          <li className='leading-[1.5]'>
            Senior Software Engineer, Passionate About Performance,
          </li>
          <li>Technical Writer on FreeCodeCamp and Hackernoon,</li>
          <li>Open-source Contributor to Impactful Projects.</li>
        </ul>
        <div className='mt-20'>
          <SocialMediaIcons />
        </div>
        <a
          className='underline mt-20 flex gap-1 items-center'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={'Resume'}
          href='https://docs.google.com/document/d/16r6PF-Qqp-hKQ2BhVdnXf1VOsfZA1BF6hmUTAV5pM-I/edit?usp=drive_link'>
          <span>Check out my Resume</span>
          <HiArrowRight className='w-5 h-5 animate-bounce-horizontal' />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
