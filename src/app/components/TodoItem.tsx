/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../library/button/Button';
import { Todo } from '../../api/todo.api';

interface TodoItemProps {
  todo: Todo;
  onUpdateStatus: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdateStatus,
  onDelete,
}) => {
  const statusStyles: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    IN_PROGRESS: 'bg-blue-100 text-blue-800',
    COMPLETED: 'bg-green-100 text-green-800',
  };

  return (
    <li className="flex items-center justify-between p-4 border rounded shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex-grow">
        <h3 className="font-bold text-lg text-gray-800">{todo.title}</h3>
        <p className="text-gray-600">
          {todo.description || 'No description provided'}
        </p>

        <div className="mt-2 text-sm text-gray-500 space-y-1">
          <p>
            <strong>Created:</strong>{' '}
            {todo.createdAt ? new Date(todo.createdAt).toLocaleString() : 'N/A'}
          </p>
          <p>
            <strong>Updated:</strong>{' '}
            {todo.updatedAt ? new Date(todo.updatedAt).toLocaleString() : 'N/A'}
          </p>
        </div>

        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[todo.status || 'PENDING']}`}
        >
          {todo.status || 'PENDING'}
        </span>
      </div>

      <div className="flex space-x-3">
        <Button onClick={() => onUpdateStatus(todo)} variant="primary">
          Update Status
        </Button>
        <Button onClick={() => onDelete(todo.id || '')} variant="danger">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
