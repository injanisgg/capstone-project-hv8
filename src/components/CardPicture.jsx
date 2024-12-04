import React from 'react'

function CardPicture({ picture, alt }) {
  return (
    <div className="bg-img-grey rounded-3xl overflow-hidden border-0 border-main-army hover:border rounded-3xl ease-in-out cursor-pointer">
        <div className="relative">
            <img src={picture} alt={alt} className="w-full object-cover" />
        </div>
    </div>
)
}

export default CardPicture
