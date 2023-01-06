import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <div className="bg-[url(footer-background.png)]  bg-no-repeat bg-cover flex flex-wrap  items-center py-[200px] justify-center gap-4 text-white md:bg-cover md:h-[1000px] md:py-[0] lg:gap-[70px] lg:bg-contain lg:h-[700px]  ">
      <div>
        <h2 className="text-sm  md:text-4xl ">
          <BiDonateBlood className="inline" /> BDonor
        </h2>
        <p>
          <a href="text-xs mailto:bdonor@apptech.com md:text-xl ">
            <AiOutlineMail className=" text-xs inline md:text-xl" />
            <span className="text-xs"> bdonor@apptech.com</span>
          </a>
        </p>
      </div>
      <div className="services">
        <h3 className="text-sm my-4 md:mb-8 md:text-3xl lg:text-2xl">
          Services
        </h3>
        {footerLinks.services.map(({ name, path }, index) => {
          return (
            <p key={index} className="md:my-4 lg:my-2">
              <a className=" text-xs md:text-2xl lg:text-xl" href={path}>
                {name}
              </a>
            </p>
          );
        })}
      </div>
      <div className="aboutUs md:mb-8 ">
        <h3 className="text-sm my-4 md:text-3xl lg:text-2xl">About Us</h3>
        {footerLinks.aboutUs.map(({ name, path }, index) => {
          return (
            <p key={index} className="md:my-4">
              <a className=" text-xs md:text-2xl lg:text-xl" href={path}>
                {name}
              </a>
            </p>
          );
        })}
      </div>
      <div>
        <h3 className="text-sm my-7  md:text-3xl lg:text-2xl">Our Address</h3>
        <p className="text-xs md:text-lg">1390 Ratomato Street,</p>
        <p className="text-xs md:text-lg">Baneshwor- Kathmandu, Nepal</p>
        <p className="text-xs md:text-lg">08834</p>
      </div>
    </div>
  );
};

export default Footer;
