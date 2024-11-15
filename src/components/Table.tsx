import React from 'react';
import Edit from './svgComponent/Edit';
import Delete from './svgComponent/Delete';
import Image from 'next/image';

const Table = ({data}) => {
    return (
        <table className="table-auto min-w-full rounded-xl overflow-hidden">
        <thead>
          {/* <tr class="bg-gray-50"> */}
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
      </table>
    );
};

export default Table;