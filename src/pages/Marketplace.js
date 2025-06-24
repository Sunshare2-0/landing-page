import React from "react";
import Graph from "../components/maindata/Graph";
import Maindata from "../components/maindata/Maindata";

const Marketplace = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#F7931E] dark:bg-[#243447]">
        <div className="container m-auto">
          <Graph />
          <Maindata />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Marketplace; 