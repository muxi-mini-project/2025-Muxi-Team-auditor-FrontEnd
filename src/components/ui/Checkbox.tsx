'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import Icon from './Icon';

import { cn } from '@/utils/style';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-8 w-8 shrink-0 rounded-lg border-2 border-[#DBD9D4] hover:border-[#7C7979] active:border-[#4A4A4A] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#FFA81C] data-[state=checked]:stroke-[#FFA81C] data-[state=checked]:hover:border-[#FF911C] data-[state=checked]:hover:stroke-[#FF911C] data-[state=checked]:active:border-[#FF7812] data-[state=checked]:active:stroke-[#FF7812]',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Icon className="h-5 w-5" name="check"></Icon>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
