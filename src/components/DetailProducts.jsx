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

  const stockFromLocalStorage = localStorage.getItem(`stock-${id}`);
  const quantityFromLocalStorage = localStorage.getItem(`quantity-${id}`);

  const initialStock = stockFromLocalStorage !== null ? JSON.parse(stockFromLocalStorage) : 20; // Default 20 jika tidak ada
  const initialQuantity = quantityFromLocalStorage !== null ? JSON.parse(quantityFromLocalStorage) : 0; // Default 0 jika tidak ada

  const [localQuantity, setLocalQuantity] = useState(initialQuantity);
  const [stock, setStock] = useState(initialStock);
  const [succesMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
      dispatch(setError("Failed to fetch product details")); // Set error state
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

const handleAddQuantity = () => {
  if (stock > 0 && localQuantity < 20) {
    const newQuantity = localQuantity + 1;
    const newStock = stock - 1;

    setLocalQuantity(newQuantity);
    setStock(newStock);

    // Simpan ke localStorage
    localStorage.setItem(`quantity-${id}`, JSON.stringify(newQuantity));
    localStorage.setItem(`stock-${id}`, JSON.stringify(newStock));

    dispatch(addingQuantity());
    dispatch(reducingStock());
  } else {
    setErrorMessage("Out of stock")

    setTimeout(() => {
      setErrorMessage('')
    }, 2000)
  }
};

const handleReduceQuantity = () => {
  if (localQuantity > 0) {
    const newQuantity = localQuantity - 1; // Kurangi 1 dari kuantitas lokal
    const newStock = stock + 1; // Tambahkan 1 ke stok

    setLocalQuantity(newQuantity); // Perbarui kuantitas lokal
    setStock(newStock); // Perbarui stok

    // Simpan ke localStorage
    localStorage.setItem(`quantity-${product.id}`, JSON.stringify(newQuantity));
    localStorage.setItem(`stock-${product.id}`, JSON.stringify(newStock));

    dispatch(reducingQuantity());
    dispatch(addingStock());
  } else {
    setErrorMessage("Quantity is already zero");

    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  }
};

const handleAddToCart = () => {
  if (localQuantity > 0) {
    const updatedProduct = {
      ...product,
      quantity: localQuantity, // Kirim quantity yang sudah ditentukan
      stock: stock // Kirim stock yang sudah ditentukan
    };
    
    console.log("Adding to cart:", updatedProduct); // Log produk yang ditambahkan
    dispatch(addToCart(updatedProduct)); // Kirim produk dengan stok yang diperbarui
    dispatch(setError(null));
    setSuccessMessage("Successfully added to the cart");

    // Simpan stok dan kuantitas ke localStorage
    localStorage.setItem(`stock-${product.id}`, JSON.stringify(stock));
    localStorage.setItem(`quantity-${product.id}`, JSON.stringify(localQuantity));

    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  } else {
    setErrorMessage("Quantity must be greater than zero");

    setTimeout(() => {
      setErrorMessage('')
    }, 2000)
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
              {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
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
