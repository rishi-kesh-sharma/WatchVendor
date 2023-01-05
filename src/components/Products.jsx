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
      <AiFillSetting className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded  md:text-9xl md:rounded-lg md:p-4 lg:text-7xl" />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <Button mdHeight={"80px"} mdWidth={"300px"} mdTextSize={"2rem"}>
        Get Now
      </Button>
    ),
    image: "product1.png",
    isPositionReverse: false,
  },
  {
    icon: (
      <MdDashboardCustomize className="font-semibold text-2xl bg-[#C6BFFB] p-[3px] rounded  md:text-9xl md:rounded-lg md:p-4 lg:text-7xl" />
    ),
    title: "Best for organize and customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <Button mdHeight={"80px"} mdWidth={"300px"} mdTextSize={"2rem"}>
        Get Now
      </Button>
    ),
    image: "product2.png",
    isPositionReverse: true,
  },
];
const Products = () => {
  return (
    <div className="products  flex flex-col md:items-center md:justify-center md-gap-7 ">
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
      <div className=" w-[100vw] h-[400px] mb-4 products_video lg:w-[100vw] lg:flex items-center justify-center">
        <video
          className="w-[100%] h-[100%] lg:w-[800px] "
          src="/products-video.mp4"
          controls
        />
      </div>
      <Features />
    </div>
  );
};

export default Products;
