"use client"; 
import Image from 'next/image';
import LogoIcon2 from '@/assets/logoicon2.png';
import UserImage from '@/assets/user.png';
import BgFrame from '@/assets/bgFrame.png'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons
import { useState } from 'react';

const LockScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <div
    className="flex justify-center items-center min-h-screen p-4"
    style={{
      backgroundImage: `url(${BgFrame.src})`, // Set the background image
      backgroundSize: 'cover', // Make sure the background covers the entire screen
      backgroundPosition: 'center', // Center the background image
    }}
  >
      <div className="bg-white py-14 px-16 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Image src={LogoIcon2} alt="logo" width={50} height={80} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-3 text-black font-inter">
        Lock Screen        </h1>
        <p className="text-sm text-center text-gray-600 mb-4 font-inter">
            Enter your password to unlock the screen!      
        </p>

        <div className="flex flex-col items-center mb-4">
          <Image
            src={UserImage}
            alt="User"
            width={50} 
            height={50} 
            className="rounded-full mb-2" 
          />
          <p className="text-lg text-black font-inter">Karthikeya Marupthy</p>
        </div>

        <form>
        <div className="mb-4 relative"> {/* Relative for positioning */}
            <label htmlFor="password" className="block text-sm font-inter text-[#475569] mb-2">
              Password:
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-[#142D63] focus-within:border-[#142D63]">
              <input
                type={passwordVisible ? 'text' : 'password'} 
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 rounded-md focus:outline-none" 
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-3 text-gray-500" 
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-inter bg-[#6237F0] text-white py-2 rounded-md hover:bg-[#0063CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6237F0]"
          >
            Unlock
          </button>
         

          <p className="text-center text-sm mt-4 font-inter">
          Not you? Return {' '}
            <a href='/auth/login' className="text-[#6237F0] hover:underline cursor-pointer font-inter">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LockScreen;
