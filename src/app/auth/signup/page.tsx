"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import router for navigation
import LogoIcon2 from '../../../assets/logoicon2.png';
import BgFrame from '../../../assets/bgFrame.png'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Link from 'next/link';

const SignupPage = () => {
  const router = useRouter(); // Initialize router
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    termsAccepted: false
  });
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password validation: At least 8 characters, 1 special character
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      setError("Password must be at least 8 characters long and include a special character.");
      return;
    }

    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    setError(""); // Clear any previous error
    console.log("Form submitted:", formData);

    // Navigate to the dashboard page
    router.push('/dashboard');
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${BgFrame.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block mb-2 text-sm font-inter text-[#475569]">
              Full Name:
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                id="termsAccepted"
                className="mr-2"
              />
              <label htmlFor="termsAccepted" className="text-sm font-inter text-[#475569]">
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

          <p className="text-center text-sm mt-4 font-inter">
            Already Registered?{' '}
            <Link href='/auth/login' className="text-[#6237F0] hover:underline cursor-pointer font-inter">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;