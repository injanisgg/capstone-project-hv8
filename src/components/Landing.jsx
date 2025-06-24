import React from 'react'
import landing from '../img/landing.png'
import calvinKlein from '../img/calvin-klein.png'
import gucci from '../img/gucci.png'
import prada from '../img/prada.png'
import versace from '../img/versace.png'
import zara from '../img/zara.png'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate();

    const handleRedirect = () => {
    navigate(`/shop`);
  };
  return (
    <div className='mt-32 lg:mt-0'>
    {/* Top page */}
        <div className="bg-landing w-full flex flex-col lg:flex-row justify-around">
            <div className='gap-3 p-3 lg:gap-5 lg:pl-20 flex flex-col justify-evenly'>
                <h1 className="text-main-army font-black text-3xl 1xl:text-7xl xl:text-6xl leading-tight">
                    <span className="block">FIND CLOTHES</span>
                    <span className="block">THAT MATCHES</span>
                    <span className="block">YOUR STYLE</span>
                </h1>
                <p className=''>
                    <span className='text-sm'>Browse through our diverse range of meticulously crafted garments, designed</span> 
                    <span className='text-sm'>to bring out your individuality and cater to your sense of style.</span>
                </p>
                <button className="rounded-full bg-main-yellow lg:w-36 h-10 font-semibold" onClick={() => handleRedirect()}>Shop Now</button>
                <div className="flex flex-wrap lg:flex-row justify-center lg:justify-between xl:justify-around items-center">
                    <div className="flex flex-col lg:flex-col items-center">
                        <span className="1xl:text-4xl xl:text-xl font-bold text-main-army">200+</span>
                        <span className="ml-2 text-gray-600 text-sm xl:text-sm">International Brands</span>
                    </div>
                    <div className="border-l border-gray-300 h-12 mx-4"></div>
                    <div className="flex flex-col lg:flex-col items-center">
                        <span className="1xl:text-4xl xl:text-xl font-bold text-main-army">2,000+</span>
                        <span className="ml-2 text-gray-600 text-sm xl:text-sm">High-Quality Products</span>
                    </div>
                    <div className="hidden md:block md:border-l border-gray-300 h-12 mx-4"></div>
                    <div className="flex flex-col lg:flex-col items-center">
                        <span className="1xl:text-4xl xl:text-xl font-bold text-main-army">30,000+</span>
                        <span className="ml-2 text-gray-600 text-sm xl:text-sm">Happy Customers</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={landing} alt="landing page" className='w-full 1xl:w-[38rem] xl:w-[38rem]'/>
            </div>
        </div>
        {/* Brand page */}
        <div className='py-8 bg-main-army mt-0'>
            <ul className='flex flex-wrap lg:flex-row gap-5 gap-y-7 lg:gap-y-0 items-center justify-items-center justify-around'>
                <li><img src={calvinKlein} alt="Calvin Klein" /></li>
                <li><img src={gucci} alt="Gucci" /></li>
                <li><img src={versace} alt="Versace" /></li>
                <li><img src={prada} alt="Prada" /></li>
                <li><img src={zara} alt="Zara" /></li>
            </ul>
        </div>
    </div>
  )
}

export default LandingPage
