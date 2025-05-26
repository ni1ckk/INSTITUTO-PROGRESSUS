import Preloader from "@/components/common/Preloader";
import DashboardOne from "@/components/dashboard/DashboardOne";
import Sidebar from "@/components/dashboard/Sidebar";
import Survey from "@/components/dashboard/Survey";
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Dashboard-survey || INSTITUTO PROGRESSUS - Cursos preparatórios",
  description:
    "Seu progresso começa aqui.",
};
export default function DshbServeyPage() {
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
            <Survey />
          </div>
        </div>
      </main>
    </div>
  );
}
