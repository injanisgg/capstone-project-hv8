import React, { useEffect, useState } from 'react';
import CardPicture from './CardPicture';
import renderStars from '../redux/actions/render-stars';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
  addingQuantity,
  reducingQuantity,
  reducingStock,
  addingStock,
  setError,
  addToCart,
} from '../redux/actions/products-actions';
import Loading from '../img/loading.gif'

function DetailProducts() {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error)

  const initialStock = JSON.parse(localStorage.getItem(`stock-${id}`)) || 20;
  const initialQuantity = JSON.parse(localStorage.getItem(`quantity-${id}`)) || 0;

  const [localQuantity, setLocalQuantity] = useState(initialQuantity);
  const [stock, setStock] = useState(initialStock);
  const [succesMessage, setSuccessMessage] = useState('')

  const {
    image = '',
    title = '',
    description = '',
    category = '',
    price = 0,
    rating: { rate = 0 } = {},
  } = product;

  // Fetch product details
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  //useEffect untuk fetching produk id
  useEffect(() => {
    if (id && id !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  //useEffect untuk set localstorage quantity dan stock per id produk
  useEffect(() => {
    localStorage.setItem(`stock-${id}`, JSON.stringify(stock));
    localStorage.setItem(`quantity-${id}`, JSON.stringify(localQuantity));
  }, [stock, localQuantity, id]);

  // Handle quantity changes
  const handleAddQuantity = () => {
    if (stock > 0 && localQuantity < 20) {
      setLocalQuantity((prevQuantity) => prevQuantity + 1);
      setStock((prevStock) => prevStock - 1);
      dispatch(addingQuantity());
      dispatch(reducingStock());
    } else {
      const errorMessage = stock <= 0 ? "Out of Stock" : "Maximum quantity reached";
      dispatch(setError(errorMessage))
    }
  };

  const handleReduceQuantity = () => {
    if (localQuantity > 0) {
      setLocalQuantity((prevQuantity) => prevQuantity - 1);
      if (stock < 20) {
        setStock((prevStock) => prevStock + 1);
        dispatch(addingStock());
      }
      dispatch(reducingQuantity());
    } else {
        const errorMessage = localQuantity <= 0 ? "Quantity is already zero" : "Out of stock";
        dispatch(setError(errorMessage))
    }
  };


  // Handle to cart
  const handleAddToCart = () => {
    if (localQuantity > 0) {
      dispatch(addToCart({ ...product, quantity: localQuantity }));
    //   // Reset local quantity setelah ditambahkan ke cart
    //   setLocalQuantity(0);
      dispatch(setError(null));
      setSuccessMessage("Successfully added to the cart")

      setTimeout(() => {
        setSuccessMessage('')
      }, 2000)
    } else {
      const errorMessage = "Quantity must be greater than zero";
      dispatch(setError(errorMessage));
    }
  };
  

  return (
    <>
      <div className="flex gap-10 mt-10 ml-20">
        {Object.keys(product).length === 0 ? (
            <div className='flex items-center ml-[30rem]'>
                <img src={Loading} alt="Loading..." className='text-main-army' />
            </div>
        ) : (
          <>
            <div className="flex gap-5">
              <div className="flex flex-col justify-evenly">
                {[image, image].map((img, index) => (
                  <div key={index} className="mb-5 w-52">
                    <CardPicture picture={img}/>
                  </div>
                ))}
              </div>
              <div className="w-[30rem]">
                <CardPicture picture={image} />
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2 mx-2">
              <h1 className="text-main-army font-extrabold text-3xl leading-tight">{title}</h1>
              <div className="flex gap-1 items-center">
                <span className="flex gap-1">{renderStars(rate)}</span>
                <span className="text-main-army text-sm font-light">{rate}</span>
              </div>
              <div className="text-main-army font-bold text-lg">${price}</div>
              <p className="text-gray-500 w-[500px]">{category}</p>
              <p className="text-gray-500 w-[500px]">{description}</p>
              <div className="border-b-2 border-gray-200 w-[36rem]"></div>
              <div className="mb-3">
                <p className="text-gray-500 mb-5">Select Colors</p>
                <div className="flex gap-3">
                  {['black', 'red-600', 'blue-600'].map((color, index) => (
                    <i
                      key={index}
                      className={`fa-solid fa-circle text-${color} fa-2xl`}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="border-b-2 border-gray-200 w-[36rem] my-3"></div>
              <div className="w-[600px]">
                {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large'].map((size, index) => (
                  <button
                    key={index}
                    className="mr-4 mb-4 bg-gray-100 rounded-full py-2 px-4 text-gray-700 placeholder-gray-500 focus:outline-none"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="border-b-2 border-gray-200 w-[36rem] my-3"></div>
              <div className="flex gap-2">
                <div className="bg-gray-100 rounded-full flex w-[220px] h-10 items-center pl-12">
                <button
                    className="py-2 px-4 text-main-army fa-solid fa-minus"
                    onClick={handleReduceQuantity}></button>
                <span className="py-2 px-4 text-main-army">{localQuantity}</span>
                <button
                    className="py-2 px-4 text-main-army fa-solid fa-plus"
                    onClick={handleAddQuantity}></button>
                </div>
                <button className="rounded-3xl w-96 bg-main-yellow h-10 font-semibold" onClick={handleAddToCart}>
                  Add to cart
                </button>
               </div>
              {error && <p className='text-red-600'>{error}</p>}
              {succesMessage && <p className='text-green-500'>{succesMessage}</p>}
            </div>
          </>
        )}
      </div>
      <div className="border-b-2 border-gray-300 mx-20 w-[1380px] mt-14"></div>
    </>
  );
}

export default DetailProducts;
