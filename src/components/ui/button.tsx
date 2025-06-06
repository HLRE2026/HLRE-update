import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const VARIANT_MAP: Record<string, string> = {
  default:
    'bg-emerald-600 hover:bg-emerald-700 text-white',
  outline:
    'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-700',
};

const SIZE_MAP: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-10 py-6 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-2xl shadow transition-all duration-300',
          VARIANT_MAP[variant],
          SIZE_MAP[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; 