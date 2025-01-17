import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from './sidebar';
import Header from './header';

export default function Page() {
  return (
    <>
      <SidebarProvider className="bg-[#FAF9F8]">
        <AppSidebar></AppSidebar>
        <main className="w-full">
          <Header menu={<SidebarTrigger className="size-10" />}></Header>
          Main
        </main>
      </SidebarProvider>
    </>
  );
}
