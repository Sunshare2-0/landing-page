import marketPlace from "../../../assets/img/about/marketplace.png";
const MarketPlace = () => {
  return (
    <div className="lg:grid grid-cols-2 w-full">
      {/*--Marketplace--*/}
      <div>
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Blockchain Marketplace Feature
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full xl:h-[60] font-Poppins font-normal text-[15px] sm:text-left sm:text-[17px] drop-shadow-xl ">
          Shows nearby and the latest listings of individuals offering surplus solar energy.
          Each listing includes energy quantity, price in Sunshare Tokens, and estimated delivery time.
          Transactions are recorded securely on the blockchain and verified through smart contracts to ensure transparency and prevent fraud.
          Smart contract automation guarantees both buyer and seller protection by locking the energy and tokens until both
           parties fulfill their commitments. A map-based interface helps users find energy sellers within range.
           Listings refresh in real-time to reflect current energy availability and demand.
          <br></br>
          <br></br>
          Secure trading is further enhanced with energy ratings, availability forecasts, and seller profiles.
          Transactions are recorded with full traceability, and decentralized ledger technology ensures all records are tamper-proof.
          Each exchange uses Sunshare Token as currency, tracked by blockchain verification and linked to smart meters for accuracy.
          Users can also see estimated cost savings, delivery time, and carbon reduction per transaction.
          The marketplace empowers communities to share excess power, reduce dependency on large grids, and move toward decentralized energy independence.
        </p>
      </div>

      <div className="">
        <img src={marketPlace} className="w-auto h-auto" alt="marketplace" />
      </div>
      {/*--End Marketplace--*/}
    </div>
  );
};

export default MarketPlace;
