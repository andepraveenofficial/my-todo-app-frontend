import React, { PropsWithChildren } from 'react';

/*
Header Component :
1. variant (h1-h6)
2. color
3. alignment
4. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingColor = 'primary' | 'secondary' | 'danger' | 'inherit';
type HeadingAlign = 'left' | 'center' | 'right' | 'justify';

/* -----> ComponentProps <----- */
type HeadingProps = PropsWithChildren<{
  variant?: HeadingVariant;
  color?: HeadingColor;
  align?: HeadingAlign;
  className?: string; // Custom Tailwind classes can be passed here
}>;

/* -----> Component <----- */
const Heading: React.FC<HeadingProps> = ({
  children,
  variant = 'h1',
  color = 'inherit',
  align = 'left',
  className = '',
}) => {
  // Base classes always applied
  const baseClasses = 'font-bold transition-colors duration-200';

  // Different variants
  const variantClasses: Record<HeadingVariant, string> = {
    h1: 'text-5xl leading-tight',
    h2: 'text-4xl leading-tight',
    h3: 'text-3xl leading-snug',
    h4: 'text-2xl leading-snug',
    h5: 'text-xl leading-snug',
    h6: 'text-lg leading-normal',
  };

  // Different colors
  const colorClasses: Record<HeadingColor, string> = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    danger: 'text-red-600',
    inherit: 'text-inherit',
  };

  // Different alignments
  const alignClasses: Record<HeadingAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Combine all classes
  const classes = [
    baseClasses,
    variantClasses[variant],
    colorClasses[color],
    alignClasses[align],
    className, // Custom classes are applied last to allow overriding
  ].join(' '); // Filter out any falsy values before joining

  // Render the appropriate heading element based on variant
  const Component = variant;

  return <Component className={classes}>{children}</Component>;
};

export default Heading;
