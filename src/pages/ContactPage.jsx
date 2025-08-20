import React from "react";
import Breadcrum from "../components/common/Breadcrum";
import CommonHead from "../components/common/CommonHead";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import ContactPageCommon from "../components/common/ContactPageCommon";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { TbHomeHeart } from "react-icons/tb";

const ContactPage = () => {
  return (
    <>
      <section id="contact-page" className="">
        <Breadcrum breadContent={"Contact Us"} />
        <div className="container">
          <div id="contact-row" className="">



            <div className="h-[480px] relative bg-[#D9D9D9] mt-[247px]">
              <div className=" absolute top-[-150px] left-[350px] flex justify-center gap-[30px] ">
                <ContactPageCommon contactLogo={FiPhoneCall} contactH2={'Phone Number'} contactP={'012 345 678 9101'} contactP2={'012 345 678 9101'} />
                <ContactPageCommon contactLogo={LuMailOpen} contactH2={'Email Address'} contactP={'abcd@gmail.com'} contactP2={'efgh@gmail.com'} />
                <ContactPageCommon contactLogo={TbHomeHeart} contactH2={'Office Address'} contactP={'66 Broklyant, New York India '} contactP2={'3269 Road.'} />
              </div>


            </div>


          {/* -------------- contact details */}
            <div className="my-[120px] flex justify-around gap-[30px]">

            {/* ---------------- lift-side */}
            <div>
              <CommonHead commonp={"Contact us"} />
              {/* ----------------- heading */}
              <div className="w-[410px] pt-[14px]">
                <h2 className="text-[42px] font-bold font-inter text-main">
                  Do you have any question?{" "}
                </h2>
              </div>
              <div className="w-[410px] pt-[37px] pb-[30px]">
                <p className="text-[17px] font-normal font-inter text-main">
                  For your car we will do everything advice, repairs and
                  maintenance. We are the some preferred choice by many car
                  owners because{" "}
                </p>
              </div>
              {/* ------------- icons */}
              <div className="flex gap-[15px] items-center">
                <Link
                  className="w-[40px] h-[40px] bg-[#F0F5FD]  flex justify-center items-center rounded-[5px]"
                  to={"/"}
                >
                  <FaFacebookF className="text-[#2F57EF]" />
                </Link>
                <Link
                  className="w-[40px] h-[40px] bg-[#F0F5FD]  flex justify-center items-center rounded-[5px]"
                  to={"/"}
                >
                  <FaTwitter className="text-[#2F57EF]" />
                </Link>
                <Link
                  className="w-[40px] h-[40px] bg-[#F0F5FD]  flex justify-center items-center rounded-[5px]"
                  to={"/"}
                >
                  <FaInstagram className="text-[#2F57EF]" />
                </Link>
                <Link
                  className="w-[40px] h-[40px] bg-[#F0F5FD]  flex justify-center items-center rounded-[5px]"
                  to={"/"}
                >
                  <FaPinterestP className="text-[#2F57EF]" />
                </Link>
              </div>
            </div>

            {/* ----------- right-side */}
            <div>
              <div className="flex gap-[38px]">
                <div className="w-[410px] bg-[#F3F6FB]">
                  <input
                    className="w-[90%] outline-none text-[17px] py-[24px] pl-[20px] font-normal font-inter text-main "
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-[410px] bg-[#F3F6FB]">
                  <input
                    className="w-[90%] outline-none text-[17px] py-[24px] pl-[20px] font-normal font-inter text-main "
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex my-[20px] gap-[38px]">
                <div className="w-[410px] bg-[#F3F6FB]">
                  <input
                    className="w-[90%] outline-none text-[17px] py-[24px] pl-[20px] font-normal font-inter text-main "
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-[410px] bg-[#F3F6FB]">
                  <input
                    className="w-[90%] outline-none text-[17px] py-[24px] pl-[20px] font-normal font-inter text-main "
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="w-[858px] bg-[#F3F6FB] mb-[20px]">
                <input
                  className="w-[90%] outline-none text-[17px] py-[24px] pl-[20px] font-normal font-inter text-main "
                  type="text"
                  placeholder="Service"
                />
              </div>
              <textarea
                className="w-[858px] h-[159px] bg-[#F3F6FB] pt-[30px]  pl-[20px] text-[17px] font-normal font-inter text-main outline-none"
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>

              <button className="w-[850px] bg-[#2F57EF] py-[24px] text-[15px] font-medium font-inter text-[#fff] rounded-[5px] mt-[20px]">submit now</button>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
