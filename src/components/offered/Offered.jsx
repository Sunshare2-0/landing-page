import React, { useEffect } from "react";
import marketplace from "../../assets/img/offered/marketplace.svg";
import analysis from "../../assets/img/offered/analysis.svg";
import house from "../../assets/img/offered/house.svg";
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
      <div className="problem pt-20 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-10">
        <div className="sectionIntro text-center py-8" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
          <div className="small-title text-center">
            <div className="small-title-container">
              <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
              <h5 className="text-2xl text-[#FEA803] inline">PROBLEM WE ARE SOLVING</h5>
              <div className="right-dash text-[#FEA803] px-10 inline">-</div>
            </div>
          </div>
          <h2 className="mt-4 mb-8">Why Is Clean Energy Still This Hard?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1920px] pb-8">
          {/* Pain Point 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
            <BoltIcon className="w-16 h-16 text-[#FEA803] mb-4" />
            <h4 className="text-xl font-bold mb-4">Electricity is expensive.</h4>
            <p className="text-gray-600">Households in Baguio pay up to ₱19/kWh—among the highest in Southeast Asia.</p>
          </div>
          {/* Pain Point 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <SunIcon className="w-16 h-16 text-[#FEA803] mb-4" />
            <h4 className="text-xl font-bold mb-4">Solar energy goes to waste.</h4>
            <p className="text-gray-600">Most rooftop systems can't store or sell their excess power efficiently.</p>
          </div>
          {/* Pain Point 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-lg" data-aos="fade-up" data-aos-delay="750" data-aos-duration="1000">
            <ChartBarIcon className="w-16 h-16 text-[#FEA803] mb-4" />
            <h4 className="text-xl font-bold mb-4">The market lacks transparency.</h4>
            <p className="text-gray-600">Delayed data. Limited control. No local energy choice.</p>
          </div>
        </div>
      </div>
      {/* End Problem Section */}

      <div className="offer pt-10 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-32">
        {/* start title */}
        <div
          className="sectionIntro text-center py-16"
          data-aos="fade-down"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <div className="small-title text-center">
            <div className="small-title-container">
              <div className="left-dash text-[#FEA803] px-10 pt-1 inline">
                -
              </div>
              <h5 className="text-2xl text-[#FEA803] inline">FEATURE</h5>
              <div className="right-dash text-[#FEA803] px-10 inline">-</div>
            </div>
          </div>
          <h2>What We Offer</h2>
          <p>
            Transforming energy access through a decentralized platform for transparent, community-driven solar trading and smart management
          </p>
        </div>
        {/* end title */}

        {/* start marketplace */}
        <div className="marketplace grid md:grid-cols-2 md:grid max-w-[1920px] mb-20 md:mb-40">
          <div
            className="w-full mb-10 md:m-0"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <img className="m-auto" src={marketplace} alt="" />
          </div>
          <div
            className="flex flex-col justify-center md:items-start w-full h-full"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="marketplace-content text-left ml-0 md:ml-20">
              <h4>Blockchain Marketplace Feature</h4>
              <p>
                Showing nearby and newest listings of those who want to sell
                electricity along with relevant information that supports
                decision-making. Transactions are stored securely and verified
                with smart contracts.
              </p>
              <button
                className="mt-[30px] px-6 py-2
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        {/* end marketplace */}

        {/* start analysis */}
        <div className="analysis grid md:grid-cols-2 md:grid max-w-[1920px] mb-20 md:mb-40">
          <div
            className="flex flex-col justify-center md:items-start w-full h-full"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="analysis-content text-left mr-0 md:mr-20 mb-10 md:m-0">
              <h4>Daily Forecast on Energy Acquisition</h4>
              <p>
                Predicting how much energy can be acquired throughout the day.
                This helps manage the electricity consumed daily through reports
                that include the total energy consumed by every household
                device—providing an efficient method for monitoring and
                budgeting the resource wisely.
              </p>
              <button
                className="mt-[30px] px-6 py-2
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg"
              >
                See More
              </button>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <img className="m-auto" src={analysis} alt="" />
          </div>
        </div>
        {/* end analysis */}

        {/* start house */}
        <div className="house grid md:grid-cols-2 md:grid max-w-[1920px] mb-20 md:mb-40">
          <div
            className="w-full mb-10 md:m-0"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <img className="m-auto" src={house} alt="" />
          </div>
          <div
            className="flex flex-col justify-center md:items-start w-full h-full"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="house-content text-left ml-0 md:ml-20">
              <h4>Future Forecast on Energy Demands</h4>
              <p>
                Forecasting of the energy demands in both energy production and
                consumption. Reports include which time period produces or
                consumes more. This gives the users a better view of which time
                produces or consumes the highest for guided decision-making.
              </p>
              <button
                className="mt-[30px] px-6 py-2
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        {/* end house */}
      </div>
    </div>
  );
};

export default Offered;
