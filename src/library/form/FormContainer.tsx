import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
    <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
      <div className="px-8 py-10">{children}</div>
    </div>
  </div>
);
