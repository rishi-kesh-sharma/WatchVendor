import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div className=" bg-slate-100  z-[-10]  p-[0.8rem] my-[2rem]  md:pt-[16rem] lg:w-[100vw]    ">
      <h1 className=" text-center relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-[50%] after:translate-x-[-50%] after:h-[0.4rem] after:w-[10rem] after:bg-[#8A95F6] font-semibold text-xl mb-[50px] md:text-3xl lg:text-4xl ">
        Supplement Features
      </h1>
      <div className="features w-[100vw]  flex-col flex items-center  justify-center px-[2rem] py-[5rem] flex-wrap gap-8 md:flex-row md:h-[55rem]  md:gap-[1.8rem] lg:flex-col lg:h-[54rem]  lg:w-[88vw] lg:m-auto   ">
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
                <p className="description text-xs text-[#919191] max  md:text-sm lg:pr-[0] lg:text-sm">
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
