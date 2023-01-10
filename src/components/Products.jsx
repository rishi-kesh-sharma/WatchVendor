import React, { useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import styled from "styled-components";
import Product from "./Product";
import Features from "./Features";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPauseCircle } from "react-icons/fi";
import { products } from "../assets/data";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : " 109px")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : " 35px")};
  font-size: ${(props) => (props.mdTextSize ? props.mdTextSize : " ")};
  background: #bd87f6;
  border-radius: 16px;
  color: white;
`;

const Products = () => {
  return (
    <div
      className="  flex-col mt-[4rem] gap-[4rem] justify-center sm:mt-[5rem] sm:gap-[1rem] md:mt-[6rem]     lg:items-center lg:gap-[3rem]    "
      id="overview">
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
          />
        );
      })}
    </div>
  );
};

export default Products;

// : (
