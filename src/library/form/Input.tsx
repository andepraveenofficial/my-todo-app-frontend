import React from 'react';
import { twMerge } from 'tailwind-merge';

/*
Input Component :
1. variant - default
2. size - sm, md, lg
3. functionality - onChange, disabled, type, placeholder
4. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type InputVariant = 'default';
type InputSize = 'sm' | 'md' | 'lg';
type InputType = 'text' | 'password' | 'email';

/* -----> ComponentProps <----- */
type InputProps = {
  variant?: InputVariant;
  size?: InputSize;
  type?: InputType;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  required?: boolean;
};

/* -----> Component <----- */
const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  type = 'text',
  placeholder = 'Enter',
  value,
  onChange,
  fullWidth = false,
  disabled = false,
  className = '',
  name,
  required = false,
}) => {
  // Base classes always applied
  const baseClasses = 'outline-none transition-all duration-200';

  // Different variants
  const variantClasses: Record<InputVariant, string> = {
    default:
      'border border-transparent hover:border-gray-400 focus:border-blue-500 bg-gray-100 hover:bg-white',
  };

  // Different sizes
  const sizeClasses: Record<InputSize, string> = {
    sm: 'py-1.5 px-3 text-sm rounded-md',
    md: 'py-2 px-4 text-base rounded-lg',
    lg: 'py-2.5 px-5 text-lg rounded-lg',
  };

  // Combine all classes
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : 'w-auto',
    disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-50 hover:bg-gray-50 hover:border-transparent'
      : '',
    className
  );

  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
      required={required}
    />
  );
};

export default Input;
