import { forwardRef, useMemo } from 'react';
import type { ButtonProps } from './Button.types';
import { cn } from '@/utils/classNames';
import { Icon } from '../Icon';
import { IconType } from '../Icon/Icon';

type ButtonElement = React.ElementRef<'button'>;

const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      shape = 'rounded',
      size = 'md',
      color = 'primary',
      variant = 'primary',
      children,
      className,
      leftIcon,
      rightIcon,
      ...props
    },
    forwardedRef
  ) => {
    const iconSize = useMemo(() => {
      return {
        lg: 'h-6 w-6',
        md: 'h-5 w-5',
        sm: 'h-3 w-3',
      }[size];
    }, [size]);

    const shapeStyle = useMemo(() => {
      return {
        circular: 'rounded-full',
        rounded: 'rounded-md',
        sharp: 'rounded-none',
      }[shape];
    }, [shape]);

    const buttonSize = useMemo(() => {
      return {
        lg: 'gap-4 px-8 py-4 text-lg font-medium',
        md: 'gap-3 px-6 py-3.5 text-base font-medium',
        sm: 'gap-1 px-4 py-2 text-sm',
      }[size];
    }, [size]);

    const buttonVariant = useMemo(() => {
      return {
        primary: `bg-${color}-500 text-${color}-50 hover:bg-${color}-600 active:bg-${color}-600 active:text-${color}-200 disabled:bg-${color}-300 disabled:text-${color}-100`,
        secondary: `bg-${color}-50 text-${color}-500 ring-${color}-200 hover:bg-${color}-100 hover:text-${color}-600 active:ring-1 disabled:bg-${color}-50 disabled:text-${color}-300`,
        tertiary: `bg-shades-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300 active:text-neutral-500 active:ring-neutral-300 disabled:bg-shades-white disabled:text-neutral-300 disabled:ring-neutral-200`,
        outlined: `active:text-${color}-400 bg-shades-white text-${color}-500 ring-1 ring-${color}-500 hover:ring-${color}-400 active:ring-${color}-400 disabled:bg-shades-white disabled:text-${color}-300 disabled:ring-${color}-300`,
        link: `bg-shades-white text-${color}-500 ring-${color}-500 hover:text-${color}-600 active:text-${color}-400 disabled:text-${color}-300`,
      }[variant];
    }, [variant, color]);

    return (
      <button
        {...props}
        ref={forwardedRef}
        tabIndex={0}
        className={cn(
          'flex items-center outline-none',
          buttonVariant,
          shapeStyle,
          buttonSize,
          className
        )}
      >
        {leftIcon && <Icon name={leftIcon} className={iconSize} />}
        {children}
        {rightIcon && <Icon name={rightIcon} className={iconSize} />}
      </button>
    );
  }
);
export default Button;
