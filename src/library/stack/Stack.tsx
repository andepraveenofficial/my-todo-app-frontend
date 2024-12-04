import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/*
Stack Component :
1. orientation - horizontal or vertical
2. gap - spacing between items
3. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type StackOrientation = 'horizontal' | 'vertical';

/* -----> ComponentProps <----- */
type StackProps = PropsWithChildren<{
  orientation?: StackOrientation;
  className?: string; // Custom Tailwind classes can be passed here
}>;

/* -----> Component <----- */
const Stack: React.FC<StackProps> = ({
  children,
  orientation = 'horizontal',
  className = '',
}) => {
  // Base classes always applied
  const baseClasses = 'flex';

  // Different orientations with their respective classes
  const orientationClasses: Record<StackOrientation, string> = {
    horizontal: 'flex-row items-center gap-4',
    vertical: 'flex-col gap-4',
  };

  // Combine all classes using tailwind-merge
  const classes = twMerge([
    baseClasses,
    orientationClasses[orientation],
    className,
  ]);

  return <div className={classes}>{children}</div>;
};

export default Stack;
