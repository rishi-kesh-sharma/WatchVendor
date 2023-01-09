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
    <div className="flex flex-col max-h-[2000px]  justify-center items-center md:px-[2rem] md:gap-[3rem]   md:flex-row md:justify-between md:items-center  md:first-of-type:flex-row-reverse">
      <div className="bg-[url(hexagon.png)] w-[90%] p-[1rem] grid place-items-center  md:w-[25rem] bg-center  bg-contain  bg-no-repeat md:p-7 lg:flex-1 ">
        <img
          className="md:object-contain w-[70%] xl:w-[70%] "
          src={image}
          alt={title}
        />
      </div>
      <div className=" flex flex-col items-center p-4 gap-4 text-center md:max-w-[25rem] max-w-[20rem]   lg:flex-1 ">
        <div style={{ width: "100%" }}>{icon}</div>
        <h2 className="font-semibold text-xl  md:text-2xl lg:text-3xl text-start">
          {title}
        </h2>
        <p className="font-light text-[#919191] text-sm  md:text-sm lg:text-sm text-start">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Product;
