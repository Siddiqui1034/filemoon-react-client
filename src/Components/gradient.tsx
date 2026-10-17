import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#060913] bg-[radial-gradient(at_0%_0%,rgba(30,58,138,0.35)_0px,transparent_50%),radial-gradient(at_80%_20%,rgba(126,34,206,0.25)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(6,182,212,0.18)_0px,transparent_45%)] text-slate-100">
      {/* Sidebar with slight glass blur */}
      <aside className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-md">
        {/* Navigation */}
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-white/10 bg-black/10 backdrop-blur-md">
          {/* Dynamic Title */}
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
