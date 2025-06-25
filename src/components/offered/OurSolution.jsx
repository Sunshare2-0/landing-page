import React, { useEffect } from "react";
import { SunIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon, GlobeAltIcon, UserGroupIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
// Add your custom image imports here:
// import solarProducerImage from "../../assets/img/solution/solar-producer.png";
// import energyConsumerImage from "../../assets/img/solution/energy-consumer.png";

import AOS from "aos";
import "aos/dist/aos.css";

const OurSolution = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="w-full h-full flex flex-col justify-between font-space-grotesk">
      <div className="container m-auto offer pt-16 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-40">
        {/* start title */}
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
              <h5 className="text-3xl text-[#FEA803] inline">OUR SOLUTION</h5>
              <div className="right-dash text-[#FEA803] px-12 inline">-</div>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">SunShare: A Local Energy Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're producing energy or simply want cheaper, cleaner power—SunShare gives you full control.
          </p>
        </div>
        {/* end title */}

        {/* For Solar Panel Owners */}
        <div className="solar-owners grid md:grid-cols-2 md:grid max-w-[1920px] mb-32 md:mb-48">
          <div
            className="w-full mb-12 md:m-0"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-12 h-full flex items-center justify-center">
              {/* Replace icon if needed. Placeholder for now */}
              <SunIcon className="w-40 h-40 text-white" />
              {/* example: <img src={solarProducerImage} alt="Solar Panel Owner" className="w-full h-auto max-w-md" /> */}
            </div>
          </div>
          <div
            className="flex flex-col justify-center md:items-start w-full h-full"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="solar-content text-left ml-0 md:ml-24">
              <h4 className="text-4xl font-bold mb-6">For Solar Panel Owners</h4>
              <h5 className="text-2xl font-semibold mb-6 text-[#FEA803]">Turn Sunshine Into Income.</h5>
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                Don't let your excess solar power go to waste. With SunShare, you can sell surplus energy directly to nearby consumers—at a better rate than net metering and without needing a large upfront system.
              </p>
              
              <div className="benefits mb-8">
                <h6 className="font-semibold mb-4 text-lg">Benefits</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CurrencyDollarIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Earn More - Set your own price and get paid instantly via blockchain</span>
                  </div>
                  <div className="flex items-start">
                    <BoltIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Real-Time Trading - Match with verified local buyers</span>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Secure & Transparent - Full visibility into every transaction</span>
                  </div>
                  <div className="flex items-start">
                    <ChartBarIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Smart Analytics - Track your production, sales, and impact</span>
                  </div>
                </div>
              </div>
              
              <button
                className="px-8 py-4
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg
                           font-semibold
                           text-lg"
              >
                Join as a Producer
              </button>
            </div>
          </div>
        </div>

        {/* For Consumers */}
        <div className="consumers grid md:grid-cols-2 md:grid max-w-[1920px] mb-32 md:mb-48">
          <div
            className="flex flex-col justify-center md:items-start w-full h-full"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="consumer-content text-left mr-0 md:mr-24 mb-12 md:m-0">
              <h4 className="text-4xl font-bold mb-6">For Consumers</h4>
              <h5 className="text-2xl font-semibold mb-6 text-[#FEA803]">Buy Clean Energy. Save Money.</h5>
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                Cut your electricity costs and reduce your carbon footprint. SunShare lets you buy clean solar power directly from local producers—no need for solar panels or equipment.
              </p>
              
              <div className="benefits mb-8">
                <h6 className="font-semibold mb-4 text-lg">Benefits</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CurrencyDollarIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Lower Rates - Pay less than standard utility prices</span>
                  </div>
                  <div className="flex items-start">
                    <UserGroupIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Choose Your Source - View producer profiles and energy ratings</span>
                  </div>
                  <div className="flex items-start">
                    <GlobeAltIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">Make an Impact - Support your community and the environment</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowPathIcon className="w-6 h-6 text-[#FEA803] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">No Lock-In - Flexible, secure, and cancel anytime</span>
                  </div>
                </div>
              </div>
              
              <button
                className="ml-[230px] px-8 py-4
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg
                           font-semibold
                           text-lg"
              >
                Join as a Consumer
              </button>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-12 h-full flex items-center justify-center">
              {/* Replace icon if needed. Placeholder for now */}
              <BoltIcon className="w-40 h-40 text-white" />
              {/* Example: <img src={energyConsumerImage} alt="Energy Consumer" className="w-full h-auto max-w-md" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolution; 