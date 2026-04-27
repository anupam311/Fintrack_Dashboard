import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

function Layout() {
  return (
    <div className="min-h-screen bg-background text-text-main flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="p-5 md:p-8 pb-24 md:pb-8">
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

export default Layout;