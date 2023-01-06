import React from "react";
import Carousel from "better-react-carousel";
import { users } from "../assets/data";

import { AiOutlineCalendar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="reviews z-[-30] w-[100vw] p-5 lg:px-[200px] lg:overflow-hidden">
      `
      <Carousel
        style={{ zIndex: "-10" }}
        className="z-[-10]"
        cols={2}
        rows={1}
        gap={10}
        loop>
        {users.map((user, index) => {
          return (
            <Carousel.Item style={{ zIndex: "-10" }}>
              <div key={index} className="eachCard  flex flex-col my-2 gap-2">
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
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Reviews;
