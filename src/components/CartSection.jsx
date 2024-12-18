import React, { useState, useEffect } from 'react';
import CardPicture from './CardPicture';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/actions/products-actions';
import { useNavigate } from 'react-router-dom';

function CartSection() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // useEffect untuk menyimpan cartItems ke localStorage
  useEffect(() => {
    cartItems.forEach((item) => {
      localStorage.setItem(`stock-${item.id}`, JSON.stringify(item.stock)); // Pastikan item.stock ada
      localStorage.setItem(`quantity-${item.id}`, JSON.stringify(item.quantity));
    });
  }, [cartItems]);

  //menghapus barang ddari cart
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

const handleIncrement = (product) => {
  if (product.quantity < 20) {
    const newQuantity = product.quantity + 1;
    dispatch(addToCart({ ...product, quantity: newQuantity }));
    localStorage.setItem(`quantity-${product.id}`, JSON.stringify(newQuantity));
  } else {
    setError("Maximum quantity reached");

    setTimeout(() => {
      setError('')
    }, 2000)
  }
};

const handleDecrement = (product) => {
  if (product.quantity > 1) {
    const newQuantity = product.quantity - 1;
    dispatch(addToCart({ ...product, quantity: newQuantity }));
    localStorage.setItem(`quantity-${product.id}`, JSON.stringify(newQuantity));
  } else {
    setError("Minimum quantity is 1");
    setTimeout(() => {
      setError('')
    }, 2000)
  }
};

//handle confirm page
const handleConfirm = () => {
  cartItems.forEach((item) => {
    const stockFromLocalStorage = localStorage.getItem(`stock-${item.id}`);
    const quantityFromLocalStorage = localStorage.getItem(`quantity-${item.id}`);
    const newStock = JSON.parse(stockFromLocalStorage) - JSON.parse(quantityFromLocalStorage);
    localStorage.setItem(`stock-${item.id}`, JSON.stringify(newStock));
  });
  navigate('/confirm');
};

  return (
    <div className="">
      <div className="flex gap-6 mt-40">
      {cartItems.length === 0 ? (
        <div className="text-main-army font-bold text-3xl justify-center lg:mx-[36rem] xl:mx-[28rem] lg:my-60 xl:my-40">Your Cart is Empty 😓</div>
      ) : (
      <>
        {/* Cart item */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[700px] ml-20 pl-7">
            <div className="relative">
            {cartItems.map((item) => {
              // Ambil data dari localStorage untuk setiap item
              const storedQuantity = localStorage.getItem(`quantity-${item.id}`);
              const storedStock = localStorage.getItem(`stock-${item.id}`);

              const parsedQuantity = storedQuantity ? JSON.parse(storedQuantity) : item.quantity;
              const parsedStock = storedStock ? JSON.parse(storedStock) : item.stock;

              return (
                <div key={item.id}>
                  <div className="flex gap-4 mt-4">
                    <div className="h-40 lg:w-40 xl:w-36 lg:mb-5 xl:mb-2">
                      <CardPicture picture={item.image} />
                    </div>
                    <div className="flex flex-col justify-around">
                      <div className="flex lg:gap-12 xl:gap-4 justify-between">
                        <h2 className="text-main-army text-base lg:text-base font-bold lg:w-96 xl:w-80">{item.title}</h2>
                        <i
                          className="fa-solid fa-trash-can text-red-600 cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        ></i>
                      </div>
                      <div className="flex justify-between lg:gap-12 xl:gap-6">
                        <span className="text-main-army font-bold font-2xl">${item.price}</span>
                        <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                          <button
                            className="py-2 px-4 text-main-army fa-solid fa-minus"
                            onClick={() => handleDecrement({ ...item, quantity: parsedQuantity, stock: parsedStock })}>
                          </button>
                          <span className="py-2 px-4 text-main-army">{parsedQuantity}</span>
                          <button
                            className="py-2 px-4 text-main-army fa-solid fa-plus"
                            onClick={() => handleIncrement({ ...item, quantity: parsedQuantity, stock : parsedStock })}>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-right mr-6">{error}</p>}
                  <div className="border-b-2 border-gray-300 lg:w-[40rem] xl:w-[32rem] lg:my-10 xl:my-5"></div>
                </div>
              );
            })}
            </div>
          </div>
          {/*end of cart item*/}
          {/* Summary price */}
          <div className='bg-white shadow-md rounded-2xl overflow-hidden py-4 border border-slate-200 w-[600px] h-[550px] mr-20 px-7'>
            <div className='relative'>
                <div className='flex flex-col gap-5'>
                    <h2 className="text-main-army font-3xl font-bold">Order Summary</h2>
                    <div className='flex justify-between'>
                        <span className='text-gray-500'>Subtotal</span>
                        <span className="text-main-army font-bold">
                          ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-500'>Shipping</span>
                        <span className='text-main-army font-bold'>$5.00</span>
                    </div>
                    <div className="border-b-2 border-gray-300 lg:w-[34rem] xl:w-[26.5rem] my-6"></div>
                    <div className='flex justify-between'>
                        <span className='text-main-army font-bold'>Totals</span>
                        <span className="text-main-army font-bold">
                          ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 5).toFixed(2)}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <div className="relative lg:w-96 xl:w-72">
                            <input
                            type="text"
                            className="form-input w-full bg-gray-100 rounded-3xl py-3 md:py-2 pl-12 pr-4 text-gray-700 placeholder-gray-500"
                            placeholder="Add promo code"
                            />
                            <i className="fa-solid fa-tag lg:fa-xl xl:fa-xs absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                        <button className="rounded-3xl bg-main-yellow lg:w-56 xl:w-48 lg:h-12 xl:h-10 font-semibold ml-2 my-4">Apply</button>
                    </div>
                    <button className="rounded-3xl bg-main-yellow lg:w-[530px] xl:w-[415px] lg:h-12 xl:h-10 font-semibold ml-2 my-4" onClick={handleConfirm}>Check Out</button>
                </div>
            </div>
          </div>
          {/* End of summary price */}
      </>
      )}
    </div>
    </div>
  );
}

export default CartSection;