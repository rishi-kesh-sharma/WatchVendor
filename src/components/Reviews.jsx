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
    ],
  };
  return (
    // <div className="reviews overflow-hidden z-[-100] w-[100vw] p-5 lg:px-[200px] lg:overflow-hidden">
    //   `
    //   <Carousel
    //     style={{ zIndex: "-10", border: "2px solid red" }}
    //     className="carousel"
    //     cols={2}
    //     rows={1}
    //     gap={20}
    //     loop
    //   >
    //     {users.map((user, index) => {
    //       return (
    //         <Carousel.Item style={{ zIndex: "-10" }}>
    //           <div
    //             key={index}
    //             className="eachCard z-[-100] flex flex-col my-2 gap-2"
    //           >
    //             <div className="h-[40px] flex gap-4">
    //               <img
    //                 src={user.profile}
    //                 alt=""
    //                 className="h-[30px] w-[30px] rounded-full"
    //               />
    //               <div className="flex gap-1 text-yellow-300">
    //                 {user.stars.map((star) => star)}
    //               </div>
    //             </div>
    //             <p className="opacity-50 z-[-10]">client</p>
    //             <h2 className="font-bold">{user.name}</h2>
    //             <p className="opacity-60 text-sm">{user.data}</p>
    //             <div className=" text-sm flex gap-3 opacity-50">
    //               <AiOutlineCalendar className="text-lg" />
    //               <p className="text-sm">20- Nov-2022</p>
    //             </div>
    //           </div>
    //         </Carousel.Item>
    //       );
    //     })}
    //   </Carousel>
    // </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="h-[30rem]"
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
              className="eachCard z-[-100] flex flex-col my-2 gap-2"
            >
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
              <p className="opacity-50 z-[-10]">client</p>
              <h2 className="font-bold">{user.name}</h2>
              <p className="opacity-60 text-sm">{user.data}</p>
              <div className=" text-sm flex gap-3 opacity-50">
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
