import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from './sidebar';

export default function Page() {
  return (
    <>
      <SidebarProvider className="bg-[#FAF9F8]">
        <AppSidebar></AppSidebar>
        <main className="w-full">
          <SidebarTrigger></SidebarTrigger>
          Main
        </main>
      </SidebarProvider>
    </>
  );
}
