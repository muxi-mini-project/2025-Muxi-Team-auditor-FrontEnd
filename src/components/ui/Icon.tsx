import { ReactElement } from 'react';
import Check from '@/assets/check.svg?react';
import Circle from '@/assets/circle.svg?react';
import Cross from '@/assets/cross.svg?react';
import More from '@/assets/more.svg?react';
import ChevronLeft from '@/assets/chevron-left.svg?react';
import ChevronRight from '@/assets/chevron-right.svg?react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | 'check'
    | 'circle'
    | 'cross'
    | 'more'
    | 'chevron-left'
    | 'chevron-right';
}

export default function Icon(props: IconProps) {
  const { name, ...svgProps } = props;

  const icons: Record<IconProps['name'], ReactElement> = {
    check: <Check {...svgProps}></Check>,
    circle: <Circle {...svgProps}></Circle>,
    cross: <Cross {...svgProps}></Cross>,
    more: <More {...svgProps}></More>,
    'chevron-left': <ChevronLeft {...svgProps}></ChevronLeft>,
    'chevron-right': <ChevronRight {...svgProps}></ChevronRight>,
  };

  return icons[name];
}
