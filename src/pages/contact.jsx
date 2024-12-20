import React from 'react'
import Winter from '../img/winter.png'
import PopupSignin from '../components/PopupSignin'

function Contact() {

  const isLoggedin = localStorage.getItem('authToken')
  const showPopupSignin = !isLoggedin

  return (
    <div className="">
      {showPopupSignin && <PopupSignin/>}
      <div className={`flex gap-5 1xl:mt-28 ${isLoggedin ? 'xl:mt-24' : 'xl:mt-28'}`}>
        <div className='flex flex-col justify-center items-center 1xl:my-5 xl:mt-4 xl:mb-0 1xl:mx-42 xl:mx-48'>
          <form className='flex flex-col gap-5'>
            <h2 className='text-main-army font-extrabold text-2xl leading-tight'>Contact Us!</h2>
            <p className="text-gray-500 xl:w-80 1xl:w-[34rem]">Feel free to contact us any time. We will get back to you as soon as we can.</p>
            <input
              type="text"
              className="form-input xl:w-96 1xl:w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-input w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Email"
            />
            <div className="relative w-full">
              <textarea 
                className="top-0 left-0 w-full 1xl:h-32 xl:h-24 bg-gray-100 rounded-lg p-5 text-gray-700 placeholder-gray-500 border border-gray-400 resize-none" 
                placeholder="Write messages you want to tell us"
              />
            </div>
            <button className="rounded-lg w-96 1xl:w-full bg-main-yellow h-10 font-semibold">Send</button>
          </form>
        </div>
          <div className='overflow-hidden'>
            <div className='relative'>
              <img src={Winter} alt="Winter aespa" className='1xl:w-[458px] xl:w-[362px] xl:pt-4'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact;
