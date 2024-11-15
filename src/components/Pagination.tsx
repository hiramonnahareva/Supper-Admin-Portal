import React from 'react';
import PreviousArrow from './svgComponent/PreviousArrow';
import NextArrow from './svgComponent/NextArrow';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate page number links
  const generatePagination = () => {
    const pages: JSX.Element[] = [];

    // Show the first few pages (1, 2, 3, 4, 5)
    const start = 1;
    const end = Math.min(5, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(i);
          }}
          className={`${
            currentPage === i ? 'bg-primary/20' : 'hover:bg-gray-100'
          } px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none`}
        >
          {i}
        </a>
      );
    }

    // Add ellipsis if the total pages are larger than 5
    if (totalPages > 5) {
      pages.push(
        <span key="ellipsis" className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">
          ...
        </span>
      );
    }

    // Show the last page if there are more than 5 pages
    if (totalPages > 5) {
      pages.push(
        <a
          key={totalPages}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(totalPages);
          }}
          className={`${
            currentPage === totalPages ? 'bg-primary/20' : 'hover:bg-gray-100'
          } px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg focus:outline-none`}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-10 space-x-2 overflow-hidden">
      {/* Previous Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        className="bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
        disabled={currentPage === 1}
      >
        <div className="flex justify-center items-center">
          <PreviousArrow />
          <span className="pb-1">Previous</span>
        </div>
      </a>

      {/* Page Number Links */}
      {generatePagination()}

      {/* Next Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        className="bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
        disabled={currentPage === totalPages}
      >
        <div className="flex justify-center items-center">
          <span className="pb-1">Next</span>
          <NextArrow />
        </div>
      </a>
    </div>
  );
};

export default Pagination;
