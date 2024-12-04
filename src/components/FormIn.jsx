import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function FormIn({ welcomeText, buttonText, questOne, actionOne, redirectTo }) {
  const [ isOn, setIsOne ] = useState(true) //true = one, false = off
  const handleToggle = () => {
    setIsOne((prevState) => !prevState)
  }

  return (
    <form className='flex flex-col gap-5'>
      <h2 className='text-main-army font-extrabold text-2xl leading-tight'>{welcomeText}</h2>
      <input
        type="text"
        className="form-input w-96 bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
        placeholder="Email or Phone Number"
      />
      <div className="relative w-96">
        <input
          type="password"
          className="form-input w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
          placeholder="Enter Password"
        />
        <i className="fa-solid fa-eye absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      </div>
      <div className='flex items-center text-gray-500'>
        <span><button type='button' className={`fa-solid ${isOn ? 'fa-toggle-off text-main-yellow' : 'fa-toggle-on text-main-yellow' } fa-2x mr-2`} onClick={handleToggle}></button></span>
        <span className='mr-28'>Remember me</span>
        <span>Forgot Password?</span>
      </div>
      {/* Teks tombol menggunakan props */}
      <button className="rounded-lg w-96 bg-main-yellow h-10 font-semibold">{buttonText}</button>
      <div className="border-b-2 border-gray-300 w-96 mt-5"></div>
      <div className="flex gap-3 px-14">
        <span className='text-gray-500'>{questOne}</span>
        <span className='text-main-army font-bold hover:underline'><Link to={redirectTo}>{actionOne}</Link></span>
      </div>
    </form>
  );
}

export default FormIn;