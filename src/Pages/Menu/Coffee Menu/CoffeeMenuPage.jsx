import React from "react";

import InspirationGallery from "../../../SharedComponents/InspirationGallery";
import CoffeeMenu from "./Components/CoffeeMenu/CoffeeMenu";
import Banner from "../../../SharedComponents/Banner";

const CoffeeMenuPage = () => {
  const bannerContent = {
    title: "Coffee Menu",
    description:
      "Discover our exquisite selection of coffee beans and experience.",
  };
  return (
    <div>
      <Banner content={bannerContent}></Banner>
      <CoffeeMenu></CoffeeMenu>
      <InspirationGallery />
    </div>
  );
};

export default CoffeeMenuPage;
