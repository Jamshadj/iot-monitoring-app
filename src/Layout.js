import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar>
        <div className="content">{children}</div>
      </Sidebar>
    </>
  );
};

export default Layout;
