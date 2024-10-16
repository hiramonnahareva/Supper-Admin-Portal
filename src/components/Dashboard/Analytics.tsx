// components/Analytics.js
import { MdOutlineIncompleteCircle } from 'react-icons/md';
import { HiArrowTrendingUp, HiOutlineArrowTrendingDown, HiDocumentText } from 'react-icons/hi2';

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-black">Analytics Dashboard</h1>

      {/* Two Cards in Row */}
      <div className="flex flex-row gap-4 mt-4">
        {/* Total Clinics Card */}
        <div className="bg-white shadow-md p-5 rounded-md w-full md:w-[220px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">Total Clinics</h3>
            <div className="bg-blue-100 p-2 rounded-full">
              <MdOutlineIncompleteCircle size={24} className="text-blue-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-black">6,132</div>
          <div className="flex items-center text-red-500 text-sm mt-2">
            <span className="text-xl mr-2 font-semibold">6,102</span>
            <HiArrowTrendingUp size={24} className="text-red-500" />
          </div>
          <p className="text-gray-500 text-sm mt-1">Paid</p>
        </div>

        {/* Total Booking Card */}
        <div className="bg-white shadow-md p-5 rounded-md w-full md:w-[220px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">Total Bookings</h3>
            <div className="bg-red-100 p-2 rounded-full">
              <HiDocumentText size={24} className="text-red-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-black">23,102</div>
          <div className="flex items-center text-red-500 text-sm mt-2">
            <span className="text-xl mr-2 font-semibold">2,001</span>
            <HiOutlineArrowTrendingDown size={24} className="text-red" />
          </div>
          <p className="text-gray-500 text-sm mt-1">Not Confirmed</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
