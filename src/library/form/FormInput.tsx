import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}) => (
  <input
    id={id}
    name={name}
    type={type}
    required={required}
    className={`pl-4 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
