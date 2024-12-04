import React from 'react'
import landing from '../img/landing.png'
import calvinKlein from '../img/calvin-klein.png'
import gucci from '../img/gucci.png'
import prada from '../img/prada.png'
import versace from '../img/versace.png'
import zara from '../img/zara.png'

function LandingPage() {
  return (
    <>
    {/* Top page */}
        <div className="bg-landing w-full h-[37.07rem] flex">
            <div className='gap-5 pt-16 pl-20 flex flex-col justify-evenly'>
                <h1 className="text-main-army font-extrabold text-7xl leading-tight">
                    <span className="block">FIND CLOTHES</span>
                    <span className="block">THAT MATCHES</span>
                    <span className="block">YOUR STYLE</span>
                </h1>
                <p>
                    <span className='block'>Browse through our diverse range of meticulously crafted garments, designed</span> 
                    <span className='block'>to bring out your individuality and cater to your sense of style.</span>
                </p>
                <button className="rounded-full bg-main-yellow w-36 h-10 font-semibold">Shop Now</button>
                <div className="flex justify-between items-center my-8">
                    <div className="flex items-center">
                        <span className="text-4xl font-bold text-main-army">200+</span>
                        <span className="ml-2 text-gray-600">International Brands</span>
                    </div>
                    <div className="border-l border-gray-300 h-12 mx-4"></div>
                    <div className="flex items-center">
                        <span className="text-4xl font-bold text-main-army">2,000+</span>
                        <span className="ml-2 text-gray-600">High-Quality Products</span>
                    </div>
                    <div className="border-l border-gray-300 h-12 mx-4"></div>
                    <div className="flex items-center">
                        <span className="text-4xl font-bold text-main-army">30,000+</span>
                        <span className="ml-2 text-gray-600">Happy Customers</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={landing} alt="landing page" />
            </div>
        </div>
        {/* Brand page */}
        <div className='py-8 bg-main-army mt-0'>
            <ul className='flex items-center justify-items-center md:justify-around'>
                <li><img src={calvinKlein} alt="Calvin Klein" /></li>
                <li><img src={gucci} alt="Gucci" /></li>
                <li><img src={versace} alt="Versace" /></li>
                <li><img src={prada} alt="Prada" /></li>
                <li><img src={zara} alt="Zara" /></li>
            </ul>
        </div>
    </>
  )
}

export default LandingPage
