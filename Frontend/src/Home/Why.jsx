import Icon from "../assets/svg/Icon";
import ConnectIcon from "../assets/svg/ConnectIcon";
import ShieldIcon from "../assets/svg/ShieldIcon";

function WhyReport() {
  return (
    <>
      {/* Why Report */}
      <section
        className=" w-[80%] h-[250px] grid justify-center items-center"
        id="whyReport"
      >
        <h1 className="font-bold text-[2.4em] xs:text-[8vmin]">Why Report?</h1>
      </section>

      {/* Recovery Text */}
      <section
        className="w-[80%] mb-[50px] md:w-[90%] grid md:grid-cols-5 items-center"
        id="recovery"
      >
        <div
          className=" md:col-span-2  flex justify-center items-center"
          id="recoveryIcon"
        >
          <div className=" w-[250px] h-[250px] sm:w-[300px] sm:h-[280px]  flex justify-center items-center">
            <Icon sizex={300} sizey={300} />
          </div>
        </div>
        <div
          className="  h-[80%] w-[100%] lg:w-[80%] md:col-span-3 grid justify-center items-center"
          id="recoveryText"
        >
          <h1 className=" font-satoshi-bold w-[100%] h-[100%] text-[2rem] font-bold ">
            Increase Fund Recovery Efforts
          </h1>
          <p className="mt-[40px]  md:mt-[10px] font-satoshi w-[100%] h-[100%] text-[1.125rem] sm:text-justify">
            By making abuse visible and trackable across chains, we create a
            more transparent, secure, and credible foundation for decentralized
            innovation.
          </p>
          <button
            className=" flex justify-start underline text-orange-400"
            id="Support_Button"
          >
            <span className="text-[1.125rem]">REPORT YOUR CASE </span>
          </button>
        </div>
      </section>

      {/* Collective awareness Text */}
      <section
        className=" w-[80%] mb-[50px] items-center grid md:grid-cols-5 md:relative md:left-[2%] "
        id="collective"
      >
        <div
          className=" md:col-start-4 md:col-end-6 md:row-end-1  grid justify-center items-center"
          id="collectiveIcon"
        >
          <div className=" w-[250px]   flex justify-center items-center">
            <ConnectIcon sizex={250} sizey={250} />
          </div>
        </div>
        <div
          className=" md:mt-[0]   h-[80%]  grid justify-center md:col-start-1 md:col-end-4 "
          id="collectiveText"
        >
          <h1 className="font-satoshi-bold w-[100%] h-[100%] text-[2rem] font-bold ">
            Strengthen Collective Awareness
          </h1>
          <p className="font-satoshi mt-[10px] mb-[20px]  w-[100%] h-[100%] text-[1.125rem] sm:text-justify">
            Consistent reporting builds transparency and accountability. When
            scams are actively reported and tracked, it discourages fraudulent
            activity and nurtures a safer, more reliable community for all.
          </p>
          <button
            className="flex justify-start underline text-orange-400"
            id="Part_Button"
          >
            <span className="text-[1.125rem]"> BECOME A PART</span>
          </button>
        </div>
      </section>

      {/* Ecosystem/Shield Text */}
      <section
        className="w-[80%] md:w-[90%] grid md:grid-cols-5 items-center mb-[50px] md:mb-[0]"
        id="shield"
      >
        <div
          className=" md:col-span-2  flex justify-center items-center"
          id="shieldIcon"
        >
          <div className=" w-[250px] h-[250px] sm:w-[300px] sm:h-[280px]  flex justify-center items-center">
            <ShieldIcon sizex={320} sizey={280} />
          </div>
        </div>
        <div
          className="  h-[80%] w-[100%] lg:w-[80%] md:col-span-3 grid justify-center items-center"
          id="shieldText"
        >
          <h1 className=" font-satoshi-bold w-[100%] h-[100%] text-[2rem] font-bold ">
            Foster a Trustworthy Ecosystem
          </h1>
          <p className="mt-[40px]  md:mt-[0px] font-satoshi w-[100%] h-[100%] text-[1.125rem] sm:text-justify">
            Every report becomes part of a unified dataset, creating a real-time
            threat intelligence network. As more platforms participate, the
            entire ecosystem becomes smarter and safer.
          </p>
          <button
            className=" flex justify-start underline text-orange-400"
            id="Support_Button"
          >
            <span className="text-[1.125rem]">REPORT YOUR CASE </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default WhyReport;
