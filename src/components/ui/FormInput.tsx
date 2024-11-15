import React from 'react';

// Define the type for the props
interface FormInputProps {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-inter text-[#475569]">
        {label}:
      </label>
      <input
        type="email"
        name="email"
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
      />
    </div>
  );
};

export default FormInput; 
