import demand from "../../../assets/img/about/demand.png";
const Demand = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center content-center">
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Future Forecast on Energy Demands
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl ">
          Predicts the energy demand of your home or community over the next few days using usage trends,
          time-of-day patterns, and previous weather conditions. These insights help manage battery reserves
          and schedule energy-intensive tasks during off-peak or surplus production hours. Users receive reports
          that indicate which hours are most demanding, helping them adjust behavior or automate smart devices accordingly.
          <br></br>
          <br></br>
          Forecasts show peak usage periods, optimal times for selling or storing energy, and suggest ideal transfer windows
          for marketplace participation. This visibility gives users more control over energy budgeting and allows better 
          coordination within energy-sharing networks. Graphs compare projected and actual usage to fine-tune habits. 
          This planning tool supports a more sustainable and efficient approach to both energy production and consumption, 
          reducing overall waste and increasing energy equity within the community.
        </p>
        {/*--End Demand--*/}
      </div>
      <div>
        <img
          src={demand}
          className="object-scale-down w-[500px] h-[500px]"
          alt="demand"
        />
      </div>
    </div>
  );
};

export default Demand;
