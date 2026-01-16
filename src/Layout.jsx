import React from "react";
import Nav from "./SharedComponents/Nav";
import Home from "./Pages/HomePage/Home";
import { Outlet } from "react-router";
import Footer from "./SharedComponents/Footer";

const Layout = () => {
  return (
    <div className="bg-base-300 min-h-screen relative ">
      <header>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
