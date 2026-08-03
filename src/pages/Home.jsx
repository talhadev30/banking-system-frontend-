import React from "react";
import Navbar from "../component/Navbar/Navebar";
import Hero from "../component/Home/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;