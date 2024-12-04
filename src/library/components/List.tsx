import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/*
List Component :
1. variant - ordered, unordered
2. size - sm, md, lg
3. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type ListVariant = 'ordered' | 'unordered';
type ListSize = 'sm' | 'md' | 'lg';

/* -----> ComponentProps <----- */
type ListProps = PropsWithChildren<{
  variant?: ListVariant;
  size?: ListSize;
  className?: string; // Custom Tailwind classes can be passed here
}>;

/* -----> ListItem Component <----- */
export const Item: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  const classes = twMerge([
    'mb-1 last:mb-0', // Base styles for list items
    className,
  ]);

  return <li className={classes}>{children}</li>;
};

/* -----> List Component <----- */
export const List: React.FC<ListProps> = ({
  children,
  variant = 'unordered',
  size = 'md',
  className = '',
}) => {
  // Base classes always applied
  const baseClasses = 'list-inside';

  // Different sizes
  const sizeClasses: Record<ListSize, string> = {
    sm: 'text-sm space-y-1',
    md: 'text-base space-y-2',
    lg: 'text-lg space-y-3',
  };

  // Different variants
  const variantClasses: Record<ListVariant, string> = {
    ordered: 'list-decimal',
    unordered: 'list-disc',
  };

  // Combine all classes using tailwind-merge
  const classes = twMerge([
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]);

  const List = variant === 'ordered' ? 'ol' : 'ul';

  return <List className={classes}>{children}</List>;
};
