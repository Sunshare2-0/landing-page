import React from "react";
import Faqbutton from "./Faqbutton";

const Faq = () => {
  return (
    <div className="pt-20">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#ffff] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#ffff] inline">FAQS</h5>
          <div className="right-dash text-[#ffff] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-14">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="w-full lg:max-w-4xl lg:mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <Faqbutton 
            question="Who can join SunShare as a solar producer?"
            answer="Anyone with a grid-connected rooftop solar system (typically above 1kWp) and a smart meter can register, provided you're within an eligible distribution utility area. We're starting with Baguio City."
          />
          <Faqbutton 
            question="How is SunShare different from Net Metering?"
            answer={"Net Metering credits your bill at fixed rates. SunShare lets you sell excess energy directly to local consumers at competitive prices— \ngiving you potentially higher returns and full control."} 
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Faqbutton 
            question="Do I need to install anything as a consumer?"
            answer="No. As long as you have a standard utility connection and are within our coverage area, you can start buying clean energy through the platform without installing any hardware."
          />
          <Faqbutton 
            question="How are energy transactions secured?"
            answer="All transactions on SunShare are recorded on a blockchain ledger. Smart contracts automate the buying and selling process, ensuring transparency, security, and instant settlement."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
