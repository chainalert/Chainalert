function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className=" w-[90%] grid dg:grid-cols-2 gap-10 mb-[50px] xs:mb-[0] mt-[65px]  "
        id="Home"
      >
        {/* Context div */}
        <div className="grid" id="Intro">
          <h1 className="font-satoshi-bold  text-[2.265rem] ">
            Accountability Layer for Blockchain Infrastructure
          </h1>
          <p className="font-satoshi  text-[1.125rem] mt-[25px] mb-[7%] ">
            A centralized intelligence layer helping infrastructure teams trace
            malicious funds, link abuse patterns, and proactively mitigate
            threats.
          </p>

          {/* Button div */}
          <div
            className="grid xs:grid-cols-2 w-[100%]  justify-items-center dg:justify-items-start "
            id="introButton"
          >
            <button
              className="bg-orange-400 mt-[30px] xs:mt-[0] rounded-[6px] w-[9em] h-[2.4em] flex justify-center items-center"
              id="signup"
            >
              <span className="font-inter mt-[3px] text-[1.1rem] ">REPORT</span>
            </button>
            <button
              className="flex justify-center mt-[30px] xs:mt-[0]  items-center w-[9rem] h-[2.4em]"
              id="learnMore"
            >
              <span className="text-orange-400  font-inter text-[1.1rem] underline flex items-center justify-center">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Intro Stats */}
        <div
          className="w-[100%]  grid xs:grid-cols-2 xs:grid-rows-2 gap-y-[10%] gap-x-[5%] "
          id="introStats"
        >
          {/* Supported Network Stats */}
          <div
            className="border-[2px]  border-gray-400 rounded-[15px]"
            id="networkSupported"
          >
            <span
              className="text-[8vmin] w-[100%] h-[60%] flex justify-center items-center font-bold text-gray-300"
              id="networkCount"
            >
              0
            </span>
            <span
              className="text-[1em] w-[100%] h-[40%] flex justify-center font-semibold"
              id="network"
            >
              Network
            </span>
          </div>

          {/* Funds Lost Stats */}
          <div
            className="border-[2px] border-gray-400 rounded-[15px]"
            id="fundsLostDiv"
          >
            <span
              className="text-[8vmin] w-[100%] h-[60%] flex justify-center items-center font-bold text-gray-300"
              id="fundLost"
            >
              0
            </span>
            <span
              className="text-[1em] w-[100%] h-[40%] flex justify-center font-semibold"
              id="fundLost"
            >
              Funds Lost
            </span>
          </div>

          {/* Address Reported Stats */}
          <div
            className="border-[2px] border-gray-400 rounded-[15px]"
            id="addressReportedDiv"
          >
            <span
              className="text-[8vmin] w-[100%] h-[60%] flex justify-center items-center font-bold text-gray-300"
              id="addressCount"
            >
              0
            </span>
            <span
              className="text-[1em] w-[100%] h-[40%] flex justify-center font-semibold"
              id="address"
            >
              Address
            </span>
          </div>

          {/* Contract Reported Stats */}
          <div
            className="border-[2px] border-gray-400 rounded-[15px]"
            id="contractReportsDiv"
          >
            <span
              className="text-[8vmin] w-[100%] h-[60%] flex justify-center items-center font-bold text-gray-300"
              id="reportCount"
            >
              0
            </span>
            <span
              className="text-[1em] w-[100%] h-[40%] flex justify-center font-semibold"
              id="totalReport"
            >
              Total Report
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
