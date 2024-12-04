import React from 'react'
import CardPicture from './CardPicture'
import renderStars from '../store/actions/render-stars'

function DetailProducts() {
    const stars = 4.5

  return (
    <div className='flex gap-10'>
        <div className='grid grid-rows-3 grid-cols-8 gap-4 ml-20 w-[600px]'>
            <div className="col-start-1 col-span-2 row-start-1">
            <CardPicture picture={'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000'} alt={'kaos'}/>
            </div>
            <div className='col-start-1 col-span-2 row-start-2'>
            <CardPicture picture={'https://atmos.co.id/cdn/shop/files/CleanBg_58_1360x.png?v=1719398899'} alt={'kaos'}/>
            </div>
            <div className="col-start-1 col-span-2 row-start-3">
            <CardPicture picture={'https://down-id.img.susercontent.com/file/id-11134211-7r98v-lodhuz2im2zt0f'} alt={'kaos'}/>
            </div>
            <div className='col-start-3 col-span-6 row-start-1 row-span-3'>
            <CardPicture picture={'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000'} alt={'kaos'}/>
            </div>
        </div>
        <div className='flex flex-col gap-2 my-2 mx-2'>
            <h1 className='text-main-army font-extrabold text-3xl leading-tight'>Elegan Black T-shirt Cool Comfortable</h1>
            <div className='flex gap-1 items-center'>
                <span className='flex gap-1'>{renderStars(stars)}</span>
                <span className='text-main-army text-sm font-light'>{stars}</span>
            </div>
            <div className='text-main-army font-bold text-lg'>Rp. 80.000</div>
            <p className='text-gray-500 w-[500px]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            <div className="border-b-2 border-gray-200 w-[36rem]"></div>
            <div className='mb-3'>
                <p className='text-gray-500 mb-5'>Select Colors</p>
                <div className='flex gap-3'>
                    <i className="fa-solid fa-circle text-black fa-2xl"></i>
                    <i className="fa-solid fa-circle text-red-600 fa-2xl"></i>
                    <i className="fa-solid fa-circle text-blue-600 fa-2xl"></i>
                </div>
            </div>
            <div className="border-b-2 border-gray-200 w-[36rem] my-3"></div>
            <div className='w-[600px]'>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">XX-Small</button>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">X-Small</button>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">Small</button>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">Medium</button>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">Large</button>
                <button className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none">X-Large</button>
            </div>
            <div className="border-b-2 border-gray-200 w-[36rem] my-3"></div>
            <div className='flex gap-2'>
                <div className='bg-gray-100 rounded-full flex w-48 h-10 pl-8'>
                    <button className="py-2 px-4 text-main-army fa-solid fa-plus"></button>
                    <button className="py-2 px-4 text-main-army">1</button>
                    <button className="py-2 px-4 text-main-army fa-solid fa-minus"></button>
                </div>
                <button className="rounded-3xl w-96 bg-main-yellow h-10 font-semibold">Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default DetailProducts
