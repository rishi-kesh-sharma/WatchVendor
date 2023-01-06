import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div className=" bg-slate-100  z-[-10]  p-[1rem] my-5  md:pt-[16rem] lg:w-[100vw]    ">
      <h1 className=" text-center font-bold text-2xl mb-[50px] md:text-3xl lg:text-4xl">
        Supplement Features
      </h1>
      <div className="features w-[100vw]  flex-col flex items-center  justify-center  flex-wrap gap-8 md:flex-row md:h-[50rem]  md:gap-4 lg:flex-col lg:h-[40rem]  lg:w-[80vw] lg:m-auto   ">
        {features.map((feature, index) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div
              key={index}
              className="  flex items-center pr-4  md:text-justify  md:max-w-[30%]  md:gap-2 "
            >
              <div className="flex-1">
                <h2 className=" title text-sm font-bold   md:text-sm lg:mx-0 lg:text-lg">
                  {title}
                </h2>
                <p className="description text-xs opacity-50 max  md:text-sm lg:pr-[0] lg:text-sm">
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
