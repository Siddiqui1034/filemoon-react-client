// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
// import axios from "axios";
// import { CategoryCard } from "../components/dashboard/CategoryCard";
// import { RecentFilesCard, RecentSharesCard } from "../components/dashboard/RecentActivity";

export const DashboardEx = () => {
  //   const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>([
    {
      category: "image",
      totalBytes: "20MB",
    },
  ]);

  //   useEffect(() => {
  //     const fetchStats = async () => {
  //       try {
  //         const { data } = await axios.get("http://localhost:5000/api/dashboard/stats", {
  //           withCredentials: true, // If using cookies/sessions
  //         });
  //         if (data.success) {
  //           setStats(data.data);
  //         }
  //       } catch (err) {
  //         console.error("Failed to load dashboard stats:", err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchStats();
  //   }, []);

  //   if (loading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center text-neutral-400">
  //         <i className="ri-loader-4-line text-3xl animate-spin mr-3"></i>
  //         <span>Loading dashboard analytics...</span>
  //       </div>
  //     );
  //   }

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Row 1: 4 Category Small Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats?.categories?.map((cat: any) => (
          //   <CategoryCard
          //     key={cat.category}
          //     category={cat.category}
          //     count={cat.count}
          //     totalBytes={cat.totalBytes}
          //   />
          <div className="h-28">CategoryCard</div>
        ))}
      </div>

      {/* Row 2: 2 Big Activity Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <RecentFilesCard files={stats?.recentFiles || []} />
        <RecentSharesCard shares={stats?.recentShares || []} /> */}
        <div className="h-32"> Recent Files card</div>
        <div className="h-32"> Recent Shares card</div>
      </div>
    </div>
  );
};
