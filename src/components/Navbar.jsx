import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : "md:2rem")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : "md:2rem")};
  background: #bd87f6;
  border-radius: 16px;
  color: white;
`;
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isOnSmDevice, setIsOnSmDevice] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const handleResize = (e) => {
    if (window.innerWidth > 768) return setIsOnSmDevice(false);
    setIsOnSmDevice(true);
  };

  addEventListener("scroll", (e) => {
    if (window.scrollY > 10) return setWhiteBackground(true);
    setWhiteBackground(false);
  });

  addEventListener("resize", handleResize);
  useEffect(() => {
    if (window.innerWidth > 768) return setIsOnSmDevice(false);
    return setIsOnSmDevice(true);
  }, []);

  return (
    <div className="relative min-h-[100px] " style={{ zIndex: 1000 }}>
      {!show && (
        <FiMenu
          className="fixed z-[5000] top-6 right-[3rem] text-3xl font-extralight md:hidden"
          onClick={(e) => setShow(true)}
        />
      )}
      {show && (
        <RxCross1
          className="fixed top-4 text-3xl  left-2 z-50 md:hidden"
          onClick={(e) => setShow(false)}
        />
      )}

      {/* navbar for small device */}
      {show && isOnSmDevice && (
        <ul className="fixed left-0 z-40  right-0 top-0 flex flex-col w-[100vw] items-center justify-around h-[100vh] bg-white py-[3rem] md:hidden lg:hidden">
          <li className="m-2 text-lg font-semibold  ">
            <a href="/">Home</a>
          </li>
          <hr className="bg-purple-400  w-[100%] " />

          <li className="m-2 text-lg font-semibold  ">
            <a href="/overview">Overview</a>
          </li>
          <hr className="bg-purple-400 w-[100%]" />
          <li className="m-2 text-lg font-semibold  ">
            <a href="/features">Features</a>
          </li>
          <hr className="bg-purple-400 w-[100%]" />
          <li className="m-2 text-lg font-semibold  ">
            <a href="/screenshots">Screenshots</a>
          </li>
          <hr className="bg-purple-400 w-[100%] " />
          <li className="m-2 text-lg font-semibold  ">
            <a href="/blog">Blog</a>
          </li>
          <hr className="bg-purple-400 w-[100%]" />
          <li className="m-2 text-lg font-semibold  ">
            <a href="/buy">
              <Button mdWidth={"110px"} mdHeight={"40px"}>
                Buy Now
              </Button>
            </a>
          </li>
        </ul>
      )}
      {!isOnSmDevice && (
        <ul
          style={{ zIndex: 1000 }}
          className={`fixed hidden  left-0 right-0  top-0 md:flex  w-[100vw] items-center justify-center h-[5rem]   md:h-[4rem] ${
            whiteBackground ? "bg-white " : "bg-transparent"
          }`}>
          <li className="mx-[1rem] py-[0.4rem] text-lg font-semibold  md:text-sm  ">
            <a href="#home">Home</a>
          </li>

          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#overview">Overview</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#features">Features</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#testimonials">Screenshots</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="/blog">Blog</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="/buy">
              <Button mdWidth={"110px"} mdHeight={"40px"}>
                Buy Now
              </Button>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
