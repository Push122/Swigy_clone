import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";

const Heade = () => {
  const [toggle, settoggle] = useState(false);

  const ShowSideMenu = () => {
    settoggle(true);
  };

  const HideSideMenu = () => {
    settoggle(false);
  };

  const links = [
    {
      Icon: <IoSearch />,
      name: "Search",
    },
    {
      Icon: <CiDiscount1 />,
      name: "Offers",
      sup: "new",
    },
    {
      Icon: "",
      name: "Help",
    },
    {
      Icon: "",
      name: "Sign IN",
    },
    {
      Icon: "",
      name: "Carts",
    },
  ];

  return (
    <>
     
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={HideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: 99999999,
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-500 p-6"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
       
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#fc8019] text-white py-2 px-4 rounded-lg hover:bg-[#e57317] focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>

   
      <header className="p-3 shadow-xl sticky top-0 bg-white z-[9999]">
        <div className="flex items-center max-w-[1200px] mx-auto">
          <div className="w-[100px]">
            <img src="/swigy.jpg" className="w-16 h-11" alt="" />
          </div>
          <div>
            <span className="font-bold border-b-[3px]">Sagda</span> Jabalpur, Madhya Pradesh, India{" "}
            <SlArrowDown
              fontSize={25}
              onClick={ShowSideMenu}
              className="cursor-pointer font-bold inline text-[0.9rem] text-[#fc8019]"
            />
          </div>
          <div className="ml-auto">
            <nav className="hidden md:flex list-none gap-5 font-semibold text-[18px]">
              {links.map((Link, index) => (
                <li key={index} className="flex cursor-pointer items-center hover:text-[#fc8019] gap-2">
                  {Link.Icon}
                  {Link.name}
                  <sup>{Link.sup}</sup>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heade;
