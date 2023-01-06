import { MdDashboardCustomize } from "react-icons/md";
import { AiFillSetting, AiFillStar } from "react-icons/ai";

import { BsDownload, BsShare } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { IoExpandOutline } from "react-icons/io5";

const homeCardData = [
  {
    icon: (
      <BsDownload className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total downloads",
    count: "1.4M +",
  },
  {
    icon: (
      <BiLike className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total reviews",
    count: "1.2M +",
  },
  {
    icon: (
      <BsShare className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total shares",
    count: "1M +",
  },
  {
    icon: (
      <IoExpandOutline className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total users",
    count: "1M +",
  },
];

const CenterImage = () => {
  return (
    <div className="grid w-[100vw] place-items-center p-8 bg-[url(hexagon.png)] bg-contain bg-center bg-no-repeat md:h-[500px] md:bg-contain md:bg-center  lg:h-[100vh]  lg:w-[34%] lg:bg-contain ">
      <img
        className="object-contain  lg:h-[500px] lg:w-[500px]"
        src="product2.png"
        alt=""
      />
    </div>
  );
};

const features = [
  {
    title: "Lorem Impulse Topic",
    icon: (
      <AiFillSetting className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-1 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <AiFillSetting className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl text-[4rem] mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BiLike className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl text-[4rem] mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    centerImage: <CenterImage />,
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <IoExpandOutline className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl text-[4rem] mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsShare className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl text-[4rem] mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsDownload className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl text-[4rem] mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
];

const footerLinks = {
  services: [
    {
      name: "Service1",
      path: "/service1",
    },

    {
      name: "Service2",
      path: "/service2",
    },
    {
      name: "Service3",
      path: "/service3",
    },
    {
      name: "Service4",
      path: "/service4",
    },
    {
      name: "Service1",
      path: "/service1",
    },
    {
      name: "Service5",
      path: "/service5",
    },
  ],
  aboutUs: [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Donate",
      path: "/donate",
    },
  ],
};

const users = [
  {
    profile: "../../public/product1.png",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
      <AiFillStar className="starImg" />,
    ],
  },
];
export default users;

export { features, footerLinks, homeCardData, users };
