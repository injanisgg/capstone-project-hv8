import React from 'react'
import Winter from '../img/winter.png'

function Contact() {
  return (
    <div className='flex gap-5'>
      <div className='flex flex-col justify-center items-center my-10 mx-72'>
        <form className='flex flex-col gap-5'>
          <h2 className='text-main-army font-extrabold text-2xl leading-tight'>Contact Us!</h2>
          <p className="text-gray-500 w-80">Feel free to contact us any time. We will get back to you as soon as we can.</p>
          <input
            type="text"
            className="form-input w-96 bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-input w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
            placeholder="Email"
          />
          <div className="relative w-full">
            <textarea 
              className="top-0 left-0 w-full h-48 bg-gray-100 rounded-lg p-5 text-gray-700 placeholder-gray-500 border border-gray-400 resize-none" 
              placeholder="Write messages you want to tell us"
            />
          </div>
          <button className="rounded-lg w-96 bg-main-yellow h-10 font-semibold">Send</button>
        </form>
      </div>
        <div className='pt-4 bg-landing h-max w-[542px] absolute right-0 pl-14'>
          <div className='w-[426px]'>
            <img src={Winter} alt="Rose Blackpink" />
          </div>
        </div>
    </div>
  )
}

export default Contact;
