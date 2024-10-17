// components/Navbar.js
"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa"; // Importing the hamburger icon
import Union from "@/assets/Union.png"; // Import the Union image
import BgIcon from "@/assets/Bg.png"; // Import the Bg image

const Navbar = ({ toggleSidebar }: any) => {
  return (
    <div className="bg-white shadow-md flex items-center justify-between p-2 border-b border-gray-300">
      {" "}
      {/* Add border-b for bottom border */}
      {/* Hamburger Icon for small screens */}
      <div className="md:hidden flex items-center">
        <FaBars
          onClick={toggleSidebar}
          className="text-gray-700 cursor-pointer"
          size={24}
        />
      </div>
      <div className="flex items-center pl-2">
        {" "}
        {/* Remove border from this div */}
        <Image
          src={Union}
          alt="Union"
          width={24}
          height={24}
          className="mr-2"
        />
        <h1 className="text-2xl font-bold text-black">iSeeWell</h1>
      </div>
      {/* Right Rounded Image */}
      <div className="flex items-center">
        <Image
          src={BgIcon}
          alt="User"
          width={40}
          height={40}
          className="rounded-full border-none border-gray-300" // No border needed here
        />
      </div>
    </div>
  );
};

export default Navbar;
