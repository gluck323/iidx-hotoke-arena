import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300';

    const variants = {
      default: 'bg-iidx-gray-dark border border-white/10',
      glass: 'glass-effect',
      gradient: 'bg-gradient-to-br from-iidx-gray-dark to-iidx-gray border border-iidx-blue/30',
    };

    const hoverStyles = hover
      ? 'hover:scale-105 hover:shadow-2xl hover:border-iidx-blue/50 cursor-pointer'
      : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
