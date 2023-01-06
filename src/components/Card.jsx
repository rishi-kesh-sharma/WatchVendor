import React from "react";
const Card = ({ icon, title, count }) => {
  return (
    <div className="home_card md:min-w-[200px] md:min-h-[140px] md:p-4">
      {icon}
      <h2 className="font-bold md:text-lg">{count}</h2>
      <p className="text-xs font-bold md:text-lg "> {title}</p>
    </div>
  );
};

export default Card;
