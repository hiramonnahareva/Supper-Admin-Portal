'use client'
import Image from 'next/image';
import LogoIcon from '../../../assets/logo.png';
import GoogleIcon from '../../../assets/google.png';
import FacebookIcon from '../../../assets/facebook.png';
import AppleIcon from '../../../assets/niphone.png';
import TwitterIcon from '../../../assets/twiii.png';
import BgFrame from '../../../assets/bgFrame.png'; 
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter()
  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${BgFrame.src})`, // Set the background image
        backgroundSize: 'cover', // Make sure the background covers the entire screen
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="bg-white py-8 px-12 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-left mb-4">
          <Image src={LogoIcon} alt="logo" width={35} height={35} />
        </div>
        <h1 className="text-[1.189rem] font-bold text-left mb-3 text-black font-inter">
          Hey, Welcome back 👋
        </h1>
        <p className="text-xs text-left text-gray-600 mb-8 font-inter ">
          Welcome back! Please enter your details here...
        </p>

        <form onSubmit={(e) => {
          e.preventDefault()
          localStorage.setItem('token','sampletoken');
          router.replace('/dashboard')
        }}>
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

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-inter text-[#475569]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remindMe" className="mr-2" />
              <label htmlFor="remindMe" className="text-sm font-inter text-[#475569]">
                Remind me
              </label>
            </div>
            <a href='/auth/forgot-password' className="text-sm font-inter text-[#6237F0] hover:underline cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6237F0] font-inter text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007AFF]"
          >
            Sign in
          </button>
          <div className="flex justify-center space-x-4 mt-6 flex-wrap">
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007AFF] h-10 w-10 flex items-center justify-center">
              <Image src={GoogleIcon} alt="Google" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007AFF] h-10 w-10 flex items-center justify-center">
              <Image src={FacebookIcon} alt="Facebook" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007AFF] h-10 w-10 flex items-center justify-center">
              <Image src={AppleIcon} alt="Apple" width={20} height={20} />
            </button>
            <button className="rounded-full border border-gray-300 p-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007AFF] h-10 w-10 flex items-center justify-center">
              <Image src={TwitterIcon} alt="Twitter" width={24} height={24} /> {/* Larger size for Twitter */}
            </button>
          </div>
          <p className="text-center text-sm mt-4 font-inter text-[#475569]">
            Don’t have an account?{' '}
            <a href='/auth/signup' className="text-[#6237F0] hover:underline cursor-pointer font-inter ">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
