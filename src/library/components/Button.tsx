import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/*
Button Component :
1. variant - primary, secondary, danger
2. size - sm, md, lg
3. functionality - onClick, disabled, type
4. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

/* -----> ComponentProps <----- */
type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string; // Custom Tailwind classes can be passed here
}>;

/* -----> Component <----- */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  // Base classes always applied
  const baseClasses =
    'rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2';

  // Different variants
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'text-gray-700 bg-gray-100 hover:bg-gray-200',
    danger: 'text-white bg-red-600 hover:bg-red-700',
  };

  // Different sizes
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2.5 px-5 text-lg',
  };

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : 'w-auto';

  // State Classes
  const stateClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  // Combine all classes using tailwind-merge
  const classes = twMerge([
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    stateClasses,
    className, // Custom classes will properly override defaults
  ]);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
