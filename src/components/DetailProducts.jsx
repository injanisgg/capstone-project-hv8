import React, {useEffect} from 'react'
import CardPicture from './CardPicture'
import renderStars from '../redux/actions/render-stars'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/products-actions'


function DetailProducts() {
    const product = useSelector((state) => state.product) //state.product, product from index combine reducer
    const { 
        image = '', 
        title = '', 
        description = '', 
        category = '', 
        price = 0, 
        rating: { rate = 0 } = {} 
      } = product;

    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch(error => {
            console.error(error);
        })

        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (id && id !== "") fetchProductDetails();
        return() => {
            dispatch(removeSelectedProduct());
        }
    }, [id])//berjalan ketika id berubah

  return (
    <div className='flex gap-10'>
        {Object.keys(product).length === 0 ? (
            <div>Loading...</div>
        ) : (
            <>
            <div className='grid grid-rows-3 grid-cols-8 gap-4 ml-20 mt-5 w-[600px]'>
                <div className="col-start-1 col-span-2 row-start-1">
                <CardPicture picture={image} alt={'kaos'}/>
                </div>
                <div className='col-start-1 col-span-2 row-start-2'>
                <CardPicture picture={image} alt={'kaos'}/>
                </div>
                <div className="col-start-1 col-span-2 row-start-3">
                <CardPicture picture={image} alt={'kaos'}/>
                </div>
                <div className='col-start-3 col-span-6 row-start-1 row-span-3'>
                <CardPicture picture={image} alt={'kaos'}/>
                </div>
            </div>
            <div className='mt-5'>
            <div className='flex flex-col gap-2 my-2 mx-2'>
                <h1 className='text-main-army font-extrabold text-3xl leading-tight'>{title}</h1>
                <div className='flex gap-1 items-center'>
                    <span className='flex gap-1'>{renderStars(rate)}</span>
                    <span className='text-main-army text-sm font-light'>{rate}</span>
                </div>
                <div className='text-main-army font-bold text-lg'>${price}</div>
                <p className='text-gray-500 w-[500px]'>{category}</p>
                <p className='text-gray-500 w-[500px]'>{description}</p>
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
            </>
        )}
    </div>
  )
}

export default DetailProducts
