import Footer from "@layouts/Footer";
import Sidebar from "@layouts/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="p-xl flex flex-col justify-between overflow-y-scroll flex-1">
        <div className="flex-1 m-b-lg">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
