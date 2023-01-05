import React from "react";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div className=" bg-slate-50 pt-[100px] p-4 my-5 ">
      <h1 className="text-center  font-bold text-2xl mb-[50px] md:text-5xl lg:text-4xl">
        Supplement Features
      </h1>
      <div className=" w-[100vw]  features flex items-center justify-center flex-col flex-wrap gap-8 md:gap-10 lg:flex-col lg:flex-wrap lg:gap-3 ">
        {features.map((feature, index) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div
              key={index}
              className=" text-center  feature flex-1 md:text-justify lg:w-[30%]"
            >
              <h2 className="title text-sm font-bold md:max-w-[500px] md-mx-auto md:text-3xl lg:text-xl">
                {title}
              </h2>
              <p className="description text-xs opacity-50 max pr-[70px] md:max-w-[600px] md:text-xl lg:text-lg">
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
