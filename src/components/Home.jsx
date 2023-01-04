import React from "react";
import HomeImage from "../assets/homewatchimage.png";
import Card from "./Card";
import { homeCardData as cardData } from "../assets/data";

const Home = () => {
  return (
    <div>
      <div className=' bg-cover flex align-middle justify-center w-[100%] pt-[100px] h-[100vh] gap-9 bg-[url("../../public/homebackground.png")] '>
        <div className="home_left_container w-[336px] mt-6   ">
          <h1 className="font-semibold text-3xl  ">
            {" "}
            Landing page for showcase watch
          </h1>
          <p className="mt-9">
            {" "}
            minus odio molestias dignissimos porro eveniet. Tempore ducimus
            aperiam, repellendus similique repellat quidem atque voluptate autem
            incidunt amet sapiente, ex adipisci neque vitae. Et a unde
            reiciendis debitis cum modi eius enim obcaecati, numquam labore
            quam, saepe atque incidunt. Explicabo.
          </p>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="home_right_container pt-[100px] ">
          {/* <img height="200" width="200" src={HomeImage} alt="home watch" /> */}
          <img width="400" height="400" src="homewatchimage.png" alt="" />
        </div>
      </div>
      <div className=" flex justify-center gap-5 home_bottom_container mt-10">
        {cardData.map((cardItem, index) => {
          const { title, count, icon } = cardItem;
          return <Card key={index} title={title} count={count} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default Home;
