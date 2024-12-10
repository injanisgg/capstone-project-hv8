import React, { useState, useEffect } from 'react';
import CardPicture from './CardPicture';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/actions/products-actions';

function CartSection() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  // useEffect untuk menyimpan cartItems ke localStorage
  useEffect(() => {
    cartItems.forEach((item) => {
      // Menyimpan data ke localStorage
      localStorage.setItem(`stock-${item.id}`, JSON.stringify(item.stock));
      localStorage.setItem(`quantity-${item.id}`, JSON.stringify(item.quantity));
    });
  }, [cartItems]);

  // useEffect untuk mengambil data dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    cartItems.forEach((item) => {
      const storedQuantity = localStorage.getItem(`quantity-${item.id}`);
      const storedStock = localStorage.getItem(`stock-${item.id}`);

      // Memastikan bahwa data ada sebelum di-parse
      const parsedQuantity = storedQuantity ? JSON.parse(storedQuantity) : item.quantity;
      const parsedStock = storedStock ? JSON.parse(storedStock) : item.stock;

      // Mengupdate cart item dengan nilai yang diambil dari localStorage
      dispatch(
        addToCart({
          ...item,
          quantity: parsedQuantity,
          stock: parsedStock,
        })
      );
    });
  }, [cartItems, dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (product) => {
    if (product.stock > 0 && product.quantity < 20) {
      dispatch(
        addToCart({
          ...product,
          quantity: product.quantity + 1,
          stock: product.stock - 1,
        })
      );
      setError(''); // Reset error
    } else {
      const errorMessage = product.stock <= 0 
        ? "Out of Stock" 
        : "Maximum quantity reached";
      setError(errorMessage);
    }
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      dispatch(
        addToCart({
          ...product,
          quantity: product.quantity - 1,
          stock: product.stock + 1,
        })
      );
      setError(''); // Reset error
    } else {
      const errorMessage = "Minimum quantity is 1";
      setError(errorMessage);
    }
  };

  return (
    <div className="flex gap-6 mt-5">
      {cartItems.length === 0 ? (
        <div className="text-main-army text-center">Your cart is empty :(</div>
      ) : (
        <>
        {/* Cart item */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[700px] ml-20 pl-7">
            <div className="relative">
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4 mt-4">
                  <div className="h-40 max-w-40 mb-5">
                    <CardPicture picture={item.image} />
                  </div>
                  <div className="flex flex-col justify-around">
                    <div className="flex gap-12 justify-between">
                      <h2 className="text-main-army font-2xl font-bold w-96">{item.title}</h2>
                      <i
                        className="fa-solid fa-trash-can text-red-600"
                        onClick={() => handleRemoveItem(item.id)}
                      ></i>
                    </div>
                    <div className="flex justify-between gap-12">
                      <span className="text-main-army font-bold font-2xl">${item.price}</span>
                      <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                        <button
                          className="py-2 px-4 text-main-army fa-solid fa-minus"
                          onClick={() => handleDecrement(item)}
                          disabled={item.quantity <= 1}>
                        </button>
                        <span className="py-2 px-4 text-main-army">{item.quantity}</span>
                        <button
                          className="py-2 px-4 text-main-army fa-solid fa-plus"
                          onClick={() => handleIncrement(item)}
                          disabled={item.quantity >= 20 || item.stock <= 0}>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="border-b-2 border-gray-300 w-[40rem] my-10"></div>
              </div>
            ))}
            </div>
          </div>
          {/* End of cart item */}

          {/* Summary price */}
          <div className='bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[600px] h-[550px] mr-20 px-7'>
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
                    <div className="border-b-2 border-gray-300 w-[34rem] my-6"></div>
                    <div className='flex justify-between'>
                        <span className='text-main-army font-bold'>Totals</span>
                        <span className="text-main-army font-bold">
                          ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 5).toFixed(2)}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <div className="relative w-96">
                            <input
                            type="text"
                            className="form-input w-full bg-gray-100 rounded-3xl py-3 pl-12 pr-4 text-gray-700 placeholder-gray-500"
                            placeholder="Add promo code"
                            />
                            <i className="fa-solid fa-tag fa-xl absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                        <button className="rounded-3xl bg-main-yellow w-56 h-12 font-semibold ml-2 my-4">Apply</button>
                    </div>
                    <button className="rounded-3xl bg-main-yellow w-[530px] h-12 font-semibold ml-2 my-4">Check Out</button>
                </div>
            </div>
          </div>
          {/* End of summary price */}
        </>
      )}
    </div>
  );
}

export default CartSection;
