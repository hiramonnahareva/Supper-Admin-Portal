"use client";
import Image from "next/image";
import LogoIcon2 from "@/assets/logoicon2.png";
import { useState } from "react";

const VerificatonScreen = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/, "");
    const newCode = [...code];
    newCode[index] = value;

    if (value && index < 5) {
      const nextInput = document.getElementById(
        `code-${index + 1}`
      ) as HTMLInputElement;
      nextInput?.focus();
    }

    setCode(newCode);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D6E8F6] p-4">
      <div className="bg-white py-12 px-12 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Image src={LogoIcon2} alt="logo" width={50} height={80} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-3 text-black font-inter">
          Two Factor Verification
        </h1>
        <p className="text-sm text-center text-gray-600 mb-4 font-inter">
          Enter the 6-figure confirmation code shown on the email
        </p>

        <form>
          <div className="flex justify-between mb-6">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                id={`code-${index}`}
                value={value}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63] text-xl"
                maxLength={1}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remindMe" className="mr-2" />
              <label
                htmlFor="remindMe"
                className="text-sm font-inter text-[#475569]"
              >
                Didn’t receive your code?{" "}
                <span className="text-[#6237F0] hover:underline cursor-pointer font-inter">
                  Resend
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-inter bg-[#6237F0] text-white py-2 rounded-md hover:bg-[#0063CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6237F0]"
          >
            Verify Now
          </button>

          <p className="text-center text-sm mt-4 font-inter text-red-500">
            Don’t share the verification code with anyone!
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerificatonScreen;
