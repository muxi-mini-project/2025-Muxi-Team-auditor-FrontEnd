'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Icon } from './ui/Icon';

import { cn } from '@/utils/style';
import { cva, type VariantProps } from 'class-variance-authority';

const statusIcons: Record<string, 'check' | 'circle' | 'cross'> = {
  done: 'check',
  pending: 'circle',
  reject: 'cross',
};

const statusCheckboxVariants = cva(
  'peer h-10 w-10 shrink-0 rounded-lg shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center text-current bg-[#EAE8E5] hover:bg-[#DBD9D4] active:bg-[#D9D9D9] stroke-[#808080]',
  {
    variants: {
      variant: {
        done: 'data-[state=checked]:bg-[#3A9D18] data-[state=checked]:hover:bg-[#389A18] data-[state=checked]:active:bg-[#369118] data-[state=checked]:stroke-[#CFFFBE]',
        pending:
          'data-[state=checked]:bg-[#F7CF8E] data-[state=checked]:hover:bg-[#F3C67D] data-[state=checked]:active:bg-[#EFBD6E] data-[state=checked]:stroke-black',
        reject:
          'data-[state=checked]:bg-[#E75E1A] data-[state=checked]:hover:bg-[#E45F1C] data-[state=checked]:active:bg-[#D4581A] data-[state=checked]:stroke-[#FBF5E2]',
      },
    },
    defaultVariants: {
      variant: 'done',
    },
  }
);

export interface StatusCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof statusCheckboxVariants> {}

const StatusCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  StatusCheckboxProps
>(({ className, variant = 'done', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(statusCheckboxVariants({ variant, className }))}
    {...props}
  >
    <Icon className="w-5 h-5" name={statusIcons[variant || 'done']}></Icon>
  </CheckboxPrimitive.Root>
));
StatusCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { StatusCheckbox };
