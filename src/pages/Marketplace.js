import React from "react";
import Graph from "../components/maindata/Graph";
import Maindata from "../components/maindata/Maindata";
import WhatWeOffer from "../components/offered/WhatWeOffer";
import Token from "../components/token/Token";
import Newsletter from "../components/newsletter/Newsletter";

const Marketplace = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#F7931E] dark:bg-[#243447]">
        <div className="container m-auto">
          <Graph />
          <Maindata />
        </div>
      </div>

      <div className="w-full bg-white text-black text-center drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)] dark:bg-[#0D1F31] dark:text-white">
        <WhatWeOffer />
      </div>

      <div className="w-full bg-white text-black text-center dark:bg-[#0D1F31] dark:text-white">
        <div className="container m-auto">
          <Token />
        </div>
      </div>

      <div className="w-full bg-white text-black text-center dark:bg-[#243447] dark:text-white">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Marketplace; 