import React from 'react'
import CardRelative from './CardRelative'
import Casual from '../img/casual.png'
import Formal from '../img/formal.png'
import Party from '../img/party.png'
import Gym from '../img/gym.png'

function DressStyle() {
  return (
    <>
    <div className='bg-landing mx-20 my-16 rounded-3xl h-[800px] w-max-2xl grid grid-cols-12 grid-rows-12 gap-4'>
        <h1 className='text-main-army font-extrabold text-4xl leading-tight col-start-4 col-span-6 row-start-2 ml-[82px]'>EXPLORE DRESSES BY DESIGN</h1>
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
    </>
  )
}

export default DressStyle