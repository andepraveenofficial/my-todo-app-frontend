import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export const AuthLink: React.FC<AuthLinkProps> = ({ text, linkText, to }) => (
  <div className="mt-6 text-center">
    <span className="text-sm text-gray-600">
      {text}{' '}
      <Link
        to={to}
        className="text-indigo-600 hover:text-indigo-500 font-medium"
      >
        {linkText}
      </Link>
    </span>
  </div>
);
