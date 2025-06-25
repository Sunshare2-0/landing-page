import React, { useEffect } from "react";
import { BoltIcon, SunIcon, ChartBarIcon } from "@heroicons/react/24/outline";

import AOS from "aos";
import "aos/dist/aos.css";

const Offered = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="w-full h-full flex flex-col justify-between font-space-grotesk">
      {/* Problem We Are Solving Section */}
      <div className="bg-[#F7931E] dark:bg-[#243447]">
        <div className="container m-auto problem pt-20 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-10">
          <div
            className="sectionIntro text-center py-8"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="small-title text-center">
              <div className="small-title-container">
                <div className="left-dash text-white px-10 pt-1 inline">
                  -
                </div>
                <h5 className="text-2xl text-white inline">
                  PROBLEM WE ARE SOLVING
                </h5>
                <div className="right-dash text-white px-10 inline">-</div>
              </div>
            </div>
            <h2 className="mt-4 mb-8 text-white">
              Why Is Clean Energy Still This Hard?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1920px] pb-8">
            {/* Pain Point 1 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <BoltIcon className="w-16 h-16 text-[#FEA803] mb-4" />
              <h4 className="text-xl font-bold mb-4">
                Electricity is expensive.
              </h4>
              <p className="text-gray-600">
                Households in Baguio pay up to ₱19/kWh—among the highest in
                Southeast Asia.
              </p>
            </div>
            {/* Pain Point 2 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <SunIcon className="w-16 h-16 text-[#FEA803] mb-4" />
              <h4 className="text-xl font-bold mb-4">
                Solar energy goes to waste.
              </h4>
              <p className="text-gray-600">
                Most rooftop systems can't store or sell their excess power
                efficiently.
              </p>
            </div>
            {/* Pain Point 3 */}
            <div
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="1000"
            >
              <ChartBarIcon className="w-16 h-16 text-[#FEA803] mb-4" />
              <h4 className="text-xl font-bold mb-4">
                The market lacks transparency.
              </h4>
              <p className="text-gray-600">
                Delayed data. Limited control. No local energy choice.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Problem Section */}
    </div>    
  );
};

export default Offered;
