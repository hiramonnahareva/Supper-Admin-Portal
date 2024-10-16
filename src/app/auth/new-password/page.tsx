"use client"; 
import Image from 'next/image';
import LogoIcon2 from '../../../assets/logoicon2.png';
import BgFrame from '../../../assets/bgFrame.png'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons
import { useState } from 'react';

const NewPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // For confirm password

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible((prev) => !prev);
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
        <div className="bg-white py-14 px-8 md:px-16 rounded-lg shadow-md max-w-md w-full">
          <div className="flex justify-center mb-4">
            <Image src={LogoIcon2} alt="logo" width={50} height={80} />
          </div>
          <h1 className="text-2xl font-bold text-center mb-3 text-black font-inter">
            Create New Password
          </h1>
          <p className="text-sm text-center text-gray-600 mb-8 font-inter">
            Enter your new password to unlock the screen!
          </p>

          <form>
            {/* New Password Field */}
            <div className="mb-4 relative"> 
              <label htmlFor="newPassword" className="block mb-2 text-sm font-inter text-[#475569]">
                New Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-[#142D63] focus-within:border-[#142D63]">
                <input
                  type={passwordVisible ? 'text' : 'password'} 
                  name="newPassword"
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

            {/* Confirm Password Field */}
            <div className="mb-4 relative"> 
              <label htmlFor="confirmPassword" className="block text-sm mb-2 font-inter text-[#475569]">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-[#142D63] focus-within:border-[#142D63]">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'} 
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full px-3 py-2 rounded-md focus:outline-none" 
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="p-3 text-gray-500" 
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />} 
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex justify-between items-center mb-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="remindMe" className="mr-2" />
                <label htmlFor="remindMe" className="text-sm font-inter text-[#475569]">
                  You accept our Terms & Conditions
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-inter bg-[#6237F0] text-white py-2 rounded-md hover:bg-[#0063CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6237F0]"
            >
              Sign In
            </button>

            {/* Navigation to Sign In */}
            <p className="text-center text-sm mt-4 font-inter">
              Not you? Return{' '}
              <span className="text-[#6237F0] hover:underline cursor-pointer font-inter">
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    );
};

export default NewPassword;
