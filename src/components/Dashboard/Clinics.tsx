/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Pagination from "../Pagination";
import Search from "../svgComponent/Search";
import Modal from "../Modal";
import Table from "../Table";

const clinics = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const data = [
    {
      id: "20010510",
      image: "https://pagedone.io/asset/uploads/1697536419.png",
      role: "Customer",
      category: "Accessories",
      status: "Trial",
      isActive: false,
    },
    {
      id: "20010511",
      image: "https://pagedone.io/asset/uploads/1697536435.png",
      role: "Partner",
      category: "Electronics",
      status: "Paid",
      isActive: false,
    },
    {
      id: "20010512",
      image: "https://pagedone.io/asset/uploads/1697536451.png",
      role: "Customer",
      category: "Telecommunications",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010513",
      image: "https://pagedone.io/asset/uploads/1697536466.png",
      role: "Reseller",
      category: "Retail",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010514",
      image: "https://pagedone.io/asset/uploads/1697536479.png",
      role: "Reseller",
      category: "Finance",
      status: "Paid",
      isActive: false,
    },
    {
      id: "20010515",
      image: "https://pagedone.io/asset/uploads/1697536494.png",
      role: "Partner",
      category: "Entertainment",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010516",
      image: "https://pagedone.io/asset/uploads/1697536512.png",
      role: "Customer",
      category: "Electronics",
      status: "Due",
      isActive: false,
    },
  ];

  const totalPages = 78;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="p-5 border rounded-lg border-4xl border-gray-300 bg-white mb-20">
        <div className="flex flex-col overflow-hidden">
          <div className=" overflow-x-auto pb-4">
            <div className="min-w-full inline-block align-middle">
              <div className="border-b border-gray-300 flex justify-between py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3 px-4 ps-10 text-sm text-gray-900 focus:outline-none"
                    placeholder="Search..."
                    required
                  />
                </div>
                <button
                  className="bg-[#007aff] hover:bg-blue-700 text-white py-1 px-4 rounded"
                  onClick={() => {
                    //
                    setIsModalVisible(true);
                  }}
                >
                  Add New Clinic
                </button>
              </div>
              <div className="p-5">
                Total Clinics:{" "}
                <span className="text-emerald-500 font-bold">8</span>
              </div>
              <div className="overflow-hidden  rounded-lg">
                {/* <table className="table-auto min-w-full rounded-xl overflow-hidden">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        CLINIC ID{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        LOGO{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                      >
                        {" "}
                        CLINIC NAME{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        EMAIL{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        SUBSCRIPTION{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        STATUS{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        Actions{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {data.map((row) => (
                      <tr
                        key={row.id}
                        className="bg-white transition-all duration-500"
                      >
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.id}
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <Image
                              width={40}
                              height={40}
                              src={row.image}
                              alt={`${row.role} image`}
                            />
                          </div>
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.role}
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.category}
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          <div
                            className={`py-1.5 px-2.5 rounded-lg flex justify-center w-20 items-center gap-1 border ${
                              row.status === "Paid"
                                ? "bg-emerald-50 border-emerald-500"
                                : row.status === "Trial"
                                ? "bg-blue-50 border-blue-500"
                                : "bg-amber-50 border-amber-500"
                            }`}
                          >
                            <span
                              className={`font-medium text-xs ${
                                row.status === "Paid"
                                  ? "bg-emerald-50 border-emerald-500 text-emerald-600"
                                  : row.status === "Trial"
                                  ? "bg-blue-50 border-blue-500 text-blue-600"
                                  : "bg-amber-50 border-amber-500 text-amber-600"
                              }`}
                            >
                              {row.status}
                            </span>
                          </div>
                        </td> 
                        <td className="p-5 text-sm font-medium text-gray-900">
                          <label className="inline-flex  items-center cursor-pointer overflow-hidden">
                            <input
                              type="checkbox"
                              defaultChecked={row.isActive}
                              className="hidden peer w-20 "
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                          </label>
                        </td>
                        <td className="flex p-5 items-center gap-0.5">
                          <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                            <Edit />
                          </button>
                          <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                            <Delete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                <Table data={data}/>
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>

      {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
    </>
  );
};

export default clinics;
