import Image from 'next/image';
import { forwardRef } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const OpenSourceCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, description, image, link }, ref) => {
    return (
      <div
        ref={ref}
        className='relative group rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700'>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='w-full h-64 transition-transform duration-300 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center'>
          <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
          <p className='text-gray-300 text-sm'>{description}</p>
          <a href={link} target='_blank' rel='noopener noreferrer' className='text-sm mt-6'>
            <button className='bg-slate-600 py-2 px-4 rounded-lg text-white'>
              View Contribution
            </button>
          </a>
        </div>
      </div>
    );
  }
);

OpenSourceCard.displayName = 'OpenSourceCard';

export default OpenSourceCard;
