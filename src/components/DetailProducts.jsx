import React, {useEffect, useState} from 'react'
import CardPicture from './CardPicture'
import renderStars from '../redux/actions/render-stars'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct, addingQuantity, reducingQuantity, reducingStock, addingStock } from '../redux/actions/products-actions'


function DetailProducts() {
    const product = useSelector((state) => state.product) //state.product, product from index combine reducer
    const quantity = useSelector((state) => state.quantity.quantity)
    const stock = useSelector((state) => state.stock.stock)
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

    {/* handle quantity */}


// Di dalam komponen DetailProducts
const [localQuantity, setLocalQuantity] = useState(0);

const handleAddQuantity = () => {
    const currentStock = stock; // Ambil nilai dari state
    console.log("Before adding:", localQuantity, "Stock:", currentStock);
    if (currentStock > 0) {
        setLocalQuantity(localQuantity + 1);
        dispatch(reducingStock());
    }
    console.log("After adding:", localQuantity + 1, "Stock:", currentStock - 1);
}

const handleReduceQuantity = () => {
    console.log("Before reducing:", localQuantity);
    if (localQuantity > 0) {
        setLocalQuantity(localQuantity - 1);
        dispatch(addingStock());
    }
    console.log("After reducing:", localQuantity - 1);
}


  return (
    <>
    <div className='flex gap-10 mt-10 ml-20'>
        {Object.keys(product).length === 0 ? (
            <div className='self-center'>Loading...</div>
        ) : (
            <>
            <div className="flex gap-5">
                <div className="flex flex-col justify-evenly">
                    <div className="mb-5 w-52">
                        <CardPicture picture={image} />
                    </div>
                    <div className="mb-5 w-52">
                        <CardPicture picture={image} />
                    </div>
                </div>
                <div className="w-[30rem]">
                    <CardPicture picture={image} />
                </div>
            </div>
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
                        <button className="py-2 px-4 text-main-army fa-solid fa-minus border-0 hover:border-1 border-main-army" onClick={handleReduceQuantity}></button>
                        <button className="py-2 px-4 text-main-army">{quantity}</button>
                        <button className="py-2 px-4 text-main-army fa-solid fa-plus border-0 hover:border-1 border-main-army" onClick={handleAddQuantity}></button>
                    </div>
                    <button className="rounded-3xl w-96 bg-main-yellow h-10 font-semibold">Add to cart</button>
                </div>
            </div>
            </>
        )}
    </div>
    <div className="border-b-2 border-gray-300 mx-20 w-[1380px] mt-14"></div>    
    </>
  )
}

export default DetailProducts
