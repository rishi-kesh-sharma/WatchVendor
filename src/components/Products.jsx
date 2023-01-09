import React, { useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import styled from "styled-components";
import Product from "./Product";
import Features from "./Features";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPauseCircle } from "react-icons/fi";

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
      <CiSettings className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded  md:text-5xl md:rounded-lg  lg:text-7xl" />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white rounded-xl md:rounded-xl lg:rounded-3xl ">
        Get Now
      </button>
      // lg:px-[2rem] lg:py-[0.5rem]
    ),
    image: "product1.png",
    isPositionReverse: false,
  },
  {
    icon: (
      <HiOutlineAdjustmentsVertical className="font-semibold text-5xl bg-[#C6BFFB] p-[3px] rounded  md:text-5xl md:rounded-lg md:p-2 lg:text-7xl" />
    ),
    title: "Best for organize and customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white  rounded-xl md:rounded-xl lg:rounded-3xl lg:px-[2rem] lg:py-[0.5rem]">
        Get Now
      </button>
    ),
    image: "product2.png",
    isPositionReverse: true,
  },
];
const Products = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  return (
    <div
      className="flex max-h-[2900px]  flex-col mt-[4rem] gap-[4rem] justify-center sm:mt-[5rem] sm:gap-[1rem] md:mt-[6rem] sm:max-h-[3000px]    lg:items-center lg:gap-[3rem] md:max-h-[2000px]  xl:max-h-[1900px] 2xl:max-h-[2200px]"
      id="overview"
    >
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
      <div className=" relative  w-[90%] max-w-[50rem] z-[2] mx-auto   md:mt-[5rem]  lg:my-[2rem] ">
        <div
          className={`overlay absolute  top-0 left-0 right-0  bottom-0  ${
            !isPlaying && "bg-blue-400"
          }  rounded-lg  opacity-40`}
        ></div>
        {isPlaying ? (
          <div className=" cursor-pointer  bg-purple-600 rounded-full h-[3rem] w-[3rem] md:h-[3rem] md:w-[3rem] absolute bottom-[0%] right-[0%] translate-x-[-50%] translate-y-[-50%]   flex justify-center items-center ">
            <FiPauseCircle
              className="text-white text-[4rem] md:text-[6.5rem] z-[100] "
              onClick={(e) => {
                videoRef.current.pause();
                setIsPlaying(false);
              }}
            />
          </div>
        ) : (
          <div className=" cursor-pointer  bg-purple-600 rounded-full h-[5.5rem] w-[5.5rem] md:h-[8rem] md:w-[8rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   flex justify-center items-center ">
            <AiFillPlayCircle
              className="text-white text-[4rem] md:text-[6.5rem]  "
              onClick={(e) => {
                videoRef.current.play();
                setIsPlaying(true);
              }}
            />
          </div>
        )}
        <video
          style={{ zIndex: -1 }}
          ref={videoRef}
          className="relative rounded-lg object-contain"
          src="/products-video.mp4"
          // controls
        ></video>
      </div>
      <Features />
    </div>
  );
};

export default Products;

// : (
