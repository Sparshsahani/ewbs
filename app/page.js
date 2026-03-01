import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import WhatToChat from "@/pages/banner/WhatToChat";
import Hero from "@/pages/heroSection/Hero";
import Banner from "@/pages/section2/Banner";
import Client from "@/pages/section3/Client";
import Provide from "@/pages/section3/Provide";
import About from "@/pages/section4/About";
import Question from "@/pages/section5/Question";
import Achievements from "@/pages/section6/Achievements";
import Reviews from "@/pages/section7/Reviews";
import Latest from "@/pages/section8/Latest";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Client />
      <Provide />
      <About />
      <Achievements />
      <Reviews />
      <Question />
      <Latest />
      <WhatToChat />
      <MapSection />
      <Footer/>
    </>
  );
}
