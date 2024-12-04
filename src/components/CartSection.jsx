import React from 'react';
import CardPicture from './CardPicture';

function CartSection() {
  return (
    <div className='flex gap-6'>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[700px] ml-20 pl-7">
        <div className="relative">
            {/*content product*/}
          <div className="flex gap-4 mt-4">
            <div className="h-40 w-40">
              <CardPicture picture={'https://down-id.img.susercontent.com/file/id-11134211-7r98v-lodhuz2im2zt0f'} />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex gap-60">
                <h2 className="text-main-army font-2xl font-bold">Gradient Graphic T-shirt</h2>
                <i className="fa-solid fa-trash-can text-red-600"></i>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Size: </span>
                <span className="text-gray-500">Large</span>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Color: </span>
                <span className="text-gray-500">Black</span>
              </div>
              <div className="flex gap-60">
                <span className="text-main-army font-bold font-2xl">Rp. 89.000</span>
                <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                  <button className="py-2 px-4 text-main-army fa-solid fa-plus"></button>
                  <span className="py-2 px-4 text-main-army">1</span>
                  <button className="py-2 px-4 text-main-army fa-solid fa-minus"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 w-[40rem] my-6"></div>
          {/*end of content*/}
          <div className="flex gap-4 mt-4">
            <div className="h-40 w-40">
              <CardPicture picture={'https://down-id.img.susercontent.com/file/id-11134211-7r98v-lodhuz2im2zt0f'} />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex gap-60">
                <h2 className="text-main-army font-2xl font-bold">Gradient Graphic T-shirt</h2>
                <i className="fa-solid fa-trash-can text-red-600"></i>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Size: </span>
                <span className="text-gray-500">Large</span>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Color: </span>
                <span className="text-gray-500">Black</span>
              </div>
              <div className="flex gap-60">
                <span className="text-main-army font-bold font-2xl">Rp. 89.000</span>
                <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                  <button className="py-2 px-4 text-main-army fa-solid fa-plus"></button>
                  <span className="py-2 px-4 text-main-army">1</span>
                  <button className="py-2 px-4 text-main-army fa-solid fa-minus"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 w-[40rem] my-6"></div>
          <div className="flex gap-4 mt-4">
            <div className="h-40 w-40">
              <CardPicture picture={'https://down-id.img.susercontent.com/file/id-11134211-7r98v-lodhuz2im2zt0f'} />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex gap-60">
                <h2 className="text-main-army font-2xl font-bold">Gradient Graphic T-shirt</h2>
                <i className="fa-solid fa-trash-can text-red-600"></i>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Size: </span>
                <span className="text-gray-500">Large</span>
              </div>
              <div className="flex gap-1">
                <span className="text-main-army">Color: </span>
                <span className="text-gray-500">Black</span>
              </div>
              <div className="flex gap-60">
                <span className="text-main-army font-bold font-2xl">Rp. 89.000</span>
                <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                  <button className="py-2 px-4 text-main-army fa-solid fa-plus"></button>
                  <span className="py-2 px-4 text-main-army">1</span>
                  <button className="py-2 px-4 text-main-army fa-solid fa-minus"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 w-[40rem] my-6"></div>
        </div>
      </div>
      {/*summary price*/}
      <div className='bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[600px] h-[550px] mr-20 px-7'>
        <div className='relative'>
            <div className='flex flex-col gap-5'>
                <h2 className="text-main-army font-3xl font-bold">Order Summary</h2>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Subtotal</span>
                    <span className='text-main-army font-bold'>Rp. 399.000</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Discount</span>
                    <span className='text-red-600 font-bold'>-Rp. 399.000</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Delivery Fee</span>
                    <span className='text-main-army font-bold'>Rp. 399.000</span>
                </div>
                <div className="border-b-2 border-gray-300 w-[34rem] my-6"></div>
                <div className='flex justify-between'>
                    <span className='text-main-army'>Totals</span>
                    <span className='text-main-army font-bold font-xl'>Rp. 399.000</span>
                </div>
                <div className='flex items-center'>
                    <div className="relative w-96">
                        <input
                        type="text"
                        className="form-input w-full bg-gray-100 rounded-3xl py-3 pl-12 pr-4 text-gray-700 placeholder-gray-500"
                        placeholder="Add promo code"
                        />
                        <i className="fa-solid fa-tag fa-xl absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    </div>
                    <button className="rounded-3xl bg-main-yellow w-56 h-12 font-semibold ml-2 my-4">Apply</button>
                </div>
                <button className="rounded-3xl bg-main-yellow w-[530px] h-12 font-semibold ml-2 my-4">Go to Check Out</button>
            </div>
        </div>
      </div>
      {/*end of summary price*/}
    </div>
  );
}

export default CartSection;
