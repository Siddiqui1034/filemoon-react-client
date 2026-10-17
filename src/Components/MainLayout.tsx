import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Profile from "./Profile/Profile";
import Tabs from "./Tabs/Tabs";
import Logout from "./Logout/Logout";

const MainLayout = () => {
  const location = useLocation();
  const formateTitle = (path: string) => {
    const formattedPath = path.replace("/app/", "").replace("-", " ");
    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  };
  const currentPath = formateTitle(location.pathname);

  const logout = () => {
    alert("logout");
  };

  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex">
      <aside
        style={{ width: openSidebar ? "275px" : "0px" }}
        className="flex flex-col h-screen overflow-hidden transition-all duration-300 ease-in-out shrink-0 border-r border-white/15 bg-linear-to-b from-[#070b1e]/20 via-purple-950/40 to-white/[0.14] backdrop-blur-xl shadow-[4px_0_25px_rgba(147,51,234,0.12)]"
      >
        <div className="flex-1 overflow-y-auto p-6 space-y-12">
          <Profile />
          <Tabs />
        </div>
        <div className="">
          <Logout />
        </div>
      </aside>
      <section className="flex-1">
        <nav
          className="h-16 w-full border-b border-white/15 
        bg-linear-to-r from-[#070b1e]/10 via-purple-400/40 to-white/[0.14] 
        backdrop-blur-xl shadow-[0_4px_25px_rgba(147,51,234,0.12)] flex items-center justify-between px-12 text-lg font-bold"
        >
          <span>{currentPath}</span>
          <div className="space-x-6">
            <button
              onClick={logout}
              className="hover:bg-purple-400 hover:scale-105 bg-purple-300 w-8 h-8 text-center rounded-full"
            >
              <i className="ri-logout-circle-line"></i>
            </button>
            <button
              onClick={toggleSidebar}
              className="hover:bg-purple-400 hover:scale-105 bg-purple-300 w-8 h-8 text-center rounded-full"
            >
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </nav>
        {/* <nav className="p-6 bg-green-200">Dashboard....</nav> */}
        <main className="flex-1 min-h-0 p-6 flex flex-col overflow-hidden">
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default MainLayout;
