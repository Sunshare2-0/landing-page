import acquisition from "../../../assets/img/about/analysis.png";

const Acquisition = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div>
        <br></br>
        <br></br>
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Daily Forecast on Energy Acquisition
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[17px] drop-shadow-xl ">
          Predicts how much solar energy your system can collect throughout the day based on weather forecasts,
          historical data, and your current solar panel setup. A personalized report shows expected energy availability hour by hour,
          helping you allocate electricity to appliances more efficiently—preventing shortages and maximizing solar usage.
          Users are notified when production may drop due to overcast skies or technical inefficiencies and
          receive suggestions to adapt usage accordingly.
          <br></br>
          <br></br>
          Integrated reports summarize which appliances consumed the most electricity and suggest scheduling improvements
          to optimize energy savings. The forecast adjusts dynamically based on sensor data from the inverter and battery.
          This feature empowers households to plan their energy usage better, avoid over-reliance on grid supply, and improve
          long-term energy budgeting. Notifications and visual charts simplify tracking, helping users stay energy-aware throughout the day.
        </p>
      </div>

      <div className="">
        <img
          src={acquisition}
          className="object-scale-down w-[350px] h-[350px]"
          alt="acquisition"
        />
      </div>
    </div>
  );
};
export default Acquisition;
