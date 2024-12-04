import React from 'react'
import renderStars from '../store/actions/render-stars.js'
import { useNavigate } from 'react-router-dom';

function CardPictShop({ picture, alt, stars, price, title }) {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/product-details')
    }

  return (
    <div className='flex flex-col gap-3 border-0 border-main-army hover:border rounded-3xl ease-in-out cursor-pointer' onClick={handleRedirect}>
        <div className="bg-img-grey rounded-3xl overflow-hidden">
            <div className="relative">
                <img src={picture} alt={alt} className="w-full h-64 object-cover" />
            </div>
        </div>
        <div className='flex flex-col gap-2 my-2 mx-2'>
            <div className="text-main-army font-bold text-lg">{title}</div>
            <div className='flex gap-1 items-center'>
                <span className='flex gap-1'>{renderStars(stars)}</span>
                <span className='text-main-army text-sm font-light'>{stars}</span>
            </div>
            <div className='text-main-army font-bold text-md'>Rp. {price}</div>
        </div>
    </div>
  )
}

export default CardPictShop;
