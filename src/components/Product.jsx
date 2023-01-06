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
    <div className="flex flex-col w-[100vw] my-11 justify-center items-center lg:overflow-hidden lg:flex-row lg:justify-between lg:items-center">
      <div className="bg-[url(hexagon.png)] bg-center  bg-contain  bg-no-repeat  flex items-center justify-center flex-1 p-11  md:bg-contain lg:flex-1 ">
        <img className=" object-contain " src={image} alt={title} />
      </div>
      <div className=" flex flex-col items-center p-4 gap-4 text-center w-[100%] lg:flex-1 ">
        {icon}
        <h2 className="font-semibold text-xl md:max-w-[500px] md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <p className="font-light opacity-7 text-sm md:max-w-[550px] md:text-lg lg:text-2xl">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Product;
