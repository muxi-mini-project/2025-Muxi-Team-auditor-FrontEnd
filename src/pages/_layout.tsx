import { SearchInput } from '@/components/SearchInput';
import { LargeToggle } from '@/components/CrazyToggle';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/Sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils/style';
import useRouteStore from '@/store/useRouteStore';
import useUserStore from '@/store/useUserStore';
import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// ProjectItem 组件
const ProjectItem = forwardRef<
  ElementRef<typeof SidebarMenuItem>,
  ComponentProps<typeof SidebarMenuItem> & {
    path: string;
  }
>(({ className, path = '/', ...props }, ref) => {
  const pwd = useLocation().pathname;
  const isActive = pwd.startsWith(path);
  return (
    <SidebarMenuItem
      ref={ref}
      className={cn(
        'hover:bg-[#FFE1B1] active:bg-[#FFD596] w-48 h-12 text-md font-semibold',
        isActive && 'bg-[#FFD596]',
        className
      )}
      {...props}
    />
  );
});
ProjectItem.displayName = 'ProjectItem';

// Header 组件
function Header({ menu }: { menu: ReactNode }) {
  const navigate = useNavigate();
  const { name } = useUserStore();
  const { project } = useRouteStore();

  return (
    <div className="grid grid-cols-[4rem,20rem,auto,6rem,12rem] place-items-center w-full h-16 bg-[#FFFFFF]">
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

// AppSidebar 组件
const projects = [
  { name: '华师匣子', path: '/ccnubox' },
  { name: '木犀课栈', path: '/kstack' },
  { name: '茶馆', path: '/forum' },
];

function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar className="bg-[#ffffff]">
      <SidebarHeader className="h-16">
        <Link to="/" className="flex flex-row items-center justify-center">
          <img src="/favicon.png" alt="logo" className="w-8 h-8" />
          <span className="text-lg font-bold">MUXI AUDITOR</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {projects.map((project) => (
            <ProjectItem
              key={project.path}
              path={project.path}
              onClick={() => navigate(project.path)}
            >
              {project.name}
            </ProjectItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="h-16 flex flex-row items-center justify-start px-6">
        <LargeToggle></LargeToggle>
      </SidebarFooter>
    </Sidebar>
  );
}

// RootLayout 组件
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className="bg-[#FAF9F8]">
      <AppSidebar />
      <main className="w-full grid grid-rows-[4rem,auto]">
        <Header menu={<SidebarTrigger className="size-10" />} />
        <div className="h-full flex justify-center items-center px-4">
          <div className="w-full">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}
