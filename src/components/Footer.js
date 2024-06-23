// components/Footer.js

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p> My Social Media Links</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/suryansh-raghuvanshi-017336194"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-400"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/suryanshvns"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-gray-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-white hover:text-gray-400"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
