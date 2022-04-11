import Link from "next/link";
import * as React from "react";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import AboutUs from "../components/AboutUs/AboutUs";
import Income from "../components/Income/Income"
import NewsLetterFeed from "../components/NewsLetterFeed";
import NavComponent from "../components/NavComponent";
import RoadMap from "../components/Roadmap/RoadMap"
import Team from "../components/Team/Team"
import Partners from "../components/Partners/Partners";
import { FAQ } from "../components/FAQ"
import Pop from "../components/Pop/Pop"

export default function Home() {
 

  return (

    <div className="bg-black text-white ">
      <NavComponent />
      <Pop/>
      <HomePage />
      <AboutUs />
      <RoadMap />
      <Income />
      <Team />
      <Partners />
      <FAQ />
      <NewsLetterFeed />
      <Footer />
    </div>
  );
}
