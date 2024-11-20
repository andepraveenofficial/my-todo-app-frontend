import { Component, ErrorInfo } from 'react';
import ErrorPage from './ErrorPage'; // Custom error page component
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '../../types/error.type';

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update state to indicate an error has occurred
    this.setState({ error });
    console.error('Error caught in ErrorBoundary: ', error, errorInfo);
    // Optionally log the error to an error reporting service
  }

  render() {
    if (this.state.error) {
      // You can pass the error details to your ErrorPage if needed
      return <ErrorPage error={this.state.error} />;
    }
    return this.props.children; // Render children if no error
  }
}
