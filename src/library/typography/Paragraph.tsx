import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/*
Paragraph Component :
1. size (sm, base, lg)
2. color
3. alignment
4. weight
5. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type ParagraphSize = 'sm' | 'base' | 'lg';
type ParagraphColor = 'primary' | 'secondary' | 'danger' | 'inherit';
type ParagraphAlign = 'left' | 'center' | 'right' | 'justify';
type ParagraphWeight = 'normal' | 'medium' | 'semibold';

/* -----> ComponentProps <----- */
type ParagraphProps = PropsWithChildren<{
  size?: ParagraphSize;
  color?: ParagraphColor;
  align?: ParagraphAlign;
  weight?: ParagraphWeight;
  className?: string; // Custom Tailwind classes can be passed here
}>;

/* -----> Component <----- */
const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'base',
  color = 'inherit',
  align = 'left',
  weight = 'normal',
  className = '',
}) => {
  // Base classes always applied
  const baseClasses = '';

  // Different sizes
  const sizeClasses: Record<ParagraphSize, string> = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
  };

  // Different colors
  const colorClasses: Record<ParagraphColor, string> = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    danger: 'text-red-600',
    inherit: 'text-inherit',
  };

  // Different alignments
  const alignClasses: Record<ParagraphAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Different weights
  const weightClasses: Record<ParagraphWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  };

  // Combine all classes using tailwind-merge
  const classes = twMerge([
    baseClasses,
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    className, // Custom classes will properly override defaults
  ]);

  return <p className={classes}>{children}</p>;
};

export default Paragraph;
