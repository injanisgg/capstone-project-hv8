import React from 'react'
import Rose from '../img/rose.png'

function About() {
  return (
    <div className="container mx-auto">
      <div className='flex gap-5 xl:mt-28 lg:mt-24'>
      <div className='flex flex-col justify-center items-center my-16 lg:my-0 lg:pt-12 xl:mx-52 lg:mx-20'>
        <h1 className="xl:text-4xl lg:text-3xl text-main-army font-bold pr-[7rem] self-start">MON.CHÉRIE</h1>
        <div className='w-[34rem] my-6'>
            <p className='text-gray-500 text-justify'>Mon.Chérie caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
            <p className='text-gray-500 text-justify mt-4'>
            We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
            </p>
        </div>
        <div className="flex justify-between items-center my-8">
        <div className="flex flex-col items-center">
            <span className="xl:text-4xl lg:text-2xl font-bold text-main-army">200+</span>
            <span className="ml-2 lg:text-sm text-gray-600">International Brands</span>
        </div>
        <div className="border-l border-gray-300 h-12 mx-4"></div>
        <div className="flex flex-col items-center">
            <span className="xl:text-4xl lg:text-2xl font-bold text-main-army">2,000+</span>
            <span className="ml-2 lg:text-sm text-gray-600">High-Quality Products</span>
        </div>
        <div className="border-l border-gray-300 h-12 mx-4"></div>
        <div className="flex flex-col items-center">
            <span className="xl:text-4xl lg:text-2xl font-bold text-main-army">30,000+</span>
            <span className="ml-2 lg:text-sm text-gray-600">Happy Customers</span>
        </div>
      </div>
      </div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img src={Rose} alt="Rose Blackpink" className='xl:w-[479px] lg:w-[300px] lg:pt-[5.7rem]' />
          </div>
        </div>
    </div>
    </div>
  )
}

export default About;
