import React from 'react';
import { useAuth } from '../context/AuthContext';

const Footer: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const currentYear = new Date().getFullYear();

  if (!isLoggedIn) {
    return;
  }

  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 mb-4 md:mb-0">
          © {currentYear} TodoApp All Rights Reserved.
        </div>
        <nav className="flex items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/andepraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Contact on LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
