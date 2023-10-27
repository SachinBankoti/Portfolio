"use client";
import { headerItems, userInfo } from "@/constants/constants";
import { NavItems } from "@/models/Header";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Header: React.FC = () => {
  const [navItem, showNavItems] = useState<boolean>(false);
  return (
    <header className="bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{userInfo.name}</h2>
        <BiMenu
          size={30}
          className="md:hidden"
          onClick={() => showNavItems((prevState) => !prevState)}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0  md:block ${
          navItem ? "block" : "hidden"
        }`}
      >
        {Object.keys(headerItems).map((item) => (
          <a
            className="block md:inline-block cursor-pointer"
            key={headerItems[item as keyof NavItems].label}
          >
            {headerItems[item as keyof NavItems].label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
