import { MdEmail } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/timilehin-micheal/',
    icon: <FaLinkedin className='w-6 h-6' />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/timmy471',
    icon: <FaGithub className='w-6 h-6' />,
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/timi471',
    icon: <FaTwitter className='w-6 h-6' />,
    label: 'Twitter',
  },
  {
    href: 'https://stackoverflow.com/users/12396577/ayantunji-timilehin',
    icon: <FaStackOverflow className='w-6 h-6' />,
    label: 'Stack Overflow',
  },
  {
    href: 'https://linktr.ee/timmy471',
    icon: <BiLink className='w-6 h-6' />,
    label: 'Linktree',
  },
  {
    href: 'mailto:ayantunjitimilehin@gmail.com',
    icon: <MdEmail className='w-6 h-6 cursor-pointer' />,
    label: 'Email',
  },
];

export default function SocialMediaIcons() {
  const handleSocialClick = (label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'Social Media',
        event_label: label,
      });
    }
  };

  return (
    <div className='flex space-x-6  lg:space-x-20 text-gray-700 dark:text-gray-300'>
      {socialLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          onClick={() => handleSocialClick(label)}
          className='text-gray-800 dark:text-gray-300 transition duration-300 transform hover:scale-110'>
          <div className='text-2xl'>{icon}</div>
        </a>
      ))}
    </div>
  );
}
