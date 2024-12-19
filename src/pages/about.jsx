import React from 'react'
import Rose from '../img/rose.png'
import PopupSignin from '../components/PopupSignin'

function About() {

  const isLoggedin = localStorage.getItem('authToken')
  const showPopupSignin = !isLoggedin

  return (
    <div className="">
      {showPopupSignin && <PopupSignin/>}
      <div className={`flex gap-5 1xl:mt-28 ${isLoggedin ? 'xl:mt-24' : 'xl:mt-28'}`}>
      <div className='flex flex-col justify-center items-center xl:my-8 1xl:my-0 1xl:pt-12 1xl:mx-52 xl:mx-20'>
        <h1 className="1xl:text-4xl xl:text-3xl text-main-army font-bold pr-[7rem] self-start">MON.CHÉRIE</h1>
        <div className='w-[34rem] my-6'>
            <p className='text-gray-500 text-justify'>Mon.Chérie caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
            <p className='text-gray-500 text-justify mt-4'>
            We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
            </p>
        </div>
        <div className="flex justify-between items-center my-8">
        <div className="flex flex-col items-center">
            <span className="1xl:text-4xl xl:text-2xl font-bold text-main-army">200+</span>
            <span className="ml-2 1xl:text-sm text-gray-600">International Brands</span>
        </div>
        <div className="border-l border-gray-300 h-12 mx-4"></div>
        <div className="flex flex-col items-center">
            <span className="1xl:text-4xl xl:text-2xl font-bold text-main-army">2,000+</span>
            <span className="ml-2 1xl:text-sm text-gray-600">High-Quality Products</span>
        </div>
        <div className="border-l border-gray-300 h-12 mx-4"></div>
        <div className="flex flex-col items-center">
            <span className="1xl:text-4xl xl:text-2xl font-bold text-main-army">30,000+</span>
            <span className="ml-2 1xl:text-sm text-gray-600">Happy Customers</span>
        </div>
      </div>
      </div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img src={Rose} alt="Rose Blackpink" className='1xl:w-[458px] xl:w-[360px] xl:pt-7' />
          </div>
        </div>
    </div>
    </div>
  )
}

export default About;
