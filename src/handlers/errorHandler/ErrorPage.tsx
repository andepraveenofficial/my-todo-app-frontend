import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../library/button/Button';
import { IErrorPageProps } from '../../types/error.type';

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong
        </h2>
        {error && <p className="text-gray-600 mb-8">Error: {error.message}</p>}
        <div className="space-x-4">
          <Button onClick={() => navigate(-1)}>Go Back</Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
