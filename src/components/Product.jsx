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
    <div className="flex flex-col w-[100vw] my-11 justify-center md:h-[100vh] lg:flex-row lg:justify-between lg:items-center">
      <div className=" bg-[url(/hexagon.png)]  bg-contain  bg-no-repeat  flex items-center justify-center flex-1  w-[100vw] h-[100vh] md:bg-cover lg:flex-1 ">
        <img
          className="md:h-[600px] md:w-[600px]"
          height={200}
          width={350}
          src={image}
          alt={title}
        />
      </div>
      <div className=" flex flex-col items-center p-4 gap-4 text-center w-[100%] lg:flex-1 ">
        {icon}
        <h2 className="font-semibold text-xl md:max-w-[500px] md:text-5xl lg:text-3xl">
          {title}
        </h2>
        <p className="font-light opacity-7 text-sm md:max-w-[550px] md:text-3xl lg:text-2xl">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Product;
