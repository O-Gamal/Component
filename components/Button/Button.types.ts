import { IconType } from '../Icon/Icon';

const sizes = ['sm', 'md', 'lg'] as const;

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'outlined',
  'link',
] as const;

const colors = ['primary', 'success', 'destructive'] as const;

const shapes = ['sharp', 'rounded', 'circular'] as const;

export type ButtonProps = {
  size?: (typeof sizes)[number];
  variant?: (typeof variants)[number];
  shape?: (typeof shapes)[number];
  color?: (typeof colors)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
