import React from 'react';
// import Button from '../../lib/button/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../../library/components/Button';

const Header: React.FC = () => {
  const { isLoggedIn, signout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signout();
    navigate('/auth/signin');
  };

  if (!isLoggedIn) {
    return;
  }
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white text-gray-700 shadow-md">
      <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300">
        TodoApp
      </div>

      <nav>
        <ul className="flex items-center space-x-6">
          <li className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>

          {isLoggedIn && user?.Role?.name === 'ADMIN' && (
            <li>
              <button
                onClick={() => navigate('/dashboard')}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Dashboard
              </button>
            </li>
          )}

          {isLoggedIn ? (
            <>
              <li className="text-sm text-gray-600">
                {user?.firstName} ({user?.Role?.name})
              </li>
              <li>
                <Button type="button" onClick={handleLogout}>
                  SignOut
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth/signin">
                <Button type="button">SignIn</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
