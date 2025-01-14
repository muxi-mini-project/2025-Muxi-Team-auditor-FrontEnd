import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/style';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        pass: 'bg-[#3A9D18] hover:bg-[#389A18] active:bg-[#369118] text-[#CFFFBE] shadow h-10 px-4 py-2 w-36 rounded-xl',
        pending:
          'bg-[#D9D9D9] hover:bg-[#CCCCCC] active:bg-[#BFBFBF] text-foreground shadow h-10 px-4 py-2 w-36 rounded-xl',
        reject:
          'bg-[#E75E1A] hover:bg-[#E45F1C] active:bg-[#D4581A] text-[#FBF5E2] shadow h-10 px-4 py-2 w-36 rounded-xl',
        confirm:
          'bg-[#FFEECF] hover:bg-[#FFE1B1] active:bg-[#FFD596] text-foreground shadow h-10 px-4 py-2 w-36 rounded-xl',
        complete:
          'bg-[#F29E26] text-[#FFF8ED] shadow h-12 px-4 py-2 w-28 rounded-md text-md font-semibold',
        cancel:
          'bg-[#FFEECF] text-foreground shadow h-12 px-4 py-2 w-28 rounded-md text-md font-semibold',
      },
    },
    defaultVariants: {
      variant: 'pass',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
