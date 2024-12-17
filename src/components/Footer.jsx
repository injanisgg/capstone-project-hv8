import React from 'react';

function Footer() {
  return (
    <div  className='mt-40'>
      {/* Wrapper */}
      <div className="relative bg-landing w-full h-[34rem] md:h-25rem pt-2">
        {/* Card army */}
        <div className="absolute top-[-5rem] bg-main-army shadow-md rounded-2xl w-full max-w-7xl md:max-w-5xl z-20 mx-32">
          <div className="relative flex justify-between items-center px-10 py-8">
            <div>
              <div className="text-white font-bold text-4xl">STAY UP TO DATE ABOUT</div>
              <div className="text-white font-bold text-4xl pt-3">OUR LATEST OFFER</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  className="form-input w-full bg-gray-100 rounded-2xl py-3 pl-12 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
                  placeholder="Enter your email address"
                />
                <i className="fa-solid fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <button className="rounded-2xl py-3 w-full max-w-md bg-gray-100 text-main-army text-center">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Background landing */}
        <div className="relative w-full pt-20 z-10">
          <div className="flex justify-around mx-12 pt-20">
            {/* Content */}
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold pr-[8rem] text-main-army">MON.CHÉRIE</h1>
              <div className="flex flex-col">
                <span className="text-gray-500">We have clothes that suits your style and</span>
                <span className="text-gray-500">which you're proud to wear. From</span>
                <span className="text-gray-500">women to men</span>
              </div>
              <ul className="flex gap-4 mt-4">
                <li>
                  <i className="fa-brands fa-twitter text-main-army fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram text-main-army fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-facebook text-main-army fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-github text-main-army fa-2x"></i>
                </li>
              </ul>
            </div>

            {/* Detail sections */}
            <div className="flex flex-col gap-5">
              <h1 className="text-lg text-main-army">COMPANY</h1>
              <span className="text-gray-500">About</span>
              <span className="text-gray-500">Features</span>
              <span className="text-gray-500">Work</span>
              <span className="text-gray-500">Career</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg text-main-army">HELP</h1>
              <span className="text-gray-500">Customer Support</span>
              <span className="text-gray-500">Delivery Details</span>
              <span className="text-gray-500">Terms & Conditions</span>
              <span className="text-gray-500">Privacy Policy</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg text-main-army">FAQ</h1>
              <span className="text-gray-500">Account</span>
              <span className="text-gray-500">Manage Deliveries</span>
              <span className="text-gray-500">Orders</span>
              <span className="text-gray-500">Payments</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg text-main-army">RESOURCES</h1>
              <span className="text-gray-500">Free eBooks</span>
              <span className="text-gray-500">Development Tutorial</span>
              <span className="text-gray-500">How to Blog</span>
              <span className="text-gray-500">YouTube</span>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 mx-20 w-[1380px] md:w-[1100px] mt-14"></div>
          <div className="flex flex-col gap-0">
            <p className="text-gray-500 mt-4 ml-28">
              Design by Hamzah Naeem
            </p>
            <p className="text-gray-500 mt-4 ml-28">
              Mon.Chérie &#169; 2024, Capstone Project at Hacktiv8
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
