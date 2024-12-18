import React from 'react'
import Winter from '../img/winter.png'

function Contact() {
  return (
    <div className="">
      <div className='flex gap-5 xl:mt-28 lg:mt-24'>
        <div className='flex flex-col justify-center items-center xl:my-5 lg:mt-4 lg:mb-0 xl:mx-42 lg:mx-48'>
          <form className='flex flex-col gap-5'>
            <h2 className='text-main-army font-extrabold text-2xl leading-tight'>Contact Us!</h2>
            <p className="text-gray-500 lg:w-80 xl:w-[34rem]">Feel free to contact us any time. We will get back to you as soon as we can.</p>
            <input
              type="text"
              className="form-input lg:w-96 xl:w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-input w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Email"
            />
            <div className="relative w-full">
              <textarea 
                className="top-0 left-0 w-full xl:h-32 lg:h-24 bg-gray-100 rounded-lg p-5 text-gray-700 placeholder-gray-500 border border-gray-400 resize-none" 
                placeholder="Write messages you want to tell us"
              />
            </div>
            <button className="rounded-lg w-96 xl:w-full bg-main-yellow h-10 font-semibold">Send</button>
          </form>
        </div>
          <div className='overflow-hidden'>
            <div className='relative'>
              <img src={Winter} alt="Winter aespa" className='xl:w-[350px] lg:w-[362px]'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact;
