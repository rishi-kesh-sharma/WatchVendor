import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div
      className=" bg-slate-100   pt-[3.4rem]  lg:pb-[3rem] lg:w-[100vw] "
      id="features">
      <h1 className="text-center text-[1.5rem] relative after:content-[''] after:absolute after:bottom-[-0.4rem] after:left-[50%] after:translate-x-[-50%] after:h-[0.2rem] after:w-[5rem] after:bg-[#8A95F6] font-semibold text-xl after:md:w-[10rem] md:after:h-[0.4rem] md:after:bottom-[-1rem] xl:after:w-[14rem] md:text-3xl lg:text-4xl lg:mb-[2rem]   xl:mb-[0rem] xl:text-5xl ">
        Supplement Features
      </h1>
      <div className="features w-[100vw]  flex-col flex items-center  justify-center px-[2rem] py-[2rem] flex-wrap gap-8 md:flex-row md:h-[63rem]  md:gap-[1.8rem] lg:py-[1rem] lg:flex-col lg:min-h-[30rem] lg:max-h-[38rem]  lg:w-[88vw] lg:mx-auto xl:h-[40rem]  ">
        {features.map((feature, index) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div
              key={index}
              className="  flex items-center gap-[1rem]  md:text-justify  md:max-w-[30%]  md:gap-2 ">
              <div
                className={`flex-1 ${index > 2 && "lg:order-2"} max-w-[18rem]`}>
                <h2 className=" title text-sm font-semibold   md:text-sm lg:mx-0 lg:text-lg">
                  {title}
                </h2>
                <p className="description text-[0.7rem] text-[#919191] max  md:text-sm lg:pr-[0] lg:text-xs">
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
