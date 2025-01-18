import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from '@/pages/sidebar';
import Header from '@/pages/header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className="bg-[#FAF9F8]">
      <AppSidebar />
      <main className="w-full">
        <Header menu={<SidebarTrigger className="size-10" />} />
        {children}
      </main>
    </SidebarProvider>
  );
}
