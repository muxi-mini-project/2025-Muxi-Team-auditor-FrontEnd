import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/Sidebar';
import { cn } from '@/utils/style';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { useLocation } from 'react-router';

const ProjectItem = forwardRef<
  ElementRef<typeof SidebarMenuItem>,
  ComponentProps<typeof SidebarMenuItem> & {
    path: string;
  }
>(({ className, path = '/', ...props }, ref) => {
  const pwd = useLocation().pathname;
  const isActive = pwd === path;
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

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#ffffff]">
      <SidebarHeader className="h-16 flex flex-row items-center justify-center">
        <img src="/favicon.png" alt="logo" className="w-8 h-8" />
        <span className="text-lg font-bold">MUXI AUDITOR</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <ProjectItem path="/" action={() => alert('华师匣子')}>
            华师匣子
          </ProjectItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
