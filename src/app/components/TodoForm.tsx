/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormInput } from '../../library/form/FormInput';
import Button from '../../library/button/Button';
import { Todo } from '../../api/todo.api';

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Todo>({
    title: '',
    description: '',
    status: 'PENDING',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({ title: '', description: '', status: 'PENDING' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <FormInput
        id="todo-title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Todo Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Todo Description"
        className="w-full p-2 border rounded mt-2"
        required
      />
      <Button type="submit" className="mt-4">
        Create Todo
      </Button>
    </form>
  );
};

export default TodoForm;
