import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <div className="h-[100vh] width-[100vw] bg-[url(footer-background.png)] bg-no-repeat bg-cover flex flex-col flex-wrap items-start pt-[200px] justify-center gap-[2rem] text-white p-4 md:flex-row md:justify-center md:items-center md:h-[70vh] md:px-0 lg:justify-around lg:items-start ">
      <div>
        <h2 className="text-lg my-7 md:text-4xl ">
          <BiDonateBlood className="inline" /> BDonor
        </h2>
        <p>
          <a href="mailto:bdonor@apptech.com md:text-5xl ">
            <AiOutlineMail className="inline md:text-3xl" />
            bdonor@apptech.com
          </a>
        </p>
      </div>
      <div className="services">
        <h3 className="text-lg my-7 md:mb-8 md:text-3xl lg:text-2xl">
          Services
        </h3>
        {footerLinks.services.map(({ name, path }, index) => {
          return (
            <p key={index} className="md:my-4 lg:my-2">
              <a className="md:text-2xl lg:text-xl" href={path}>
                {name}
              </a>
            </p>
          );
        })}
      </div>
      <div className="aboutUs md:mb-8 ">
        <h3 className="text-lg my-7 md:text-3xl lg:text-2xl">About Us</h3>
        {footerLinks.aboutUs.map(({ name, path }, index) => {
          return (
            <p key={index} className="md:my-4">
              <a className="md:text-2xl lg:text-xl" href={path}>
                {name}
              </a>
            </p>
          );
        })}
      </div>
      <div>
        <h3 className="text-lg my-7 md:mb-8 md:text-3xl lg:text-2xl">
          Our Address
        </h3>
        <p className="text-sm md:text-lg">1390 Ratomato Street,</p>
        <p className="text-sm md:text-lg">Baneshwor- Kathmandu, Nepal</p>
        <p className="text-sm md:text-lg">08834</p>
      </div>
    </div>
  );
};

export default Footer;
