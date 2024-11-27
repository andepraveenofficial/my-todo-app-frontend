import api from './index';

// Types for Authentication
export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export const authApi = {
  signup: async (userData: SignupData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  signin: async (credentials: SigninData) => {
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  },

  signout: async () => {
    const response = await api.get('/auth/signout');
    return response.data;
  },

  verifyToken: async () => {
    const response = await api.get('/auth/verify-token');
    return response.data;
  },
};
