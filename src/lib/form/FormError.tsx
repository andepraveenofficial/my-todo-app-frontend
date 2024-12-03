import React from 'react';

interface FormErrorProps {
  error?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ error }) =>
  error ? <p className="text-red-400">{error}</p> : null;
