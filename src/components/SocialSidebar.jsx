import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/codelikeagirl91',
      color: 'hover:bg-blue-400',
      icon: <FaFacebookF size={20} />
    },
    {
      name: 'Github',
      url: 'https://github.com/codelikeagirl29',
      color: 'hover:bg-slate-400',
      icon: <FaGithub size={20} />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/fiercely.lindseyy',
      color: 'hover:bg-pink-600',
      icon: <FaInstagram size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/lindsey-howard',
      color: 'hover:bg-blue-800',
      icon: <FaLinkedinIn size={20} />
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-12 flex items-center justify-center bg-slate-800 text-white transition-all duration-300 first:rounded-tr-md last:rounded-br-md ${link.color} hover:w-16`}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;