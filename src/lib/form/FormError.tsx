import React from 'react';
import Paragraph from '../../library/typography/Paragraph';

interface FormErrorProps {
  error?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ error }) =>
  error ? <Paragraph color="danger">{error}</Paragraph> : null;
