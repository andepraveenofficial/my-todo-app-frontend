/* eslint-disable no-unused-vars */
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../api/todo.api';

interface TodoListProps {
  todos: Todo[];
  onUpdateStatus: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdateStatus,
  onDelete,
}) => {
  if (!todos.length) {
    return <p>No todos found.</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
