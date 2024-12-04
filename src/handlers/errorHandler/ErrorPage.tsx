import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IErrorPageProps } from '../../types/error.type';
import Button from '../../library/components/Button';
import Heading from '../../library/typography/Heading';
import Paragraph from '../../library/typography/Paragraph';

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Heading className="mb-2">Oops!</Heading>
        <Heading className="mb-2">Something went wrong</Heading>
        {error && (
          <Paragraph color="secondary">Error: {error.message}</Paragraph>
        )}
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
