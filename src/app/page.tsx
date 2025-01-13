'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import { useEffect, useRef } from 'react';
import SocialMediaIcons from './components/SocialMedia';
import { FreeCodeCamp, hackernoon, resume } from '@/constants/links';

const HomePage = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  // const [isMounted, setIsMounted] = useState(false);

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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, [isMounted]);

  const handleResumeClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'Resume',
        event_label: 'Check Resume',
      });
    }
  };

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className='flex flex-col lg:flex-row gap-y-20 gap-x-4 container mt-10 items-center pb-20'>
      <div className='lg:w-1/2'>
        <div ref={imageRef} className='rounded-xl'>
          <div ref={imageRef}>
            <Image
              src='/images/ayantunjitimilehin.webp'
              alt='Ayantunji Timilehin'
              width={500}
              height={500}
              className='rounded-xl'
            />
          </div>
        </div>
      </div>

      <div className='lg:w-1/2'>
        <div ref={headerRef}>
          <h4 className='text-xl lg:text-2xl font-semibold'>Hi, I&apos;m</h4>
          <h1 className='text-3xl xl:text-4xl font-bold'>Ayantunji Timilehin</h1>
        </div>

        <ul
          className='mt-8 text-sm pl-4 lg:text-2xl space-y-4 list-disc leading-[1.5]'
          ref={listRef}>
          <li>Senior Software Engineer, Passionate About Performance</li>
          <li>
            Technical Writer on{' '}
            <a
              className='underline'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={'FreeCodeCamp'}
              href={FreeCodeCamp}>
              FreeCodeCamp
            </a>{' '}
            and{' '}
            <a
              className='underline'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={'Hackernoon'}
              href={hackernoon}>
              Hackernoon
            </a>
          </li>
          <li>Open-source Contributor to Impactful Projects</li>
        </ul>
        <div className='mt-20'>
          <SocialMediaIcons />
        </div>
        <a
          className='underline mt-20 flex gap-1 items-center'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={'Resume'}
          onClick={handleResumeClick}
          href={resume}>
          <span>Check out my Resume</span>
          <HiArrowRight className='w-5 h-5 animate-bounce-horizontal' />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
