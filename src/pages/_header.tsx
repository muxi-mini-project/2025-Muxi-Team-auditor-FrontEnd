import { SearchInput } from '@/components/SearchInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import useRouteStore from '@/store/useRouteStore';
import useUserStore from '@/store/useUserStore';
import { forwardRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = forwardRef<HTMLDivElement, { menu: ReactNode }>(
  ({ menu }, ref) => {
    const navigate = useNavigate();
    const { name } = useUserStore();
    const { project } = useRouteStore();

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
          <Icon
            name="settings"
            onClick={() => navigate(`/${project}/settings`)}
          />
        </div>
        <div className="w-full h-full grid grid-cols-[1fr,3fr] place-items-center">
          <Avatar className="size-10">
            <AvatarImage src="https://www.booling.cn/assets/avatar-bf4f5557.webp" />
            <AvatarFallback>瑜伽</AvatarFallback>
          </Avatar>
          <div className="h-full w-full flex flex-col justify-center items-start p-2">
            <div className="text-md font-bold">{name}</div>
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
