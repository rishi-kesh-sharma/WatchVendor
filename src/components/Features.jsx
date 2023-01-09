import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div
      className=" bg-slate-100  z-[-10] pt-[7rem]   md:pt-[15rem] translate-y-[-9rem] md:translate-y-[-13rem] md:pb-[5rem] lg:pt-[20rem] lg:pb-[1rem] lg:w-[100vw] lg:translate-y-[-20rem]"
      id="features"
    >
      <h1 className="text-center relative after:content-[''] after:absolute after:bottom-[-0.4rem] after:left-[50%] after:translate-x-[-50%] after:h-[0.2rem] after:w-[5rem] after:bg-[#8A95F6] font-semibold text-xl after:md:w-[10rem] md:after:h-[0.4rem] md:after:bottom-[-1rem] xl:after:w-[14rem] md:text-3xl lg:text-4xl lg:mb-[2rem]   xl:mb-[0rem] xl:text-5xl ">
        Supplement Features
      </h1>
      <div className="features w-[100vw]  flex-col flex items-center  justify-center px-[2rem] py-[2rem] flex-wrap gap-8 md:flex-row md:h-[55rem]  md:gap-[1.8rem] lg:py-[1rem] lg:flex-col lg:h-[90vh]  lg:w-[88vw] lg:mx-auto xl:h-[40rem]  ">
        {features.map((feature, index) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div
              key={index}
              className="  flex items-center gap-[1rem]  md:text-justify  md:max-w-[30%]  md:gap-2 "
            >
              <div
                className={`flex-1 ${index > 2 && "lg:order-2"} max-w-[18rem]`}
              >
                <h2 className=" title text-sm font-semibold   md:text-sm lg:mx-0 lg:text-lg">
                  {title}
                </h2>
                <p className="description text-xs text-[#919191] max  md:text-sm lg:pr-[0] lg:text-xs">
                  {description}
                </p>
              </div>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
