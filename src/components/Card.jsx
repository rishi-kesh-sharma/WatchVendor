import React from "react";
const Card = ({ icon, title, count }) => {
  return (
    <div className=" card h-[5rem]  w-[8rem] home_card">
      {icon}
      <h2 className="font-bold md:text-lg">{count}</h2>
      <p className="text-xs font-bold md:text-lg "> {title}</p>
    </div>
  );
};

export default Card;
