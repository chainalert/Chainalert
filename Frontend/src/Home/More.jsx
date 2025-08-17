function WhatsMore() {
  return (
    <>
      {/* Whats More */}
      <section
        className=" w-[80%] h-[250px] flex justify-center items-center "
        id="whatMore"
      >
        <div className="" id="More_Heading">
          <h1 className="font-bold text-[8vmin]"> What's More? </h1>
        </div>
      </section>

      {/* Privacy context */}
      <section
        className="w-[80%] h-[100%] md:pb-[50px] grid md:grid-cols-2 items-center relative lg:right-[2%]"
        id="privacycontext"
      >
        <div
          className="w-[100%] h-[150px] md:h-[100px]  flex justify-center  items-center"
          id="Priority_Heading"
        >
          <h1 className="font-satoshi-bold text-[1.8rem]">
            "Your Privacy, Our Priority"
          </h1>
        </div>
        <div
          className="w-[100%] flex justify-center items-center md:ml-[5%] "
          id="Priority_Para"
        >
          <p className="font-satoshi text-[1.125rem] sm:text-justify">
            We only collect necessary public blockchain data for scam
            verification. No personal details are stored or shared without your
            explicit consent.
          </p>
        </div>
      </section>

      {/* Trust and safty */}
      <section
        className="w-[80%] h-[100%] grid md:grid-cols-2 relative lg:right-[2%]"
        id="trustContext"
      >
        <div
          className="w-[100%] h-[150px] md:h-[100px] justify-center  flex  items-center"
          id="Safety_Heading"
        >
          <h1 className="font-satoshi-bold text-[1.8rem]">
            "Trust and Safety Guaranteed"
          </h1>
        </div>
        <div
          className="w-[100%] flex justify-center items-center md:ml-[5%] "
          id="Safety_Para"
        >
          <p className="font-satoshi text-[1.125rem] sm:text-justify">
            Our advanced spam detection and verification systems keep Chain
            Alert safe for everyone providing you with a reliable and
            confidential platform to report scams.
          </p>
        </div>
      </section>

      {/* Confidence */}
      <section
        className="w-[80%] h-[100%] md:pt-[20px] grid md:grid-cols-2 relative lg:right-[2%]"
        id="Confidence"
      >
        <div
          className="w-[100%] h-[150px] md:h-[100px] justify-center  flex  items-center"
          id="Secure_Heading"
        >
          <h1 className="font-satoshi-bold text-[1.8rem]">
            "Report with Confidence"
          </h1>
        </div>
        <div
          className="w-[100%] flex justify-center items-center md:ml-[5%] "
          id="Secure_Para"
        >
          <p className="font-satoshi text-[1.125rem] sm:text-justify">
            Your reports are processed securely, and your identity remains
            protected. Information is only shared with law enforcement if you
            choose to do so.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhatsMore;
