import React from 'react'
import { useSelector } from 'react-redux';
import renderStars from '../redux/actions/render-stars.js'
import { useNavigate } from 'react-router-dom';

function CardPictShop() {
    const navigate = useNavigate();

    const handleRedirect = (id) => {
        navigate(`/shop/${id}`)
    }

    const products = useSelector((state) => state.allProducts.products)
    
    {/*merender data dari api dalam products*/}
    const renderList = products.map((product) => {
        const { id, title, image, category, price, rating:{rate} } = product;

        // Membatasi panjang title hingga 51 karakter
    const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;


        return(
            <div className='flex flex-col gap-3 border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer' key={id} onClick={() => handleRedirect(id)}>
                <div className="bg-white rounded-3xl overflow-hidden">
                    <div className="relative p-8 w-64 h-72">
                        <img src={image} className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className='flex flex-col gap-2 my-2 mx-2'>
                <div className='text-black bg-landing p-1 rounded-sm w-fit'>{category}</div>
                    <div className="text-main-army font-bold text-lg">{truncatedTitle}</div>
                    <div className='flex gap-1 items-center'>
                        <span className='flex gap-1'>{renderStars(rate)}</span>
                        <span className='text-main-army text-sm font-light'>{rate}</span>
                    </div>
                    <div className='text-main-army font-bold text-md'>$ {price}</div>
                    <button className="rounded-3xl w-42 bg-main-yellow h-10 font-semibold">Add to cart</button>
                </div>
            </div>
        )
    })

  return (
    <>
        {renderList}
    </>
  )
}

export default CardPictShop;
