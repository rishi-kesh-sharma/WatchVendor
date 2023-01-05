import React from "react";
import Carousel from "better-react-carousel";
import { users } from "../assets/data";

import { AiOutlineCalendar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="reviews w-[100vw] p-5 lg:px-[200px]">
      `
      <Carousel cols={2} rows={1} gap={10} loop>
        {users.map((user, index) => {
          return (
            <Carousel.Item>
              <div key={index} className="eachCard  flex flex-col gap-2">
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
                <p className="opacity-50">client</p>
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

// import React from "react";
// import styles from "../../../styles/HomeCss/UserSay.module.css";
// import quote from "../../../public/Home/userSay/quote.png";
// import star from "../../../public/Home/userSay/star.png";
// import users from "../../../Data/users";
// import Image from "next/image";
// import Slider from "react-slick";

// function UserSay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     className: styles.slider,

//     // centerMode :true,

//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 325,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className={styles.userContainer}>
//       <div className="content">
//         <div className={styles.userContent}>
//           <span className={styles.userSayText}>Our Users Say</span>
//           <span className={styles.userSaySecondText}>
//             Our app is changing people’s lives. And we receive gratitude
//             everyday.
//           </span>
//         </div>

//         <Slider {...settings}>
//           {users.map((user, index) => {
//             return (

//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default UserSay;
