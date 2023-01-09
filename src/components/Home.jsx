import React from "react";
import HomeImage from "../assets/homewatchimage.png";
import Card from "./Card";
import { homeCardData as cardData } from "../assets/data";
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : "7rem")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : " 2.3rem")};
  font-size: ${(props) => (props.mdTextSize ? props.mdTextSize : " ")};
  background: ${(props) =>
    props.transparent ? props.transparent : " #bd87f6"};
  border-radius: 16px;
  color: ${(props) => (props.transparent ? " #bd87f6" : "white")};
  border: 1px solid #bd87f6;
  margin: 0 5px;
`;
const Home = () => {
  return (
    <div className="mt-[4rem] " id="home">
      <div className="flex flex-wrap items-center justify-center  w-[80vw] m-auto md:flex-nowrap xl:gap-[8rem] 2xl:gap-[12rem]">
        <div className="flex max-w-[22rem] flex-col">
          <h1 className=" text-[2rem] lg:text-[2.5rem] font-semibold xl:text-[3rem]">
            {" "}
            Landing page for showcase watch
          </h1>
          <p className="mt-[2rem] xl:text-[1.3rem]">
            {" "}
            minus odio molestias dignissimos porro eveniet. Tempore ducimus
            aperiam, repellendus similique repellat quidem atque voluptate autem
            incidunt amet sapiente, ex adipisci neque vitae. Et a unde
            reiciendis debitis cum modi eius enim obcaecati, numquam labore
            quam, saepe atque incidunt. Explicabo.
          </p>
          <div className="flex gap-[1rem] mt-[2rem]">
            <Button>Buy Now</Button>
            <Button transparent={"transparent"}>Add to Cart</Button>
          </div>
        </div>
        <div className="w-[31rem] mt-[3rem]">
          <img className="w-[100%]" src="homewatchimage.png" alt="" />
        </div>
      </div>
      <div className=" grid gap-[1rem] mt-[2rem] px-[5rem]  grid-cols-1 grid-rows-4 place-items-center  sm:grid-rows-2 sm:grid-cols-2 sm:gap-[2rem] md:px-[3rem] md:grid-rows-1 md:grid-cols-4 lg:grid-rows-1 md:gap-[2rem] lg:mt-[2rem]   md:my-[4rem] lg:mb-[10rem]  lg:mx-[1rem]  xl:mt-[8rem] 2xl:mx-[10rem] 2xl:mt-[20rem]">
        {cardData.map((cardItem, index) => {
          const { title, count, icon } = cardItem;
          return <Card key={index} title={title} count={count} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default Home;
