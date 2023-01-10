import React, { useState, useRef } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPauseCircle } from "react-icons/fi";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  return (
    <div className="products-video mt-[2rem] before:bg-slate-100 w-[100%]">
      <div className="relative w-[90%]  max-w-[40rem] z-[2] mx-auto   md:mt-[5rem] ">
        <div
          className={`overlay absolute  top-0 left-0 right-0  bottom-0  ${
            !isPlaying && "bg-blue-400"
          }  rounded-lg  opacity-40`}></div>
        {isPlaying ? (
          <div className=" cursor-pointer  bg-purple-600 rounded-full h-[3rem] w-[3rem] md:h-[3rem] md:w-[3rem] absolute bottom-[0%] right-[0%] translate-x-[-50%] translate-y-[-50%]   flex justify-center items-center ">
            <FiPauseCircle
              className="text-white text-[4rem] md:text-[6.5rem] z-[100] "
              onClick={(e) => {
                videoRef.current.pause();
                setIsPlaying(false);
              }}
            />
          </div>
        ) : (
          <div className=" cursor-pointer  bg-purple-600 rounded-full h-[5.5rem] w-[5.5rem] md:h-[8rem] md:w-[8rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   flex justify-center items-center ">
            <AiFillPlayCircle
              className="text-white text-[4rem] md:text-[6.5rem]  "
              onClick={(e) => {
                videoRef.current.play();
                setIsPlaying(true);
              }}
            />
          </div>
        )}
        <video
          style={{ zIndex: -1 }}
          ref={videoRef}
          className=" rounded-lg object-contain"
          src="/products-video.mp4"
          // controls
        ></video>
      </div>
    </div>
  );
};

export default Video;
