import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import Product1 from "../../public/product1.png";
import Product2 from "../../public/product2.png";
import styled from "styled-components";
import Product from "./Product";
import Features from "./Features";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : " 109px")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : " 35px")};
  font-size: ${(props) => (props.mdTextSize ? props.mdTextSize : " ")};
  background: #bd87f6;
  border-radius: 16px;
  color: white;
`;
const products = [
  {
    icon: (
      <AiFillSetting className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded  md:text-5xl md:rounded-lg md:p-y lg:text-7xl" />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white rounded-lg">
        Get Now
      </button>
    ),
    image: "product1.png",
    isPositionReverse: false,
  },
  {
    icon: (
      <MdDashboardCustomize className="font-semibold text-5xl bg-[#C6BFFB] p-[3px] rounded  md:text-5xl md:rounded-lg md:p-2 lg:text-7xl" />
    ),
    title: "Best for organize and customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white rounded-lg">
        Get Now
      </button>
    ),
    image: "product2.png",
    isPositionReverse: true,
  },
];
const Products = () => {
  return (
    <div className="flex flex-col justify-center lg:items-center  ">
      {products.map((product, index) => {
        const { title, image, button, icon, description, isPositionReverse } =
          product;
        return (
          <Product
            key={index}
            title={title}
            image={image}
            button={button}
            icon={icon}
            description={description}
            isPositionReverse={isPositionReverse}
          />
        );
      })}
      <div className=" m-auto md:w-[45rem] md:h-[25rem] lg:my-[2rem] md:translate-y-[14rem]">
        <video
          className=" rounded-lg  object-contain"
          src="/products-video.mp4"
          controls
        />
      </div>
      <Features />
    </div>
  );
};

export default Products;
