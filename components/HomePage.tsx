/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";
import CountDownTimer from "./CountDownTimer/CountDownTimer"
import ConnectWallet from "./ConnectWallet.js"

export default function Home() {
  const THREE_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <section id="homepage">
    <div className="container mx-auto py-10 flex flex-wrap justify-around items-center px-4">
      <div className="max-w-2xl ">
        {/* <>
        <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        </> */}
      </div>
      <div className="flex-end">
        <img src="/anobg.jpg" alt="anon" className="rounded-3xl" />
      </div>
    </div>
    </section>
  );
}
