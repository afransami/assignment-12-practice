import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto  ">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-323px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
