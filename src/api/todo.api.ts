import api from './index';

export interface Todo {
  id?: string;
  title: string;
  description?: string;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export const todoApi = {
  getAllTodos: async () => {
    const response = await api.get<{
      statusCode: number;
      message: string;
      success: boolean;
      data: Todo[];
    }>('/todos');
    return response.data;
  },

  createTodo: async (todoData: Todo) => {
    const response = await api.post<Todo>('/todos', todoData);
    return response.data;
  },

  getTodoById: async (todoId: string) => {
    const response = await api.get<Todo>(`/todos/${todoId}`);
    return response.data;
  },

  updateTodo: async (todoId: string, todoData: { status: string }) => {
    const response = await api.put<Todo>(`/todos/${todoId}`, todoData);
    return response.data;
  },

  deleteTodo: async (todoId: string) => {
    const response = await api.delete(`/todos/${todoId}`);
    return response.data;
  },
};
