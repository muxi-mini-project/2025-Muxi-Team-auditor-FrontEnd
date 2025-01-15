import { ReactElement } from 'react';
import Check from '@/assets/check.svg?react';
import Circle from '@/assets/circle.svg?react';
import Cross from '@/assets/cross.svg?react';
import More from '@/assets/more.svg?react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'check' | 'circle' | 'cross' | 'more';
}

export default function Icon(props: IconProps) {
  const { name, ...svgProps } = props;

  const icons: Record<IconProps['name'], ReactElement> = {
    check: <Check {...svgProps}></Check>,
    circle: <Circle {...svgProps}></Circle>,
    cross: <Cross {...svgProps}></Cross>,
    more: <More {...svgProps}></More>,
  };

  return icons[name];
}
