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
import { useLocation, useNavigate } from 'react-router-dom';

const projects = [
  {
    name: '华师匣子',
    path: '/ccnubox',
  },
  {
    name: '木犀课栈',
    path: '/kstack',
  },
  {
    name: '茶馆',
    path: '/forum',
  },
];

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
  const navigate = useNavigate();
  return (
    <Sidebar className="bg-[#ffffff]">
      <SidebarHeader className="h-16 flex flex-row items-center justify-center">
        <img src="/favicon.png" alt="logo" className="w-8 h-8" />
        <span className="text-lg font-bold">MUXI AUDITOR</span>
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
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
