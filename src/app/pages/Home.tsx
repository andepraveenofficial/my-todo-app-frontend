import React, { useEffect, useState } from 'react';
import { Todo, todoApi } from '../../api/todo.api';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Heading, Paragraph } from '../../library/typography';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setError(null);
    try {
      const response = await todoApi.getAllTodos();
      setTodos(response?.data || []);
    } catch {
      setError('Failed to fetch todos');
    }
  };

  const handleCreateTodo = async (newTodo: Todo) => {
    try {
      await todoApi.createTodo(newTodo);
      await fetchTodos();
    } catch {
      setError('Failed to create todo');
    }
  };

  const handleUpdateTodoStatus = async (todo: Todo) => {
    const updatedStatus =
      todo.status === 'PENDING'
        ? 'IN_PROGRESS'
        : todo.status === 'IN_PROGRESS'
          ? 'COMPLETED'
          : 'PENDING';
    try {
      await todoApi.updateTodo(todo.id || '', {
        status: updatedStatus,
      });
      await fetchTodos();
    } catch {
      setError('Failed to update status');
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await todoApi.deleteTodo(id);
      await fetchTodos();
    } catch {
      setError('Failed to delete todo');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Heading className="mb-4">Todo Management</Heading>
      {error && <Paragraph color="danger">{error}</Paragraph>}
      <TodoForm onSubmit={handleCreateTodo} />
      <TodoList
        todos={todos}
        onUpdateStatus={handleUpdateTodoStatus}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default Home;
