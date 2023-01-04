import React from "react";
import styled from "styled-components";

import { features } from "../assets/data";

const Features = () => {
  return (
    <div className=" bg-slate-50 pt-[100px] h-[120vh] p-4">
      <h1 className="text-center font-bold text-2xl mb-[50px] ">
        Supplement Features
      </h1>
      <div className=" h-[100%] features flex items-center justify-center m-2 flex-col flex-wrap ">
        {features.map((feature) => {
          if (feature.centerImage && feature.centerImage)
            return feature.centerImage;

          const { title, description, icon } = feature;
          return (
            <div className="feature  relative flex-1 w-[30%] h-[30%] ">
              <h2 className="title font-bold ">{title}</h2>
              <p className="description opacity-50 max pr-[70px]">
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
