'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import SocialMediaIcons from './components/SocialMedia';

const listItems = [
  'Senior Software Engineer, Passionate About Performance',
  'Technical Writer on FreeCodeCamp and Hackernoon',
  'Open-source Contributor to Impactful Projects',
];

const HomePage = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    const listItems = listRef.current?.children;

    tl.from(imageRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: 'power2.out',
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.8'
    );

    if (listItems) {
      gsap.from(listItems, {
        opacity: 0,
        y: 8,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.5,
      });
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return (
    <div className='flex flex-col lg:flex-row gap-y-20 gap-x-4 container mt-10 items-center pb-20'>
      <div className='lg:w-1/2'>
        <Image
          src='/images/ayantunjitimilehin.webp'
          alt='Ayantunji Timilehin'
          width={500}
          height={500}
          className='rounded-xl'
          ref={imageRef as any}
        />
      </div>

      <div className='lg:w-1/2'>
        <div ref={headerRef}>
          <h4 className='text-xl lg:text-2xl font-semibold'>Hi, I&apos;m</h4>
          <h1 className='text-3xl xl:text-4xl font-bold'>Ayantunji Timilehin</h1>
        </div>

        <ul className='mt-8 text-sm pl-4 lg:text-2xl space-y-4 list-disc' ref={listRef}>
          {listItems.map((item, index) => (
            <li key={index} className='leading-[1.5]'>
              {item}
            </li>
          ))}
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
