import { SearchInput } from '@/components/SearchInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { forwardRef, ReactNode } from 'react';

const Header = forwardRef<HTMLDivElement, { menu: ReactNode }>(
  ({ menu }, ref) => {
    return (
      <div
        ref={ref}
        className="grid grid-cols-[4rem,20rem,auto,6rem,12rem] place-items-center w-full h-16 bg-[#FFFFFF]"
      >
        {menu}
        <SearchInput className="w-72" />
        <div></div>
        <div className="w-full h-full grid grid-cols-2 place-items-center">
          <Icon name="member" />
          <Icon name="settings" />
        </div>
        <div className="w-full h-full grid grid-cols-[1fr,3fr] place-items-center">
          <Avatar className="size-10">
            <AvatarImage src="https://www.booling.cn/assets/avatar-bf4f5557.webp" />
            <AvatarFallback>瑜伽</AvatarFallback>
          </Avatar>
          <div className="h-full w-full flex flex-col justify-center items-start p-2">
            <div className="text-md font-bold">擅瑜伽</div>
            <div className="text-[0.8rem] text-muted-foreground">
              非常擅长瑜伽
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Header;
