import React from 'react'
import CardRelative from './CardRelative'
import Casual from '../img/casual.png'
import Formal from '../img/formal.png'
import Party from '../img/party.png'
import Gym from '../img/gym.png'

function DressStyle() {
  return (
    <>
    <div className='bg-landing mx-2 lg:mx-20 my-2 lg:my-16 rounded-3xl h-full lg:h-[800px] w-max-2xl'>
        <h1 className='text-main-army font-extrabold text-2xl lg:text-4xl leading-tight text-center pt-5 px-3'>EXPLORE DRESSES BY DESIGN</h1>
        <div className="flex flex-col gap-5 p-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-4">
            <div className='col-start-2 col-span-4 row-start-4 row-span-3'>
            <CardRelative picture={Casual} title={'Casual'} alt={'Casual'}/>
            </div>
            <div className='col-start-6 col-span-6 row-start-4 row-span-3'>
                <CardRelative picture={Formal} title={'Formal'} alt={'Formal'}/>
            </div>
            <div className='col-start-2 col-span-6 row-start-8 row-span-3'>
                <CardRelative picture={Party} title={'Party'} alt={'Party'}/>
            </div>
            <div className='col-start-8 col-span-4 row-start-8 row-span-3'>
                <CardRelative picture={Gym} title={'Gym'} alt={'Gym'}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default DressStyle