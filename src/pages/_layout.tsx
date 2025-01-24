import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from '@/pages/_sidebar';
import Header from '@/pages/_header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className="bg-[#FAF9F8]">
      <AppSidebar />
      <main className="w-full grid grid-rows-[4rem,auto]">
        <Header menu={<SidebarTrigger className="size-10" />} />
        <div className="h-full flex justify-center items-center">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
