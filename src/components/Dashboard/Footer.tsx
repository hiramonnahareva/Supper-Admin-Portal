"use client";
import Image from 'next/image';
import UserImage from '../../assets/userImage.png'; // Import the user image
import { MdLogout } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-white shadow-md flex flex-col sm:flex-row items-center justify-between p-2 border-t border-gray-300 w-full fixed bottom-0 left-0">
      
      {/* User Info Section */}
      <div className="bg-gray-100 py-1 px-1 flex items-center border-gray-300 w-full sm:w-auto mb-2 sm:mb-0 ">
        <Image 
          src={UserImage} 
          alt="User" 
          width={40} 
          height={40} 
          className="mr-2"
        />
        <div className="flex flex-col md:ml-2">
          <span className="text-black font-semibold">Jenny Wilson</span>
          <span className="text-gray-500 text-sm">jenny@codehaper.com</span>
        </div>
        {/* Logout Icon */}
        <div className="cursor-pointer pl-4 text-gray-700 hover:text-red-600">
          <MdLogout size={24} />
        </div>
      </div>
      
      {/* Left Side Text */}
      <div className="text-black text-sm text-center w-full sm:w-auto sm:mr-auto mb-2 sm:mb-0 md:ml-2">
        2024 © iSeeWell
      </div>

      {/* Right Side Text */}
      <div className="text-black text-sm text-center w-full sm:w-auto">
        Power By <span className="text-blue-500">Web Sters</span>
      </div>
    </div>
  );
};

export default Footer;
