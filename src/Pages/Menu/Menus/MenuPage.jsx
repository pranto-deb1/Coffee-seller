import React from "react";
import Banner from "../../../SharedComponents/Banner";
import { Outlet } from "react-router";

import InspirationGallery from "../../../SharedComponents/InspirationGallery";
import MenuSection from "./Components/MenuSection/MenuSection";

const MenuPage = () => {
  const bannerContent = {
    title: "Our Menu",
    description: "Explore the delicious offerings at Cafeteria TNC.",
  };
  return (
    <div>
      <Banner content={bannerContent}></Banner>
      <MenuSection></MenuSection>
      <InspirationGallery></InspirationGallery>
    </div>
  );
};

export default MenuPage;
