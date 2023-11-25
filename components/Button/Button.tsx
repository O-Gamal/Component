import { forwardRef } from 'react';
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
    const iconSize = {
      lg: 'h-6 w-6',
      md: 'h-5 w-5',
      sm: 'h-4 w-4',
    }[size];

    const shapeStyle = {
      circular: 'rounded-full',
      rounded: 'rounded-md',
      sharp: 'rounded-none',
    }[shape];

    const buttonSize = {
      lg: 'gap-4 px-8 py-4 text-lg font-medium',
      md: 'gap-3 px-6 py-3.5 text-base font-medium',
      sm: 'gap-1 px-4 py-2 text-xs',
    }[size];

    const colorVariantClasses = {
      'primary-primary':
        'bg-primary-500 text-primary-50 hover:bg-primary-600 active:bg-primary-600 active:text-primary-200 disabled:bg-primary-300 disabled:text-primary-100',
      'primary-secondary':
        'bg-primary-50 text-primary-500 ring-primary-200 hover:bg-primary-100 hover:text-primary-600 active:ring-1 disabled:bg-primary-50 disabled:text-primary-300',
      'primary-tertiary':
        'bg-shades-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300 active:text-neutral-500 active:ring-neutral-300 disabled:bg-shades-white disabled:text-neutral-300 disabled:ring-neutral-200',
      'primary-outlined':
        'active:text-primary-400 bg-shades-white text-primary-500 ring-1 ring-primary-500 hover:ring-primary-400 active:ring-primary-400 disabled:bg-shades-white disabled:text-primary-300 disabled:ring-primary-300',
      'primary-link':
        'bg-shades-white text-primary-500 ring-primary-500 hover:text-primary-600 active:text-primary-400 disabled:text-primary-300',
      'success-primary':
        'bg-success-500 text-success-50 hover:bg-success-600 active:bg-success-600 active:text-success-200 disabled:bg-success-300 disabled:text-success-100',
      'success-secondary':
        'bg-success-50 text-success-500 ring-success-200 hover:bg-success-100 hover:text-success-600 active:ring-1 disabled:bg-success-50 disabled:text-success-300',
      'success-tertiary':
        'bg-shades-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300 active:text-neutral-500 active:ring-neutral-300 disabled:bg-shades-white disabled:text-neutral-300 disabled:ring-neutral-200',
      'success-outlined':
        'active:text-success-400 bg-shades-white text-success-500 ring-1 ring-success-500 hover:ring-success-400 active:ring-success-400 disabled:bg-shades-white disabled:text-success-300 disabled:ring-success-300',
      'success-link':
        'bg-shades-white text-success-500 ring-success-500 hover:text-success-600 active:text-success-400 disabled:text-success-300',
      'destructive-primary':
        'bg-destructive-500 text-destructive-50 hover:bg-destructive-600 active:bg-destructive-600 active:text-destructive-200 disabled:bg-destructive-300 disabled:text-destructive-100',
      'destructive-secondary':
        'bg-destructive-50 text-destructive-500 ring-destructive-200 hover:bg-destructive-100 hover:text-destructive-600 active:ring-1 disabled:bg-destructive-50 disabled:text-destructive-300',
      'destructive-tertiary':
        'bg-shades-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300 active:text-neutral-500 active:ring-neutral-300 disabled:bg-shades-white disabled:text-neutral-300 disabled:ring-neutral-200',
      'destructive-outlined':
        'active:text-destructive-400 bg-shades-white text-destructive-500 ring-1 ring-destructive-500 hover:ring-destructive-400 active:ring-destructive-400 disabled:bg-shades-white disabled:text-destructive-300 disabled:ring-destructive-300',
      'destructive-link':
        'bg-shades-white text-destructive-500 ring-destructive-500 hover:text-destructive-600 active:text-destructive-400 disabled:text-destructive-300',
    }[`${color}-${variant}`];

    return (
      <button
        {...props}
        ref={forwardedRef}
        tabIndex={0}
        className={cn(
          'flex items-center outline-none',
          colorVariantClasses,
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
