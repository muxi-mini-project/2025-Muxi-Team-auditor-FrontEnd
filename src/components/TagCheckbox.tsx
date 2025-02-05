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
      'focus-visible:ring-ring peer flex h-7 w-20 shrink-0 items-center justify-center rounded-lg border-2 border-[#AF6600] text-[#E2A04E] shadow hover:border-[#FFA82E] focus-visible:outline-none focus-visible:ring-1 active:border-[#F29E26] active:text-[#F1B775] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#FFEECF] data-[state=checked]:hover:bg-[#FFE1B1] data-[state=checked]:active:bg-[#FFC886] data-[state=checked]:active:text-[#AF6600]',
      className
    )}
    {...props}
  >
    {children}
  </CheckboxPrimitive.Root>
));
TagCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { TagCheckbox };
