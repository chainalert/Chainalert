import Icon from "../assets/svg/Icon";
import LogoText from "../assets/svg/logoText";
function Header() {
  return (
    <>
      <section className=" container mx-auto flex  ">
        {/* Logo */}
        <div className="">
          <div className="flex justify-center " id="logoDiv">
            <Icon sizex={50} sizey={60} />
            <LogoText sizex={200} sizey={60} />
          </div>
        </div>
      </section>
      <section
        className="w-[100%] bg-black border-b-[2px] border-gray-400"
        id="Section10"
      ></section>
    </>
  );
}

export default Header;
