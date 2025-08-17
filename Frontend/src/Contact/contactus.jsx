import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Contact() {
  return (
    <>
      <Header />
      <section
        className="grid justify-items-center w-[90%] md:w-[60%] mt-15"
        id="contactUs"
      >
        {/* Heading */}
        <div className="pr-10" id="contactHeading">
          <h1 className="font-satoshi-bold text-[3rem]">Contact Us</h1>
        </div>

        {/* Contact Us Form */}
        <form action="" className="grid gap-x-3 mt-[70px] " id="contactForm">
          {/* Names */}
          <div className="flex flex-col md:flex-row w-full gap-4 " id="Name">
            <div className=" grid" id="firstNamediv">
              <label
                htmlFor="firstName"
                className="font-satoshi-bold  text-[1.125rem]"
                id="firstname"
              >
                First Name
              </label>
              <input
                type="text"
                className="border-white border-[2px] p-5 rounded-[5px] h-[33px]"
                id="firstNameField"
              />
            </div>
            <div className="grid" id="lastNameDiv">
              <label
                htmlFor="lastName"
                className="font-satoshi-bold text-[1.125rem] "
                id="lastname"
              >
                Last Name
              </label>
              <input
                type="text"
                className="border-white border-[2px] p-5 rounded-[5px] h-[33px]"
                id="lastNameField"
              />
            </div>
          </div>

          {/* Subject */}
          <label
            htmlFor="Subject"
            className="font-satoshi-bold text-[1.125rem]  mt-[20px]"
            id="subjectlabel"
          >
            Subject
          </label>
          <input
            type="text"
            className="border-white border-[2px] p-5 rounded-[5px] h-[33px]"
            id="subjectfield"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="font-satoshi-bold text-[1.125rem] mt-[20px]"
            id="emailLabel"
          >
            Email
          </label>
          <input
            type="text"
            className="border-white border-[2px] p-5 rounded-[5px] h-[33px]"
            id="emailField"
          />

          {/* comment */}
          <label
            htmlFor="Comment"
            className="font-satoshi-bold text-[1.125rem] mt-[20px]"
            id="commentLabel"
          >
            Comment
          </label>
          <textarea
            name=""
            id="commentfield"
            className="border-white border-[2px] p-5 rounded-[5px] field-sizing-fixed resize-none h-[100px]"
          ></textarea>

          {/* Join Button */}
          <div
            className="flex mt-[50px] justify-center items-center"
            id="submitButton"
          >
            <button
              className="bg-orange-400 rounded-[5px] h-[30px] w-[7em]"
              id="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
