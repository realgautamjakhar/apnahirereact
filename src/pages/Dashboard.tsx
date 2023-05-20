import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-200 gap-4  min-h-[100dvh]  overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
