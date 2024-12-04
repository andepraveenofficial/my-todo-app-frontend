/* eslint-disable no-unused-vars */
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../api/todo.api';
import { Paragraph } from '../../library/typography';
import { List } from '../../library/components';

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
    return <Paragraph>No todos found.</Paragraph>;
  }

  return (
    <List variant="unordered" className="list-none">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TodoList;
