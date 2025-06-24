import React, { useState } from "react";
import { useFilter } from "./FilterContext";

function FiltersBar() {
  const { isFilterOpen, toggleFilter } = useFilter();

  return (
    <div>
      {/* filter lg */}
      <div
        className="hidden lg:block w-[250px] bg-white rounded-3xl xl:w-[295px] 1xl:w-[260px] xl:h-[1420px] 1xl:h-[1550px] border border-slate-300"
        id="filterSidebar"
      >
        {/* content */}
        <div className="mx-6 my-6">
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Filters</h2>
            <i className="fa-solid fa-sliders text-main-army"></i>
          </div>
          {/* Basic filter */}
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          <ul className="flex flex-col my-5 gap-3">
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">T-Shirt</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Shorts</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Shirts</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Hoodie</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Jeans</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
          </ul>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Price filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Price</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="flex flex-col gap-5 mt-5 items-center">
            <input
              type="text"
              className="form-input w-56 bg-gray-100 rounded-lg py-1 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400 text-center"
              placeholder="Enter Lower Price"
            />
            <i className="fa-solid fa-grip-lines-vertical text-main-army"></i>
            <input
              type="text"
              className="form-input w-56 bg-gray-100 rounded-lg py-1 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400 text-center"
              placeholder="Enter Higher Price"
            />
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Color filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Color</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="grid grid-cols-4 gap-4 my-6 items-center">
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-green-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-red-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-yellow-300 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-orange-500 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-sky-400 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-blue-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-pink-400 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-teal-400 fa-2xl"></i>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Size filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Size</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="my-6">
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              XX-Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              X-Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Medium
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              X-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              XX-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              3X-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              4X-Large
            </button>
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Dress Style filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Dress Style</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <ul className="flex flex-col my-5 gap-3">
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Casual</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Formal</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Party</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Gym</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
          </ul>
          <button className="rounded-3xl bg-main-yellow xl:w-56 1xl:w-48 h-10 font-semibold ml-2 my-4">
            Apply Filters
          </button>
        </div>
      </div>

      {/* filter mobile */}
      {isFilterOpen && (
        <div className="fixed w-60 inset-0 bg-white z-50 overflow-y-auto p-4 lg-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-main-army font-bold text-xl">Filters</h2>
            <button onClick={toggleFilter}>
              <i className="fa-solid fa-xmark text-red-500 fa-lg"></i>
            </button>
          </div>
          {/* Basic filter */}
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          <ul className="flex flex-col my-5 gap-3">
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">T-Shirt</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Shorts</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Shirts</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Hoodie</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Jeans</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
          </ul>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Price filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Price</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="flex flex-col gap-5 mt-5 items-center">
            <input
              type="text"
              className="form-input w-56 bg-gray-100 rounded-lg py-1 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400 text-center"
              placeholder="Enter Lower Price"
            />
            <i className="fa-solid fa-grip-lines-vertical text-main-army"></i>
            <input
              type="text"
              className="form-input w-56 bg-gray-100 rounded-lg py-1 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400 text-center"
              placeholder="Enter Higher Price"
            />
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Color filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Color</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="grid grid-cols-4 gap-4 my-6 items-center">
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-green-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-red-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-yellow-300 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-orange-500 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-sky-400 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-blue-600 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-pink-400 fa-2xl"></i>
            </div>
            <div className="col-span-1">
              <i className="fa-solid fa-circle text-teal-400 fa-2xl"></i>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Size filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Size</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <div className="my-6">
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              XX-Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              X-Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Small
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Medium
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              X-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              XX-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              3X-Large
            </button>
            <button className="mr-4 mb-4 bg-gray-100 rounded-full py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">
              4X-Large
            </button>
          </div>
          <div className="border-b-2 border-gray-300 xl:w-[15.3rem] 1xl:w-52 my-6"></div>
          {/* Dress Style filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-main-army font-bold text-xl">Dress Style</h2>
            <i className="fa-solid fa-circle-chevron-up text-main-army fa-lg"></i>
          </div>
          <ul className="flex flex-col my-5 gap-3">
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Casual</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Formal</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Party</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-gray-500 text-md">Gym</p>
              <i className="fa-solid fa-circle-chevron-right text-main-yellow fa-lg"></i>
            </li>
          </ul>
          <button className="rounded-3xl bg-main-yellow p-2 xl:w-56 1xl:w-48 h-10 font-semibold ml-2 my-4">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default FiltersBar;
