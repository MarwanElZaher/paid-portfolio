import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <FontAwesomeIcon 
        icon={faWhatsapp} 
        className="text-white text-2xl cursor-pointer hover:text-green-500"
        onClick={() => openLink('https://wa.me/+201126260430')}
      />
      <FontAwesomeIcon 
        icon={faFacebook} 
        className="text-white text-2xl cursor-pointer hover:text-blue-600"
        onClick={() => openLink('https://www.facebook.com/hossam')}
      />
      <FontAwesomeIcon 
        icon={faLinkedin} 
        className="text-white text-2xl cursor-pointer hover:text-blue-700"
        onClick={() => openLink('https://www.linkedin.com/in/your-profile/')}
      />
      <FontAwesomeIcon 
        icon={faGithub} 
        className="text-white text-2xl cursor-pointer hover:text-gray-400"
        onClick={() => openLink('https://github.com/your-github-username')}
      />
      <FontAwesomeIcon 
        icon={faTwitter} 
        className="text-white text-2xl cursor-pointer hover:text-blue-400"
        onClick={() => openLink('https://twitter.com/your-twitter-handle')}
      />
    </div>
  );
};

export default SocialIcons;
