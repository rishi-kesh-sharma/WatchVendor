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
    <div
      className="mt-[1rem]  max-h-[60rem] sm:min-h-[40rem] md:min-h-[22rem] md:max-h-[35rem] md:mt-[2rem] lg:mt-[1rem] xl:min-h-[30rem] xl:max-h-[35rem] 2xl:min-h-[30vh] xl:mt-[3rem] 2xl:max-h-[25rem]  2xl:mt-[8rem]"
      id="home"
    >
      <div className="flex flex-wrap items-center justify-center  w-[80vw] max-w-[70rem]  m-auto md:flex-nowrap  2xl:mt-[6rem] ">
        <div className="flex max-w-[22rem] flex-col xl:max-w-[27rem] 2xl:max-w-[30rem]">
          <h1 className=" text-[2rem] lg:text-[2.5rem] font-semibold xl:text-[3rem]">
            {" "}
            Landing page for showcase watch
          </h1>
          <p className=" text-gray-600 text-[0.8rem] mt-[1.6rem] xl:text-[1.3rem]">
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
        <div className="w-[90%] max-w-[30rem] mt-[3rem] mx-auto md:mt-0 lg:mt-[3rem]">
          <img className="w-[90%]" src="homewatchimage.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
