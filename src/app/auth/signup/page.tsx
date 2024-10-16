"use client"; 
import Image from 'next/image';
import { useState } from 'react';
import LogoIcon2 from '../../../assets/logoicon2.png';
import GoogleIcon from '../../../assets/google.png';
import FacebookIcon from '../../../assets/facebook.png';
import AppleIcon from '../../../assets/niphone.png';
import TwitterIcon from '../../../assets/twiii.png';
import BgFrame from '../../../assets/bgFrame.png'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const SignupPage = () => {
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
      <div className="bg-white py-16 px-16 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Image src={LogoIcon2} alt="logo" width={50} height={80} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-3 text-black font-inter">
          Hey, Hello 👋
        </h1>
        <p className="text-sm text-center text-gray-600 mb-8 font-inter">
          Create an account to start using DashTail
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="fullname" className="block mb-2 text-sm font-inter text-[#475569]">
              Full Name:
            </label>
            <input
              type="text"
              name="fullname"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-inter text-[#475569]">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
            />
          </div>

          <div className="mb-4 relative"> 
            <label htmlFor="password" className="block mb-2 text-sm font-inter text-[#475569]">
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

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remindMe" className="mr-2" />
              <label htmlFor="remindMe" className="text-sm font-inter text-[#475569]">
                You accept our Terms & Conditions
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-inter bg-[#6237F0] text-white py-2 rounded-md hover:bg-[#0063CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6237F0]"
          >
            Create An Account
          </button>

          <div className="flex justify-center space-x-4 mt-6 flex-wrap">
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6237F0] h-10 w-10 flex items-center justify-center">
              <Image src={GoogleIcon} alt="Google" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6237F0] h-10 w-10 flex items-center justify-center">
              <Image src={FacebookIcon} alt="Facebook" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6237F0] h-10 w-10 flex items-center justify-center">
              <Image src={AppleIcon} alt="Apple" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6237F0] h-10 w-10 flex items-center justify-center">
              <Image src={TwitterIcon} alt="Twitter" width={24} height={24} />
            </button>
          </div>

          <p className="text-center text-sm mt-4 font-inter">
            Already Registered?{' '}
            <a href='/auth/login' className="text-[#6237F0] hover:underline cursor-pointer font-inter">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
