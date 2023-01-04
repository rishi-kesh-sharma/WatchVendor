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
    <div
      className={`flex h-[100%] w-[100%] items-center flex-wrap gap-[50px] flex-1 justify-between ${
        isPositionReverse ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-[30%] h-[80vh] flex items-start justify-center flex-wrap gap-7 flex-col">
        {icon}
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-light opacity-7 text-sm">{description}</p>
        {button}
      </div>
      <div className=" relative bg-[url(/hexagon.png)]  bg-contain h-[70vh]  bg-no-repeat  flex items-center justify-center flex-1 ">
        <img
          className="absolute top-[10vh] left-[5vw]"
          height={300}
          width={350}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Product;
