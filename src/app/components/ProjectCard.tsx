import Image from 'next/image';
import { forwardRef } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, description, techStack, image, link }, ref) => {
    return (
      <div
        ref={ref}
        className='relative group rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700'>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center'>
          <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
          <p className='text-gray-300 text-sm'>{description}</p>
          <div className='mt-2 flex flex-wrap justify-center gap-2'>
            {techStack?.map((tech, index) => (
              <span
                key={index}
                className='text-xs bg-gray-800 text-white px-2 py-1 rounded-md'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0'
          aria-label={`View project ${title}`}></a>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
