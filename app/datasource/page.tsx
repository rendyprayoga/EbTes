import React from "react";
import Sidebar from "@/components/Sidebar";
import UserManagement from "@/components/user/UserManagement";
// import MobileNav from "@/components/MobileNav";

const DataSource = () => {
  return (
    <section>
      <div>
        <Sidebar />
      </div>
      <div>
        <UserManagement />
      </div>
    </section>
  );
};

export default DataSource;
