import React from "react";
import Hero from "./Components/Hero/Hero";

import Details from "./Components/Details/Details";

import PopularMenu from "./Components/popular/PopularMenu";
import FeaturedMenu from "./Components/Featured/FeaturedMenu";
import Testimonials from "./Components/Testimonial/Testimonials";
import MenuSection from "./Components/Menu/MenuSection";
import ImageGallery from "./Components/Gallery/ImageGallery";
import BlogSection from "./Components/Blog/BlogSection";
import InspirationGallery from "../../SharedComponents/InspirationGallery";
import HomePageBanner from "./Components/Banner/HomePageBanner";

const Home = () => {
  return (
    <div className="bg-[url('/assets/sectionBG.png')] bg-fixed bg-cover bg-center">
      <Hero></Hero>
      <Details></Details>
      <FeaturedMenu></FeaturedMenu>
      <PopularMenu></PopularMenu>
      <Testimonials></Testimonials>
      <MenuSection></MenuSection>
      <ImageGallery></ImageGallery>
      <HomePageBanner></HomePageBanner>
      <BlogSection></BlogSection>
      <InspirationGallery></InspirationGallery>
    </div>
  );
};

export default Home;
