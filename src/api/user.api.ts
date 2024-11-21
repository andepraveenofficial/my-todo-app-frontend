import api from './index';

// Types for User
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  roleId?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
}

export const userApi = {
  getAllUsers: async (params?: PaginationParams) => {
    const response = await api.get('/users', { params });
    return response.data;
  },

  getUserById: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  updateUser: async (userId: string, userData: Partial<User>) => {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  },

  softDeleteUser: async (userId: string) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  },
};
