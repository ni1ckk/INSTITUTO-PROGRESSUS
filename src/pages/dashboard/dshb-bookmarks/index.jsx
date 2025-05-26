import Preloader from "@/components/common/Preloader";
import BookMarks from "@/components/dashboard/BookMarks";
import DashboardOne from "@/components/dashboard/DashboardOne";
import Sidebar from "@/components/dashboard/Sidebar";
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Dashboard-bookmarks || INSTITUTO PROGRESSUS - Cursos preparatórios",
  description:
    "Seu progresso começa aqui.",
};

export default function DshbBookmarksPage() {
  return (
    <div className="barba-container" data-barba="container">
      <MetaComponent meta={metadata} />
      <main className="main-content">
        <Preloader />
        <HeaderDashboard />
        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <div
            id="dashboardOpenClose"
            className="dashboard -home-9 js-dashboard-home-9"
          >
            <div className="dashboard__sidebar scroll-bar-1">
              <Sidebar />
            </div>
            <BookMarks />
          </div>
        </div>
      </main>
    </div>
  );
}
