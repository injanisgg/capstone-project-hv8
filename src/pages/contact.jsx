import React from 'react'
import Winter from '../img/winter.png'
import PopupSignin from '../components/PopupSignin'

function Contact() {

  const isLoggedin = localStorage.getItem('authToken')
  const showPopupSignin = !isLoggedin

  return (
    <div className="pb-24 w-full lg:pb-0">
      {showPopupSignin && <PopupSignin/>}
      <div className={`flex flex-col lg:flex-row lg:justify-center gap-5 mt-36 ${isLoggedin ? 'xl:mt-24' : 'xl:mt-32'}`}>
        <div className='flex flex-col justify-center items-center 1xl:my-5 xl:mt-4 xl:mb-0 1xl:mx-42 xl:mx-48'>
          <form className='flex w-fit flex-col items-center gap-5'>
            <h2 className='text-main-army font-extrabold text-2xl leading-tight text-center lg:text-left'>Contact Us!</h2>
            <p className="text-gray-500 w-full text-center lg:text-left xl:w-80 1xl:w-[34rem] px-8">Feel free to contact us any time. We will get back to you as soon as we can.</p>
            <input
              type="text"
              className="form-input w-80 mx-5 lg:w-full xl:w-full 1xl:w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-input w-80 lg:w-full mx-5 bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
              placeholder="Email"
            />
            <div className="relative w-fit lg:w-full">
              <textarea 
                className="lg:top-0 lg:left-0 w-80 lg:w-full lg:mx-0 md:mx-[7.5rem] 1xl:h-32 xl:h-24 bg-gray-100 rounded-lg p-5 text-gray-700 placeholder-gray-500 border border-gray-400 resize-none" 
                placeholder="Write messages you want to tell us"
              />
            </div>
            <button className="rounded-lg w-80 lg:w-full bg-main-yellow h-10 font-semibold">Send</button>
          </form>
        </div>
          <div className='hidden'>
            <div className='relative'>
              <img src={Winter} alt="Winter aespa" className='1xl:w-[458px] xl:w-[362px] xl:pt-4'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact;
