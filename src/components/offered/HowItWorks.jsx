import React, { useEffect } from "react";
import { SunIcon, BoltIcon, CurrencyDollarIcon, UserIcon, CogIcon, ChartBarIcon } from "@heroicons/react/24/outline";

import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="w-full h-full flex flex-col justify-between font-space-grotesk">
      <div className="container m-auto offer pt-16 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-40">
        {/* title */}
        <div
          className="sectionIntro text-center py-20"
          data-aos="fade-down"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <div className="small-title text-center">
            <div className="small-title-container">
              <div className="left-dash text-[#FEA803] px-12 pt-1 inline">
                -
              </div>
              <h5 className="text-3xl text-[#FEA803] inline">HOW IT WORKS</h5>
              <div className="right-dash text-[#FEA803] px-12 inline">-</div>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">How SunShare Works</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A seamless, transparent way to buy and sell clean energy—right in your community.
          </p>
        </div>
        {/* end title */}

        {/* For Solar Panel Owners (Producers) */}
        <div className="producers-section mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">For Solar Panel Owners (Producers)</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-[1920px]">
            {/* Step 1 */}
            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-6 mb-6">
                <CogIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-16">
                Step 1: <br /> 
                Connect Your <br />
                Solar System
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Install a SunShare-certified smart meter and link your account to start tracking surplus energy in real-time.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-6 mb-6">
                <CurrencyDollarIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-20">
                Step 2: <br /> 
                Set Your <br />
                Price
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                List your available energy in the SunShare marketplace. Set your own price or let smart pricing suggest competitive rates.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200"
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-6 mb-6">
                <SunIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-20">
                Step 3: <br />
                Start <br />
                Earning
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your excess solar energy is automatically sold to verified consumers nearby. You get paid instantly via blockchain-powered smart contracts.
              </p>
            </div>
          </div>
        </div>

        {/* For Consumers (Energy Buyers) */}
        <div className="consumers-section">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">For Consumers (Energy Buyers)</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-[1920px]">
            {/* Step 1 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-6 mb-6">
                <UserIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-20">
                Step 1: <br />
                Create Your <br />
                Account
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sign up in minutes and verify your meter and location to see available solar offers in your area.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-6 mb-6">
                <BoltIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-16">
                Step 2: <br />
                Choose Your <br />
                Energy Source
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Browse local producers, compare prices, and subscribe to the one that fits your needs. No hardware required.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200"
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="1000"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-6 mb-6">
                <ChartBarIcon className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 w-full text-center pl-20">
                Step 3: <br />
                Save and <br />
                Track
                </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Start receiving clean, affordable solar energy directly from the grid—see your savings, source, and impact in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 