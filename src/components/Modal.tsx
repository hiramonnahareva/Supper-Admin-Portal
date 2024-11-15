import React from 'react';
import Close from './svgComponent/Close';

const Modal = ({setIsModalVisible}) => {
    return (
        <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        {/* overlay */}
        <div
          aria-hidden="true"
          className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
          onClick={() => setIsModalVisible(false)}
        ></div>
        {/* Modal */}
        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-xl">
            <button
              type="button"
              className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
              onClick={() => setIsModalVisible(false)}
            >
              <Close />
              <span className="sr-only">Close</span>
            </button>
            <div className="space-y-2 p-2">
              <div className="p-2 space-y-2 ">
                <p className="text-gray-500">Creating New Clilinc Account</p>
              </div>
            </div>
            <div className="space-y-2">
              <div
                aria-hidden="true"
                className="border-t border-gray-700 px-2"
              />
              <div className="grid grid-cols-1 place-items-center px-4 py-2">
                <form noValidate className="space-y-4 w-full">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-inter text-[#475569]"
                    >
                      Clinic Name
                    </label>
                    <input
                      name="email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
                    />
                  </div>
                </form>
              </div>
              <div
                aria-hidden="true"
                className="border-b border-gray-700 px-2"
              />
              <div className="px-6 py-2">
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm  bg-[#94a3b8] text-white "
                    onClick={() => setIsModalVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-white shadow border-transparent bg-[#007aff] focus:bg-[#11071F] focus:ring-offset-[#11071F]"
                  >
                    <span className="flex items-center gap-1">
                      <span>Save</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Modal;