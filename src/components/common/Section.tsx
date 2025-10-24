import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import Container from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'default' | 'dark' | 'gradient';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerSize = 'xl', background = 'default', children, ...props }, ref) => {
    const backgrounds = {
      default: 'bg-iidx-black',
      dark: 'bg-iidx-gray-dark',
      gradient: 'bg-gradient-to-b from-iidx-black via-iidx-gray-dark to-iidx-black',
    };

    return (
      <section
        ref={ref}
        className={cn('py-16 sm:py-20 lg:py-24', backgrounds[background], className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
