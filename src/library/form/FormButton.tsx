import React from 'react';

interface FormButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const FormButton: React.FC<FormButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 ${className}`}
  >
    {children}
  </button>
);
