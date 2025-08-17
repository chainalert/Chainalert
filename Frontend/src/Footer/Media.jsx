import Icon from "../assets/svg/Icon";
import LogoText from "../assets/svg/logoText";
import { Link } from "react-router-dom";
function Media() {
  return (
    <>
      <section
        className="w-[100%] h-[55vh] gap-y-[5vh] sm:h-[23vh] grid grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-4"
        id="Section13"
      >
        {/* Footer Logo */}
        <div
          className="w-[100%] flex flex-wrap justify-center md:justify-start items-center pl-[15%]"
          id="footerLogo"
        >
          <div className="flex justify-center  h-[50px] " id="logoDiv">
            <Icon sizex={40} sizey={50} />
            <LogoText />
          </div>

          {/* Tagline */}
          <div className="font-satoshi-bold" id="Footer_Tag_Line">
            <h1 className="font-bold text-[1.2em] ">One Hash at a Time</h1>
          </div>

          {/* Media Box */}
          <div className="flex flex-wrap" id="mediaBox">
            <a
              href="https://x.com/Chainalertorg"
              class="text-[1.4rem] ml-[20px]"
              target="_blank"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://linkedin.com/company/chainalert"
              class="text-[1.4rem] ml-[20px]"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@chainalert"
              class="text-[1.4rem]  ml-[20px]"
              target="_blank"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* other Pages */}
        <div
          className="w-[100%] flex flex-wrap justify-center items-center pl-[35%]"
          id="otherPage"
        >
          <Link to="/soon" className="w-[100%] text-[1rem]">
            Blogs
          </Link>

          <Link to="/soon" className="w-[100%] text-[1rem]">
            Document
          </Link>
        </div>

        {/* Support */}
        <div
          className="w-[100%] flex flex-wrap justify-center items-center pl-[15%] xs:pl-[20%] sm:pl-[35%]"
          id="Footer_Support_Div"
        >
          <Link to="/contactus" className="w-[100%] text-[1rem]">
            Contact Us
          </Link>

          <Link to="/aboutus" className="w-[100%] text-[1rem]">
            About Us
          </Link>
        </div>

        {/* About us */}
        <div
          className="w-[100%] flex flex-wrap justify-center items-center pl-[35%]"
          id="Footer_About_Us_Div"
        >
          <Link to="/policy" className="w-[100%] text-[1rem]">
            Privacy Policy
          </Link>
          <Link to="/" className="w-[100%] text-[1rem]">
            Terms Of Use
          </Link>
        </div>
      </section>
    </>
  );
}

export default Media;
