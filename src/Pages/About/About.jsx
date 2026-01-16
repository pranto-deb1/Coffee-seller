import React from "react";
import Banner from "../../SharedComponents/Banner";
import Details from "../HomePage/Components/Details/Details";
import AboutBanner from "./Components/AboutBanner";
import WorkersSection from "./Components/Workers/WorkersSection";
import FAQ from "./Components/Faq/FAQ";
import AboutTestimonials from "./Components/Testimonials/AboutTestimonials";

import InspirationGallery from "../../SharedComponents/InspirationGallery";
const About = () => {
  const bannerContent = {
    title: "About Us",
    description:
      "Learn more about Cafeteria TNC, our story, mission, and values.",
  };
  return (
    <div className="min-h-screen">
      <Banner content={bannerContent}></Banner>

      <Details></Details>

      <AboutBanner></AboutBanner>

      <WorkersSection></WorkersSection>

      <FAQ></FAQ>

      <AboutTestimonials></AboutTestimonials>

      <InspirationGallery></InspirationGallery>
    </div>
  );
};

export default About;
