import React, { useEffect } from "react";
import "../../index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import cloudLeft1 from "../../assets/img/hero/cloud_left_1.png";
import cloudLeft2 from "../../assets/img/hero/cloud_left_2.png";
import cloudRight1 from "../../assets/img/hero/cloud_right_1.png";
import cloudRight2 from "../../assets/img/hero/cloud_right_2.png";
// import sun1 from '../../assets/img/hero/sun_1.png'
// import sun2 from '../../assets/img/hero/sun_2.png'
// import sun3 from '../../assets/img/hero/sun_3.png'
// import sun4 from '../../assets/img/hero/sun_4.png'
import sun from "../../assets/img/hero/sun_gif.gif";
import panel from "../../assets/img/hero/panel.png";
import land from "../../assets/img/hero/land.png";
import useMouseMoveHook from "../../hooks/useMouseMoveHook";
import ucLogo from '../../assets/img/hero/UC Logo.png';
import inttoLogo from '../../assets/img/hero/InTTO Logo.png';
import dostLogo from '../../assets/img/hero/DOST Logo.png';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    document.addEventListener("mousemove", useMouseMoveHook, true);
  }, []);

  return (
    <div className="w-full h-full hero-image bg-no-repeat bg-cover bg-bottom flex flex-col justify-between md:h-[85vh]">
      <div className="grid md:grid-cols-2 max-w-[1920px] m-auto drop-shadow-xl">
        {/* Start Hero Title */}
        <div
          className="flex flex-col justify-center md:items-start w-full h-full px-2 py-8 pl-10"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <h1 className="mt-32  sm:mt-[30px] font-Space-Grotesk font-black text-[30px] text-center sm:text-left sm:text-[50px] mr-0 md:mr-3 lg:mr-4 xl:mr-8 2xl:mr-10">
            Power Your Community. Trade Clean Energy.
          </h1>

          <p className="mt-[10px] sm:mt-[30px] font-Space-Grotesk font-normal text-[15px] text-center sm:text-left sm:text-[20px] drop-shadow-xl background-image mr-0 md:mr-3 lg:mr-4 xl:mr-8 2xl:mr-72">
          A blockchain-powered peer-to-peer (P2P) energy marketplace that lets you sell and buy solar energy locally—securely, transparently, and in real time.
          </p>

          <button
            className="mt-[30px] mx-32 sm:mx-0 px-6 py-2
                           drop-shadow-xl
                           bg-black
                           text-white
                           border-2 border-black
                           transition-all
                           hover:bg-[#171717]
                           rounded-lg
                           "
          >
            Get Early Access
          </button>

          <div className="mt-[10px] text-center sm:mt-[30px] flex justify-center items-center gap-8">
            <button className="p-0 rounded-full transition-all drop-shadow-xl hover:text-[#171717]">
              {/* UC Logo */}
              <img src={ucLogo} alt="UC Logo" className="w-17 h-24 object-contain" />
            </button>

            <button className="p-0 rounded-full transition-all drop-shadow-xl hover:text-[#171717]">
              {/* InTTO Logo */}
              <img src={inttoLogo} alt="InTTO Logo" className="w-24 h-24 object-contain" />
            </button>

            <button className="p-0 rounded-full transition-all drop-shadow-xl hover:text-[#171717]">
              {/* DOST */}
              <img src={dostLogo} alt="DOST Logo" className="w-24 h-16 object-contain" />
            </button>
          </div>
        </div>
        {/* End Hero Title */}

        {/* Start Parallax Logo */}
        <div
          className="md:items-start w-full h-[80vh]"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="relative w-full h-full flex justify-center">
            <img
              src={cloudLeft1}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="cloud"
              data-value="-2"
            />
            <img
              src={sun}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="sun"
              data-value="4"
            />
            <img
              src={cloudRight1}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="cloud"
              data-value="7"
            />
            <img
              src={panel}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="solar panel"
              data-value="8"
            />
            <img
              src={land}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="land"
              data-value="10"
            />
            <img
              src={cloudLeft2}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="cloud"
              data-value="12"
            />
            <img
              src={cloudRight2}
              className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
              alt="cloud"
              data-value="9"
            />
          </div>
        </div>
        {/* End Parallax Logo */}
      </div>
    </div>
  );
};

export default Hero;
