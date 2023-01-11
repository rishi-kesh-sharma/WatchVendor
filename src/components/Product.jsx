import React from "react";

const Product = ({
  title,
  image,
  button,
  icon,
  description,
  isPositionReverse,
}) => {
  return (
    <div className="flex flex-col w-[80%] mx-auto max-h-[2000px]  justify-start items-start  md:gap-[3rem]   md:flex-row md:justify-between md:items-center  md:first-of-type:flex-row-reverse lg:justify-start">
      <div className="bg-[url(hexagon.png)] w-[100%] mx-auto  p-[2rem] grid place-items-center  md:w-[25rem] bg-center  bg-contain  bg-no-repeat md:p-7 lg:flex-1 lg:max-w-[30rem] ">
        <img
          className="md:object-contain w-[100%] mx-auto xl:w-[100%] "
          src={image}
          alt={title}
        />
      </div>
      <div className=" flex flex-col items-start  gap-[0.6rem] text-center md:max-w-[25rem] max-w-[20rem]   lg:flex-1 lg:max-20rem ">
        <div style={{ width: "100%" }}>{icon}</div>
        <h2 className="font-semibold text-xl  md:text-2xl lg:text-3xl text-start">
          {title}
        </h2>
        <p className="font-light text-[#919191] text-xs  md:text-sm lg:text-sm text-start">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Product;
