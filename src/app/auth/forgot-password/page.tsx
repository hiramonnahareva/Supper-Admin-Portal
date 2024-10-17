"use client";
import Image from "next/image";
import LogoIcon2 from "@/assets/logoicon2.png";
import BgFrame from "@/assets/bgFrame.png";

const ForgotPassword = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${BgFrame.src})`, // Set the background image
        backgroundSize: "cover", // Make sure the background covers the entire screen
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="bg-white py-12 px-16 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Image src={LogoIcon2} alt="logo" width={50} height={80} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-3 text-black font-inter">
          Forget Your Password?
        </h1>
        <p className="text-sm text-center text-gray-600 mb-8 font-inter">
          Enter your email & instructions will be sent to you!{" "}
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-inter text-[#475569]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
            />
          </div>

          <button
            type="submit"
            className="w-full font-inter bg-[#6237F0] text-white py-2 rounded-md hover:bg-[#0063CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6237F0]"
          >
            Send Recovery Email
          </button>

          <p className="text-center text-sm mt-6 font-inter text-[#475569] ">
            Forget it. Send me back to{" "}
            <a
              href="/auth/login"
              className="text-[#6237F0] hover:underline cursor-pointer font-inter"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
