"use client";

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import AnalyticsIcon from '../../assets/analytics.png';
import ClinicIcon from '../../assets/banking.png'; 

const Sidebar = ({ activeTab, handleTabClick, isSidebarOpen, setIsSidebarOpen }) => {
  return (
   <div className='relative'>
     <div 
      className={`bg-white shadow-md transition-all duration-300 ease-in-out h-screen md:p-6 
        ${isSidebarOpen ? 'w-64 absolute top-0 left-0 bottom-20 p-6 z-50' : 'w-0 opacity-0 p-0'} 
        md:w-64 md:opacity-100 transition-all duration-300`} // Adjust width and opacity based on isSidebarOpen
    > 
      
      <h2 className={`text-sm text-black font-semibold mb-6 ${isSidebarOpen ? 'block' : 'md:block hidden'}`}>Dashboard</h2>

      <div
        className={`flex justify-between items-center cursor-pointer p-2 mb-2 text-sm ${
          activeTab === 'Analytics' ? 'text-white bg-[#007AFF]' : 'text-gray-700 hover:bg-gray-100'
        } rounded-md`}
        onClick={() => handleTabClick('Analytics')}
      >
        <div className="flex items-center">
          <Image 
            src={AnalyticsIcon} 
            alt="Analytics" 
            width={20} 
            height={20} 
            className={`mr-2 ${activeTab === 'Analytics' ? 'filter brightness-100' : 'filter brightness-50'}`} 
          />
          <span>Analytics</span>
        </div>
        <FaChevronRight className={`${activeTab === 'Analytics' ? 'text-white' : 'text-gray-500'}`} />
      </div>

      <div
        className={`flex justify-between items-center cursor-pointer p-2 mb-4 text-sm ${
          activeTab === 'Clinics' ? 'text-white bg-[#007AFF]' : 'text-gray-700 hover:bg-gray-100'
        } rounded-md`}
        onClick={() => handleTabClick('Clinics')}
      >
        <div className="flex items-center ">
          <Image 
            src={ClinicIcon} 
            alt="Clinics" 
            width={20} 
            height={20} 
            className={`mr-2 ${activeTab === 'Clinics' ? 'filter brightness-100 ' : 'filter brightness-50'}`} 
          />
          <span>Clinics</span>
        </div>
        <FaChevronRight className={`${activeTab === 'Clinics' ? 'text-white' : 'text-gray-500'}`} />
      </div>
    </div>
      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
       <div
         className="bg-black/60 backdrop-blur-sm mb:bg-transparent fixed inset-0 z-40"
         onClick={() => setIsSidebarOpen(false)} // Close the sidebar when overlay is clicked
       ></div>
      )}
      </div>
  );
};

export default Sidebar;


