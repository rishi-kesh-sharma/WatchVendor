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
      <CiSettings className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded  md:text-5xl md:rounded-lg md:p-y lg:text-7xl" />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white rounded-xl md:rounded-xl lg:rounded-3xl lg:px-[2rem] lg:py-[0.5rem]">
        Get Now
      </button>
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
    <div className="flex flex-col justify-center lg:items-center gap-[6rem]  ">
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
      <div
        className=" relative m-auto md:w-[45rem] md:h-[25rem] lg:my-[2rem] md:translate-y-[18rem] lg:translate-y-[22rem]"
        // style={{ zIndex: -1 }}
      >
        <div
          className={`overlay absolute top-0 left-0 right-0 bottom-0 md:bottom-[-0.3rem] ${
            !isPlaying && "bg-blue-400"
          }  rounded-lg  z-40 opacity-40`}
        ></div>
        <div className=" cursor-pointer  bg-purple-600 rounded-full h-[5.5rem] w-[5.5rem] md:h-[8rem] md:w-[8rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   flex justify-center items-center z-50">
          {isPlaying ? (
            <FiPauseCircle
              className="text-white text-[4rem] md:text-[6.5rem]  "
              onClick={(e) => {
                videoRef.current.pause();
                setIsPlaying(false);
              }}
            />
          ) : (
            <AiFillPlayCircle
              className="text-white text-[4rem] md:text-[6.5rem]  "
              onClick={(e) => {
                videoRef.current.play();
                setIsPlaying(true);
              }}
            />
          )}
        </div>

        <video
          ref={videoRef}
          className="relative rounded-lg  object-contain "
          src="/products-video.mp4"
          // controls
        ></video>
      </div>
      <Features />
      {console.log()}
    </div>
  );
};

export default Products;
