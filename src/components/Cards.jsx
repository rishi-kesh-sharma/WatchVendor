import { homeCardData as cardData } from "../assets/data";
import Card from "./Card";
import React from "react";

const Cards = () => {
  return (
    <div className=" grid gap-[1rem] mt-[2rem] px-[5rem]  grid-cols-1 grid-rows-4 place-items-center  sm:grid-rows-2 sm:grid-cols-2 sm:gap-[2rem] md:px-[3rem] md:grid-rows-1 md:grid-cols-4 lg:grid-rows-1 md:gap-[2rem] lg:mt-[2rem]   md:my-[4rem] lg:mb-[10rem]  lg:mx-[1rem]  xl:mt-[8rem] 2xl:mx-[10rem] 2xl:mt-[20rem]">
      {cardData.map((cardItem, index) => {
        const { title, count, icon } = cardItem;
        return <Card key={index} title={title} count={count} icon={icon} />;
      })}
    </div>
  );
};

export default Cards;
