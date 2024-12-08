import React from 'react'

function CardPicture({ picture, alt }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer">
        <div className="relative p-8">
            <img src={picture} alt={alt} className="w-full h-full object-cover" />
        </div>
    </div>
)
}

export default CardPicture
