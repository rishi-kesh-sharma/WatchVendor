import React from "react";
import HomeImage from "../assets/homewatchimage.png";
import Card from "./Card";
import { homeCardData as cardData } from "../assets/data";
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : " 109px")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : " 35px")};
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
    <div>
      <div className="text-center lg:flex lg:bg-[url(homebackground.png)] lg:bg-no-repeat lg:w-[100vw] lg:bg-cover">
        <div className="home_left_container mb-4 w-[100vw] mt-6 md:pt-[100px] lg:flex-1 lg:mt-0 ">
          <h1 className="font-semibold text-3xl px-3 md:text-7xl  md:text-center md:md-w-[700px] md:m-auto lg:text-4xl  ">
            {" "}
            Landing page for showcase watch
          </h1>
          <p className="mt-7 p-3 text-sm md:m-auto md:w-[600px] md:opacity-70 md:my-5 md:text-2xl lg:text-xl  ">
            {" "}
            minus odio molestias dignissimos porro eveniet. Tempore ducimus
            aperiam, repellendus similique repellat quidem atque voluptate autem
            incidunt amet sapiente, ex adipisci neque vitae. Et a unde
            reiciendis debitis cum modi eius enim obcaecati, numquam labore
            quam, saepe atque incidunt. Explicabo.
          </p>
          <div>
            <Button>Buy Now</Button>
            <Button transparent={"transparent"}>Add to Cart</Button>
          </div>
        </div>
        <div className="home_right_container pt-[100px] p-3 h-[500px] bg-[url(home-bg-for-mobile.png)] md:bg-no-repeat md:bg-cover md:h-[70vh] md:grid md:place-items-center lg:bg-none lg:h-auto lg:relative">
          {/* <img height="200" width="200" src={HomeImage} alt="home watch" /> */}
          <img
            className="min-w-[800px] pr-[400px] pb-[100px]"
            src="homewatchimage.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center md:flex-row md:p-2 md:justify-center md:gap-10">
        {cardData.map((cardItem, index) => {
          const { title, count, icon } = cardItem;
          return <Card key={index} title={title} count={count} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default Home;
