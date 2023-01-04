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
  width: 109px;
  height: 35px;
  background: #bd87f6;
  border-radius: 16px;
  color: white;
`;
const products = [
  {
    icon: (
      <AiFillSetting className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded " />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: <Button>Get Now</Button>,
    image: "product1.png",
    isPositionReverse: false,
  },
  {
    icon: (
      <MdDashboardCustomize className="font-semibold text-2xl bg-[#C6BFFB] p-[3px] rounded " />
    ),
    title: "Best for organize and customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: <Button>Get Now</Button>,
    image: "product2.png",
    isPositionReverse: true,
  },
];
const Products = () => {
  return (
    <div className="products relative pb-[100px] mt-[3rem] w-[100%] bg-[F5F5F5] flex items-center justify-center gap-5 flex-col p-[8rem] ">
      {products.map((product) => {
        const { title, image, button, icon, description, isPositionReverse } =
          product;
        return (
          <Product
            title={title}
            image={image}
            button={button}
            icon={icon}
            description={description}
            isPositionReverse={isPositionReverse}
          />
        );
      })}
      {/* <div className="h-[400px] mb-4 w-[600px]  absolute top-[95%] products_video">
        <video src="/products-video.mp4" controls />
      </div> */}
      <Features />
    </div>
  );
};

export default Products;
