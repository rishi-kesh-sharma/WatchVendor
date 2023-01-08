import React, { useRef } from "react";
import Carousel from "better-react-carousel";
import { users } from "../assets/data";
import Slider from "react-slick";

import { AiOutlineCalendar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Reviews = () => {
  const arrowRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "carousel",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="h-[30rem]">
      <div>
        <BsChevronLeft
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={() => arrowRef.current.slickPrev()}
        />
      </div>
      <Slider
        className="z-[-10]"
        style={{ zIndex: -100 }}
        {...settings}
        ref={arrowRef}>
        {users.map((user, index) => {
          return (
            <div key={index} className="eachCard flex flex-col my-2 gap-2">
              <div className="h-[40px] flex gap-4">
                <img
                  src={user.profile}
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex gap-1 text-yellow-300">
                  {user.stars.map((star) => star)}
                </div>
              </div>
              <p className="text-[#919191] ">client</p>
              <h2 className="font-bold">{user.name}</h2>
              <p className=" text-xs text-[#919191] md:text-sm">{user.data}</p>
              <div className="  text-sm flex gap-3 text-[#919191]">
                <AiOutlineCalendar className="text-lg" />
                <p className="text-sm">20- Nov-2022</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        {" "}
        <BsChevronRight
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={() => arrowRef.current.slickNext()}
        />
      </div>
    </div>
  );
};
export default Reviews;
