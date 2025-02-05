import { cn } from '@/utils/style';
import * as React from 'react';
import { Icon } from './ui/Icon';

export interface ImageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

const ImageButton = React.forwardRef<HTMLButtonElement, ImageButtonProps>(
  ({ className, direction, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex size-7 items-center justify-center rounded bg-[#EBEAEA]',
          className
        )}
        ref={ref}
        {...props}
      >
        {direction === 'prev' ? (
          <Icon className="size-6 stroke-white" name="chevron-left"></Icon>
        ) : (
          <Icon className="size-6 stroke-white" name="chevron-right"></Icon>
        )}
      </button>
    );
  }
);

export { ImageButton };
