/* eslint-disable no-unused-vars */
import React from 'react';

import { Todo } from '../../api/todo.api';
import { Button, Item } from '../../library/components';
import { Stack } from '../../library/stack/';
import { Heading, Paragraph } from '../../library/typography';

// Define status styles outside the component for better readability
const statusStyles: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  IN_PROGRESS: 'bg-blue-100 text-blue-800',
  COMPLETED: 'bg-green-100 text-green-800',
};

// StatusBadge component for better reusability
const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status] || 'bg-gray-200 text-gray-700'}`}
  >
    {status}
  </span>
);

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
  return (
    <Item className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
      <Stack>
        <div className="flex-grow space-y-2">
          <Heading align="left" variant="h4">
            {todo.title}
          </Heading>
          <Paragraph>{todo.description || 'No description provided'}</Paragraph>

          <div className="mt-2 text-sm text-gray-500">
            <Paragraph>
              <strong>Created:</strong>{' '}
              {todo.createdAt
                ? new Date(todo.createdAt).toLocaleString()
                : 'N/A'}
            </Paragraph>
            <Paragraph>
              <strong>Updated:</strong>{' '}
              {todo.updatedAt
                ? new Date(todo.updatedAt).toLocaleString()
                : 'N/A'}
            </Paragraph>
          </div>

          <StatusBadge status={todo.status || 'PENDING'} />
        </div>
        <Stack>
          <Button type="button" onClick={() => onUpdateStatus(todo)}>
            Update Status
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={() => onDelete(todo.id || '')}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </Item>
  );
};

export default TodoItem;
