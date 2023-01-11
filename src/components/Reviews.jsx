import React, { useRef } from "react";
import Carousel from "better-react-carousel";
import { users } from "../assets/data";
import Slider from "react-slick";

import { AiOutlineCalendar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

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
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="text-blue-700 after:bg-blue-700  text-[1.3rem] mt-[2rem] text-center  after:absolute after:h-[0.2rem] after:w-[4rem] after:bottom-[-0.3rem] lg:after:bottom-[-0.6rem] after:left-[50%] after:translate-x-[-50%] lg:text-[2rem] lg:my-[3rem] font-semibold relative lg:after:h-[0.3rem] lg:after:w-[6rem] ">
        What Our Users Say
      </h1>
      <div
        id="testimonials"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="h-[22rem] mx-auto"
      >
        <div>
          <BsChevronLeft
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => arrowRef.current.slickPrev()}
          />
        </div>
        <Slider {...settings} ref={arrowRef}>
          {users.map((user, index) => {
            return (
              <div
                key={index}
                className="eachCard flex flex-col   "
                style={{
                  zIndex: -10000,
                }}
              >
                <div className="flex items-start justify-between  py-[0.3rem]">
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
                  <BiDotsVerticalRounded className="text-xl" />
                </div>
                <hr />
                <p className=" text-[0.8rem] text-[#919191] my-[0.4rem] ">
                  client
                </p>
                <h2 className="font-semibold my-[0.3rem]">{user.name}</h2>
                <p className=" text-[0.65rem] text-[#919191] md:text-sm">
                  {user.data}
                </p>
                <div className="  text-sm flex gap-3 text-[#919191] mt-[0.4rem]">
                  <AiOutlineCalendar className="text-lg" />
                  <p className="text-[0.6rem] ">20- Nov-2022</p>
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
    </div>
  );
};
export default Reviews;
