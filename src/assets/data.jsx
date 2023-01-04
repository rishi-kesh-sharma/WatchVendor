import { MdDashboardCustomize } from "react-icons/md";
import { AiFillSetting, AiFillStar } from "react-icons/ai";

import { BsDownload, BsShare } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { IoExpandOutline } from "react-icons/io5";

const homeCardData = [
  {
    icon: (
      <BsDownload className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded " />
    ),
    title: "Total downloads",
    count: "1.4M +",
  },
  {
    icon: (
      <BiLike className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded " />
    ),
    title: "Total reviews",
    count: "1.2M +",
  },
  {
    icon: (
      <BsShare className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded " />
    ),
    title: "Total shares",
    count: "1M +",
  },
  {
    icon: (
      <IoExpandOutline className="font-extrabold text-2xl bg-[#C6BFFB] p-[3px] rounded " />
    ),
    title: "Total users",
    count: "1M +",
  },
];

const CenterImage = () => {
  return (
    <div className=" relative w-[33%] h-[100%] bg-[url(hexagon.png)] bg-contain bg-no-repeat flex-auto">
      <img
        className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
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
      <AiFillSetting className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <AiFillSetting className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BiLike className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
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
      <IoExpandOutline className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsShare className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsDownload className=" cursor-pointer absolute top-[30px] right-[10px] h-[60px] w-[60px] font-medium rounded-full opacity-8 p-2 bg-[#C6BFFB] color-[#2F2F2F]" />
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
