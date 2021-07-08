import React from "react";
import Layout from './Shared/Layout'
import Hero from "./Hero/Hero";
import MainSection from "./Main-Section/MainSection";
import FeaturedCollection from "./FeaturedCollection/FeaturedCollection";

function Home() {
  return (
    //Use fragment
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
}

export default Home;
