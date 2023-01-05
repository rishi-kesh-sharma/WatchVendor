import React from "react";
const Card = ({ icon, title, count }) => {
  return (
    <div className="home_card md:min-w-[300px] md:min-h-[200px] md:p-10">
      {icon}
      <h2 className="font-bold md:text-3xl">{count}</h2>
      <p className="text-xs font-bold md:text-2xl "> {title}</p>
    </div>
  );
};

export default Card;
