import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function AboutUs() {
  return (
    <>
      <Header />
      <section className="w-[80%] dg:w-[50%]  " id="AboutUsPage">
        {/* Heading */}
        <div className="pr-13 justify-center flex m-20" id="contactHeading">
          <h1 className="font-satoshi-bold text-[3rem]">ChainAlert</h1>
        </div>
        <div className="" id="aboutUs">
          <h1 className="font-bold text-[1.8rem]">
            ChainAlert: One Hash at a Time
          </h1>
          <p className="font-satoshi text-[1.125rem] mt-[10px] xs:text-justify">
            At ChainAlert we are building the foundation for a safer blockchain
            ecosystem by enabling users to report confirmed fraudulent activity
            such as scams, phishing, and malicious contracts directly from their
            wallets.
          </p>
        </div>
        <div className="mt-[50px]" id="missionVision">
          <h1 className="font-bold text-[1.4rem]">Mission & Vision </h1>
          <p className="font-satoshi text-[1.125rem] mt-[10px] xs:text-justify">
            To bring clarity and accountability to the blockchain space by
            documenting and tracking verifiable fraud, enabling faster response,
            public awareness, and fund tracing. We envision a unified reporting
            database that integrates seamlessly into wallets and blockchain
            infrastructure, offering trustworthy intelligence on real scams. By
            focusing on on-chain fraud only, we ensure actionable insights while
            helping protect users, developers, and communities from preventable
            losses.
          </p>
          <p className="font-satoshi"></p>
        </div>
        <div
          className="mt-[50px] flex justify-center items-center"
          id="partnerButton"
        >
          <button
            className="border border-orange-400 rounded-[7px] font-bold bg-orange-400 w-[10em] h-[40px]"
            id="Partner"
          >
            Join Us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
