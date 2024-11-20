import React from 'react';
import Button from '../../library/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
        MyApp
      </div>

      <nav>
        <ul className="flex items-center space-x-6">
          <li className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>

          {isLoggedIn && (
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
                {user?.firstName} ({user?.role})
              </li>
              <li>
                <Button onClick={handleLogout}>SignOut</Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signin">
                <Button>SignIn</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
