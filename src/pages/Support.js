import React from "react";
import Contact from "../components/contact/Contact";
import SupportSect from "../components/opening/SupportSect";
import Faq from "../components/faq/Faq";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";
import supportBg from "../assets/img/support/Support_bg.jpg";

const Support = () => {
  return (
    <div
      className="w-full min-h-screen dark:text-white"
      style={{
        backgroundImage: `url(${supportBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="container m-auto">
          <SupportSect />
        </div>
      </div>

      <div id="contact-section" className="w-full dark:text-white" style={{ backgroundColor: 'rgba(232, 230, 230, 0.8)' }}>
        <div className="container m-auto px-[3vw]">
          <Contact />
        </div>
      </div>

      <div id="faq-section" className="w-full py-16 dark:text-white">
        <div className="container m-auto px-[3vw]">
          <div 
            className="rounded-2xl shadow-xl mx-auto max-w-6xl"
            style={{ backgroundColor: 'rgba(255, 193, 1, 0.73)' }}
          >
            <div className="p-8 lg:p-12 pb-20 lg:pb-20">
              <Faq />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center dark:text-white">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Support;
