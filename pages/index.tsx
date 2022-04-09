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
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';

export default function Home() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setOpen(true), 10000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return (

    <div className="bg-black text-white ">
      <NavComponent />

      {/* <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <div className="max-w-xl">
            <div className="border-gradient-br-indigo-purple-pink-gray-900 border-transparent border-solid border-2 rounded-xl">
              <a className="close" onClick={closeModal}>
                &times;
              </a>
              <p className="text-center font-barcade text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500">Subscribe now</p>
              <p className="font-sans text-center text-lg py-5 px-1">
                Subscribe to receive our newsletter and further information on whitelist opportunities and drops.
              </p>
              <div className="flex justify-center items-stretch pb-5">
                <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-3/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-25 rounded-l-none rounded text-base font-medium leading-none text-white p-5 uppercase">subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </Popup> */}

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
