import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div className=" bg-slate-50  max-w-[100vw] z-[-10] mt-3 pt-[50px] p-4 my-5 lg:overflow-hidden ">
      <h1 className="text-center  font-bold text-2xl mb-[50px] md:text-3xl lg:text-4xl">
        Supplement Features
      </h1>
      <div className="features flex items-center justify-center flex-col flex-wrap gap-8 md:gap-4 lg:flex-col lg:flex-wrap lg:gap-3 lg:h-[700px] lg:w-[100vw] lg:px-3  ">
        {features.map((feature, index) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div
              key={index}
              className=" h-[200px]  flex flex-col flex-wrap feature flex-1 md:text-justify md:max-h-[300px]   lg:w-[30%] ">
              <h2 className=" title text-sm font-bold md:max-w-[500px] md-mx-auto md:text-xl lg:mx-0 md:max-w:auto lg:text-lg">
                {title}
              </h2>
              <p className="description text-xs opacity-50 max pr-[70px] md:max-w-[500px] md:text-sm lg:pr-[0] lg:text-sm">
                {description}
              </p>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
