import React from 'react';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  error: Error | null;
}

export interface IErrorPageProps {
  error?: Error | null;
}
