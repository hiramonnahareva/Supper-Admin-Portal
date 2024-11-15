"use client";

import { MdOutlineIncompleteCircle } from 'react-icons/md';
import { HiArrowTrendingUp, HiOutlineArrowTrendingDown, HiDocumentText } from 'react-icons/hi2';

const cardData = [
  {
    id: 1,
    title: 'Total Clinics',
    count: '6,132',
    change: '6,102',
    icon: <MdOutlineIncompleteCircle size={24} className="text-blue-500" />,
    iconBg: 'bg-blue-100',
    changeIcon: <HiArrowTrendingUp size={24} className="text-red-500" />,
    changeColor: 'text-red-500',
    description: 'Paid',
  },
  {
    id: 2,
    title: 'Total Bookings',
    count: '23,102',
    change: '2,001',
    icon: <HiDocumentText size={24} className="text-red-500" />,
    iconBg: 'bg-red-100',
    changeIcon: <HiOutlineArrowTrendingDown size={24} className="text-red-500" />,
    changeColor: 'text-red-500',
    description: 'Not Confirmed',
  },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-black">Analytics Dashboard</h1>

      {/* Cards Grid for Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cardData.map((card) => (
          <div key={card.id} className="bg-white shadow-md p-5 rounded-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <div className={`${card.iconBg} p-2 rounded-full`}>
                {card.icon}
              </div>
            </div>
            <div className="text-3xl font-bold text-black">{card.count}</div>
            <div className={`flex items-center ${card.changeColor} text-sm mt-2`}>
              <span className="text-xl mr-2 font-semibold">{card.change}</span>
              {card.changeIcon}
            </div>
            <p className="text-gray-500 text-sm mt-1">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;

