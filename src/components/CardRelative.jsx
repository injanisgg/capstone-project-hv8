import React from 'react'

function CardRelative({ picture, title, alt }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <div className="relative">
            <div className="text-main-army font-bold text-3xl absolute pl-5 pt-5">{title}</div>
            <img src={picture} alt={alt} className="w-full h-64 object-cover" />
        </div>
    </div>
  )
}

export default CardRelative
