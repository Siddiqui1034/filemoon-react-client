const Dashboard = ({ currentPath }: any) => {
  const totalStorage = 100; // GB
  const usedStorage = 49.6; // GB
  const percentage = Math.round((usedStorage / totalStorage) * 100);

  // SVG circular ring calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const storageBreakdown = [
    {
      name: "Videos",
      used: "28.5 GB",
      color: "bg-indigo-500",
      percentage: 57, // relative percentage of used space
    },
    {
      name: "Images",
      used: "14.2 GB",
      color: "bg-cyan-400",
      percentage: 28,
    },
    {
      name: "Music",
      used: "4.8 GB",
      color: "bg-purple-500",
      percentage: 10,
    },
    {
      name: "Documents",
      used: "2.1 GB",
      color: "bg-rose-400",
      percentage: 5,
    },
  ];
  const recentFiles = [
    {
      id: 1,
      name: "Dashboard_wireframe.png",
      type: "PNG",
      size: "3.4 MB",
      date: "Oct 14, 2026",
      icon: "ri-image-line text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      id: 2,
      name: "Quarterly_Report.pdf",
      type: "PDF",
      size: "1.8 MB",
      date: "Oct 13, 2026",
      icon: "ri-file-pdf-line text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      id: 3,
      name: "Theme_Song_Draft.mp3",
      type: "MP3",
      size: "8.2 MB",
      date: "Oct 12, 2026",
      icon: "ri-music-line text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: 4,
      name: "Product_Demo_clip.mp4",
      type: "MP4",
      size: "42.5 MB",
      date: "Oct 10, 2026",
      icon: "ri-video-line text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  const recentShares = [
    {
      id: 1,
      name: "Client_Contract_v2.pdf",
      type: "PDF",
      size: "2.1 MB",
      date: "Oct 15, 2026",
      sharedWith: "sarah@design.io",
      icon: "ri-file-pdf-line text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      id: 2,
      name: "Brand_Assets_Pack.zip",
      type: "ZIP",
      size: "56.0 MB",
      date: "Oct 14, 2026",
      sharedWith: "Public Link",
      icon: "ri-folder-zip-line text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      id: 3,
      name: "Profile_Photoshoot.png",
      type: "PNG",
      size: "4.7 MB",
      date: "Oct 13, 2026",
      sharedWith: "dev@filemoon.com",
      icon: "ri-image-line text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      id: 4,
      name: "Tutorial_Screen_rec.mp4",
      type: "MP4",
      size: "89.4 MB",
      date: "Oct 11, 2026",
      sharedWith: "alex@work.org",
      icon: "ri-video-line text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];
  const folderCategories = [
    {
      id: 1,
      name: "Images",
      fileCount: 420,
      size: "14.2 GB",
      icon: "ri-image-2-fill",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      glowColor: "hover:shadow-[0_0_20px_rgba(6,182,212,0.18)]",
    },
    {
      id: 2,
      name: "Music",
      fileCount: 156,
      size: "4.8 GB",
      icon: "ri-music-2-fill",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      glowColor: "hover:shadow-[0_0_20px_rgba(168,85,247,0.18)]",
    },
    {
      id: 3,
      name: "Video",
      fileCount: 84,
      size: "28.5 GB",
      icon: "ri-video-fill",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      glowColor: "hover:shadow-[0_0_20px_rgba(99,102,241,0.18)]",
    },
    {
      id: 4,
      name: "PDF Documents",
      fileCount: 230,
      size: "2.1 GB",
      icon: "ri-file-pdf-2-fill",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      glowColor: "hover:shadow-[0_0_20px_rgba(244,63,94,0.18)]",
    },
  ];
  return (
    <div className="w-full space-y-5 flex flex-col h-full min-h-0">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {folderCategories.map((folder) => (
            <div
              key={folder.id}
              className={`p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${folder.glowColor} cursor-pointer group`}
            >
              {/* Top Row: Icon Badge & Arrow */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border text-xl ${folder.badgeColor} transition-transform group-hover:scale-105`}
                >
                  <i className={folder.icon}></i>
                </div>
                <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-white transition-colors"></i>
              </div>

              {/* Folder Details */}
              <h3 className="font-semibold text-white text-base tracking-wide">
                {folder.name}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>{folder.fileCount} files</span>
                <span className="text-slate-300 font-semibold">
                  {folder.size}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* 1. Recent Files Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-semibold text-white text-base tracking-wide flex items-center gap-2">
                  <i className="ri-time-line text-cyan-400"></i>
                  Recent Files
                </h3>
                <span className="text-xs text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">
                  View all
                </span>
              </div>

              <div className="divide-y divide-white/5 mt-2">
                {recentFiles.map((file) => (
                  <div
                    key={file.id}
                    className="py-3 flex items-center justify-between hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${file.icon}`}
                      >
                        <i className="text-base"></i>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">
                          {file.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <span className="px-1.5 py-0.2 rounded bg-white/5 text-[10px]">
                            {file.type}
                          </span>
                          <span>{file.size}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0 pl-2">
                      {file.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Recent Shares Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-semibold text-white text-base tracking-wide flex items-center gap-2">
                  <i className="ri-share-forward-line text-purple-400"></i>
                  Recent Shares
                </h3>
                <span className="text-xs text-slate-400 hover:text-purple-400 cursor-pointer transition-colors">
                  View history
                </span>
              </div>

              <div className="divide-y divide-white/5 mt-2">
                {recentShares.map((share) => (
                  <div
                    key={share.id}
                    className="py-3 flex items-center justify-between hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${share.icon}`}
                      >
                        <i className="text-base"></i>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">
                          {share.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <span className="text-purple-300 font-mono text-[11px] truncate">
                            {share.sharedWith}
                          </span>
                          <span>•</span>
                          <span>{share.size}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0 pl-2">
                      {share.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
