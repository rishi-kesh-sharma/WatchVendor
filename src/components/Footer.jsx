import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <div className="h-[100vh] width-[100%] bg-[url(footer-background.png)] bg-no-repeat bg-cover flex items-start pt-[200px] justify-center gap-[9rem] text-white ">
      <div>
        <h2 className="text-lg my-7">
          <BiDonateBlood className="inline" /> BDonor
        </h2>
        <p>
          <a href="mailto:bdonor@apptech.com">
            {" "}
            <AiOutlineMail className="inline" />
            bdonor@apptech.com
          </a>
        </p>
      </div>
      <div className="services">
        <h3 className="text-lg my-7">Services</h3>
        {footerLinks.services.map(({ name, path }) => {
          return (
            <p>
              <a href={path}>{name}</a>
            </p>
          );
        })}
      </div>
      <div className="aboutUs">
        <h3 className="text-lg my-7">About Us</h3>
        {footerLinks.aboutUs.map(({ name, path }) => {
          return (
            <p>
              <a href={path}>{name}</a>
            </p>
          );
        })}
      </div>
      <div>
        <h3 className="text-lg my-7">Our Address</h3>
        <p>1390 Ratomato Street,</p>
        <p>Baneshwor- Kathmandu, Nepal</p>
        <p>08834</p>
      </div>
    </div>
  );
};

export default Footer;
