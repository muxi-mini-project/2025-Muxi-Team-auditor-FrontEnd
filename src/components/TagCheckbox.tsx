'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/utils/style';

const TagCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-7 w-20 shrink-0 rounded-lg border-2 border-[#AF6600] hover:border-[#FFA82E] text-[#E2A04E] active:border-[#F29E26] active:text-[#F1B775] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#FFEECF] data-[state=checked]:hover:bg-[#FFE1B1] data-[state=checked]:active:text-[#AF6600] data-[state=checked]:active:bg-[#FFC886] flex items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
  </CheckboxPrimitive.Root>
));
TagCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { TagCheckbox };
