import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Item, List } from '../../library/components';
import { Heading } from '../../library/typography';
import { Stack } from '../../library/stack';

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
      <Heading color="primary" variant="h3">
        TodoApp
      </Heading>

      <nav>
        <List className="space-x-6 list-none">
          <Stack>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/about">About</Link>
            </Item>

            {isLoggedIn && user?.Role?.name === 'ADMIN' && (
              <Item>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Dashboard
                </button>
              </Item>
            )}

            {isLoggedIn ? (
              <>
                <Item>
                  {user?.firstName} ({user?.Role?.name})
                </Item>
                <Item>
                  <Button type="button" onClick={handleLogout}>
                    SignOut
                  </Button>
                </Item>
              </>
            ) : (
              <Item>
                <Link to="/auth/signin">
                  <Button type="button">SignIn</Button>
                </Link>
              </Item>
            )}
          </Stack>
        </List>
      </nav>
    </header>
  );
};

export default Header;
