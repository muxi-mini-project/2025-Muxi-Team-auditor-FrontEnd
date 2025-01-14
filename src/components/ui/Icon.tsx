import { ReactElement } from 'react';
import Check from '@/assets/check.svg?react';
import Circle from '@/assets/circle.svg?react';
import Cross from '@/assets/cross.svg?react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'check' | 'circle' | 'cross';
}

export default function Icon(props: IconProps) {
  const { name, ...svgProps } = props;

  const icons: Record<IconProps['name'], ReactElement> = {
    check: <Check {...svgProps}></Check>,
    circle: <Circle {...svgProps}></Circle>,
    cross: <Cross {...svgProps}></Cross>,
  };

  return icons[name];
}
