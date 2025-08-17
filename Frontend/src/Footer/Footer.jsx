import Media from "./Media";

function Footer() {
  return (
    <>
      {/* Border div */}
      <section
        className="w-[100%] h-[20vh] bg-black border-b-[2px] border-gray-400"
        id="Section10"
      ></section>
      <footer
        className="w-[100%] h-[100%] text-white grid bg-black justify-items-center mt-[50px]"
        id="Footer"
      >
        <Media />
        <section
          className="w-[100%] h-[60px] flex justify-center items-cente mt-[30px] mb-[30px]"
          id="Section15"
        >
          <div
            class="w-[80%]  flex flex-wrap justify-center items-center"
            id="Copy_Right"
          >
            <div class=" text-[1rem] ml-[5px]">
              <i class="fa-regular fa-copyright"></i>
            </div>
            <div class="font-satoshi text-[1rem] ml-[5px]">
              <p> 2025 </p>
            </div>
            <div class="font-satoshi-bold text-[1rem] ml-[5px] font-bold">
              <h4> ChainAlert </h4>
            </div>
            <div class="font-satoshi text-[1rem] ml-[5px]">
              <p> All Rights Reserved </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
