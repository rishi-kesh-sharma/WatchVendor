import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { users } from "../assets/data";
function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "slider",

    centerMode: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="userContainer">
      <div className="content">
        <div className={"userContent"}>
          <span className="ReviewsText">Our Users Say</span>
          <span className="ReviewSecondText">
            Our app is changing people’s lives. And we receive gratitude
            everyday.
          </span>
        </div>

        <Slider {...settings}>
          {users.map((user, index) => {
            return (
              <div key={index} className="eachCard">
                <p>{user.data}</p>
                <div className="profile">
                  <img src={user.profile} alt="..." className="profileImg" />
                  <div className="aboutProfile">
                    <span className="userName">{user.name}</span>
                    <span className="userFrom">{user.from}</span>
                    <div className="stars">
                      {user.stars.map((star) => {
                        return star;
                      })}
                      {/* <img src={star} alt="..." className="starImg" />
                      <img src={star} alt="..." className="starImg" />
                      <img src={star} alt="..." className="starImg" />
                      <img src={star} alt="..." className="starImg" />
                      <img src={star} alt="..." className="starImg" /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
