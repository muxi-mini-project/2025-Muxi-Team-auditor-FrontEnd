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
          'size-7 rounded bg-[#EBEAEA] inline-flex items-center justify-center',
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
