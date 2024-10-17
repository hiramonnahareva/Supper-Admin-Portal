"use client";

import Image from 'next/image'; // Import Next.js Image component
import { FaChevronRight } from 'react-icons/fa'; // Importing the right arrow icon
import AnalyticsIcon from '../../assets/analytics.png'; // Import Analytics image
import ClinicIcon from '../../assets/banking.png'; // Import Clinic image

const Sidebar = ({ activeTab, handleTabClick, isSidebarOpen }) => {
  return (
    <div className={`bg-white shadow-md p-6 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'} md:w-64 md:block`}>
      {/* Dashboard Heading */}
      <h2 className="text-sm text-black font-semibold mb-6">Dashboard</h2>

      {/* Navigation Tabs (Analytics & Clinics) */}
      <div
        className={`flex justify-between items-center cursor-pointer p-2 mb-2 text-sm font-inter ${
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
        className={`flex justify-between items-center cursor-pointer p-2 mb-4 text-sm font-inter ${
          activeTab === 'Clinics' ? 'text-white bg-[#007AFF]' : 'text-gray-700 hover:bg-gray-100'
        } rounded-md`}
        onClick={() => handleTabClick('Clinics')}
      >
        <div className="flex items-center">
          <Image 
            src={ClinicIcon} 
            alt="Clinics" 
            width={20} 
            height={20} 
            className={`mr-2 ${activeTab === 'Clinics' ? 'filter brightness-100' : 'filter brightness-50'}`} 
          />
          <span>Clinics</span>
        </div>
        <FaChevronRight className={`${activeTab === 'Clinics' ? 'text-white' : 'text-gray-500'}`} />
      </div>

      
    </div>
  );
};

export default Sidebar;
