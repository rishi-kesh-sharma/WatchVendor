// import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
// import { footerLinks } from "../assets/data";

// const Footer = () => {
//   return (
//     <div className="bg-[url(footer-background.png)]  bg-no-repeat bg-cover flex flex-wrap  items-center  justify-center gap-4 text-white px-[3rem] p-[5rem] md:bg-cover lg:bg-cover  ">
//       <div>
//         <h2 className="text-sm  md:text-4xl ">
//           <BiDonateBlood className="inline" /> BDonor
//         </h2>
//         <p>
//           <a href="text-xs mailto:bdonor@apptech.com md:text-xl ">
//             <AiOutlineMail className=" text-xs inline md:text-xl" />
//             <span className="text-xs"> bdonor@apptech.com</span>
//           </a>
//         </p>
//       </div>
//       <div className="services">
//         <h3 className="text-sm my-4 md:mb-8 md:text-3xl lg:text-2xl">
//           Services
//         </h3>
//         {footerLinks.services.map(({ name, path }, index) => {
//           return (
//             <p key={index} className="md:my-4 lg:my-2">
//               <a className=" text-xs md:text-2xl lg:text-xl" href={path}>
//                 {name}
//               </a>
//             </p>
//           );
//         })}
//       </div>
//       <div className="aboutUs md:mb-8 ">
//         <h3 className="text-sm my-4 md:text-3xl lg:text-2xl">About Us</h3>
//         {footerLinks.aboutUs.map(({ name, path }, index) => {
//           return (
//             <p key={index} className="md:my-4">
//               <a className=" text-xs md:text-2xl lg:text-xl" href={path}>
//                 {name}
//               </a>
//             </p>
//           );
//         })}
//       </div>
//       <div>
//         <h3 className="text-sm my-7  md:text-3xl lg:text-2xl">Our Address</h3>
//         <p className="text-xs md:text-lg">1390 Ratomato Street,</p>
//         <p className="text-xs md:text-lg">Baneshwor- Kathmandu, Nepal</p>
//         <p className="text-xs md:text-lg">08834</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
function Footer() {
  return (
    <div className="footerContainer bg-[url(footer-background.png)]">
      {/* in grid */}

      <div className="footerContent">
        <div className="fotterFirstOne">
          <BiDonateBlood className="img" />
          <span
            className="logoText"
            style={{ fontSize: "1.25rem", color: "#fff" }}
          >
            <span style={{ fontSize: "1.5rem", color: "#fff" }}>B</span>Donor
          </span>
        </div>

        <div className="fotterFirstTwo">
          <AiOutlineMail className="img" />
          <span style={{ color: "#fff", marginLeft: "0.9rem" }}>
            bdonor@apptech.com
          </span>
        </div>
        <span className="footerServiceHeading">Services</span>
        <span className="aboutUsHeading">About Us</span>
        <span className="ourAddressHeading">Our Address</span>
        <span className="eachService1">Service i</span>
        <span className="eachService2">Service ii</span>
        <span className="eachService3">Service iii</span>
        <span className="eachService4">Service iv</span>

        <span className="eactAboutUs1">About Us</span>
        <span className="eactAboutUs2">Contact Us</span>
        <span className="eactAboutUs3">Home</span>
        <span className="eactAboutUs4">Blog</span>
        <span className="eactAboutUs5">Donate</span>

        <span className="streetName">1390 Ratomato Street,</span>
        <span className="cityName">Baneshwor- Kathmandu, Nepal</span>
        <span className="postal">08834</span>

        {/* <div className="footerLinks">
          <img src={Fb} alt="..." className="linkImage" />
          <img src={Twit} alt="..." className="linkImage" />
          <img src={Linked} alt="..." className="linkImage" />
          <img src={Insta} alt="..." className="linkImage" />
        </div> */}

        <span className="copy">Copyright@apptech software inc</span>
        <span className="by">bdonor@apptech.com</span>
      </div>
    </div>
  );
}

export default Footer;
