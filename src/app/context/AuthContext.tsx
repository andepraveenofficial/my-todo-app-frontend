import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { authApi } from '../../api/auth.api';

export type UserRole = 'USER' | 'ADMIN';

interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: string;
  Role?: {
    id: string;
    name: UserRole;
  };
}

/* eslint-disable no-unused-vars */
interface AuthContextType {
  isLoggedIn: boolean;
  user: IUser | null;
  //  no-unused-vars
  signin: (email: string, password: string) => Promise<void>;
  signup: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => Promise<void>;
  signout: () => void;
  hasRole: (role: UserRole) => boolean;
}

// Create a default context value
const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  user: null,
  signin: async () => Promise.resolve(),
  signup: async () => Promise.resolve(),
  signout: () => {},
  hasRole: () => false,
};

// Use this default value when creating the context
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

/*
const dummyUsers: IUser[] = [
  {
    id: '1',
    firstName: 'admin',
    lastName: 'one',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'ADMIN',
  },
  {
    id: '2',
    firstName: 'user',
    lastName: 'one',
    email: 'user@example.com',
    password: 'user123',
    role: 'USER',
  },
];

*/

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authVerify = async () => {
    const authenticatedUser = await authApi.verifyToken();

    if (authenticatedUser.statusCode === 200) {
      setUser(authenticatedUser.data.user);
      setIsLoggedIn(true);
      // Redirect to Home page after successful sign-in
      navigate('/');
    }
  };

  useEffect(() => {
    authVerify();
  }, [isLoggedIn]);

  const [user, setUser] = useState<IUser | null>(() => {
    try {
      const userData = Cookies.get('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Failed to parse user data:', error);
      return null;
    }
  });

  const navigate = useNavigate();

  const signin = async (email: string, password: string) => {
    try {
      const userData = { email, password };
      const authenticatedUser = await authApi.signin(userData);

      if (!authenticatedUser) {
        throw new Error('Invalid credentials');
      }

      setUser(authenticatedUser.data.user);
      setIsLoggedIn(true);
      // Redirect to Home page after successful sign-in
      navigate('/');
    } catch (error) {
      console.error('Sign-in failed', error);
      throw error;
    }
  };

  const signup = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const newUser: IUser = {
        ...userData,
        roleId: 'f1626edf-5ae2-442e-82b6-60ca84f162af', // Default USER roleId
      };

      await authApi.signup(newUser);

      // Simulate redirection to the sign-in page
      navigate('/auth/signin');
    } catch (error) {
      console.error('Sign-up failed', error);
      throw error;
    }
  };

  const signout = useCallback(async () => {
    await authApi.signout();
    Cookies.remove('userData');
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  const hasRole = useCallback(
    (role: UserRole): boolean => {
      return user?.roleId === role;
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        signin,
        signup,
        signout,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
