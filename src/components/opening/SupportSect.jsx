import React from "react";

const SupportSect = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-14 md:mx-32 lg:pb-20 px-[4vw] ">
      <h2 className="pt-10 font-Space-Grotesk font-black text-[30px] text-center sm:text-[50px]">
        We'd love to hear from you
      </h2>
      <p className="text-center py-5 lg:mx-32 xl:mx-48 2xl:mx-96 text-white" style={{ textShadow: '3px 3px 12px rgba(0, 0, 0, 1), 1px 1px 6px rgba(0, 0, 0, 0.9)' }}>
        We strive to provide the best support, always. If you have a question
        about the Sunshare Marketplace App, please let us know. We'd love to
        help you.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <button
          onClick={() => scrollToSection('contact-section')}
          className="w-48 px-8 py-4 bg-[#FEA803] text-white font-semibold rounded-lg hover:bg-[#e69500] transition-colors duration-200 text-lg"
        >
          Contact Us
        </button>
        <button
          onClick={() => scrollToSection('faq-section')}
          className="w-48 px-8 py-4 bg-black text-[#FEA803] font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg"
        >
          FAQs
        </button>
      </div>
    </div>
  );
};

export default SupportSect;
