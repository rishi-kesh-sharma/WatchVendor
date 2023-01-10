import React from "react";
const Card = ({ icon, title, count }) => {
  return (
    <div className=" bg-white card h-[5rem]   w-[8rem] md:w-[10rem] lg:w-[13rem] lg:h-[10rem] xl:w-[15rem]  home_card">
      {icon}
      <h2 className="font-semibold md:text-lg lg:text-xl xl:text-2xl">
        {count}
      </h2>
      <p className="text-xs font-semi md:text-sm lg:text-xl"> {title}</p>
    </div>
  );
};

export default Card;
