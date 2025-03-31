import Image from 'next/image';
import { motion } from 'framer-motion';

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  tags: string[];
};

const ArticleCard = ({
  title,
  description,
  image,
  link,
  date,
  readTime,
  tags,
}: ArticleCardProps) => {
  return (
    <motion.div
      className='relative rounded-lg shadow-lg overflow-hidden group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
      {/* Cover Image */}
      <div className='relative w-full h-48 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      {/* Text Content */}
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{title}</h3>
        <p className='text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2'>
          {description}
        </p>

        {/* Meta Info */}
        <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2'>
          <span>{date}</span>
          <span>📖 {readTime}</span>
        </div>

        {/* Tags */}
        <div className='mt-2 flex flex-wrap gap-2'>
          {/* {tags.map((tag, index) => (
            <span
              key={index}
              className='bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-md'>
              {tag}
            </span>
          ))} */}
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute inset-0 flex justify-center items-center bg-black/60 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        Read More →
      </motion.a>
    </motion.div>
  );
};

export default ArticleCard;
