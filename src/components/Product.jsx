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
    <div className="flex flex-col  justify-center items-center   lg:flex-row lg:justify-between lg:items-center lg:gap-[4rem] lg:first-of-type:flex-row-reverse   ">
      <div className="bg-[url(hexagon.png)] grid place-items-center h-[30rem] w-[25rem] bg-center  bg-contain  bg-no-repeat md:p-7 lg:flex-1 ">
        <img className="object-contain " src={image} alt={title} />
      </div>
      <div className=" flex flex-col items-center p-4 gap-4 text-center md:max-w-[25rem]  lg:flex-1 ">
        <div style={{ width: "100%" }}>{icon}</div>
        <h2 className="font-semibold text-xl  md:text-2xl lg:text-3xl text-start">
          {title}
        </h2>
        <p className="font-light opacity-7 text-sm  md:text-lg lg:text-2xl text-start">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Product;
