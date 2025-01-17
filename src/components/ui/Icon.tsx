import { ReactElement } from 'react';
import Check from '@/assets/check.svg?react';
import Circle from '@/assets/circle.svg?react';
import Cross from '@/assets/cross.svg?react';
import More from '@/assets/more.svg?react';
import Menu from '@/assets/menu.svg?react';
import ChevronLeft from '@/assets/chevron-left.svg?react';
import ChevronRight from '@/assets/chevron-right.svg?react';
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | 'check'
    | 'circle'
    | 'cross'
    | 'more'
    | 'menu'
    | 'chevron-left'
    | 'chevron-right'
    | string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, ...svgProps }, ref) => {
    const icons: Record<IconProps['name'], ReactElement> = {
      check: <Check {...svgProps} ref={ref}></Check>,
      circle: <Circle {...svgProps} ref={ref}></Circle>,
      cross: <Cross {...svgProps} ref={ref}></Cross>,
      more: <More {...svgProps} ref={ref}></More>,
      menu: <Menu {...svgProps} ref={ref}></Menu>,
      'chevron-left': <ChevronLeft {...svgProps} ref={ref}></ChevronLeft>,
      'chevron-right': <ChevronRight {...svgProps} ref={ref}></ChevronRight>,
    };

    return icons[name];
  }
);

export { Icon };
