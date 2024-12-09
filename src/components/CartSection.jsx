import React from 'react';
import CardPicture from './CardPicture';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/actions/products-actions';

function CartSection() {
  const cartItems = useSelector((state) => state.cart.cartItems); // Ambil item dari Redux
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (product, delta) => {
    if (product.quantity + delta > 0) {
      dispatch(
        addToCart({
          ...product,
          quantity: delta,
        })
      );
    }
  };

  return (
    <div className="flex gap-6 mt-5">
      {cartItems.length === 0 ? (
        <div className="text-main-army text-center">Your cart is empty :(</div>
      ) : (
        <>
        {/*cart item*/}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden px-4 py-4 border border-slate-200 w-[700px] ml-20 pl-7">
            <div className="relative">
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4 mt-4">
                  <div className="h-40 max-w-40">
                    <CardPicture picture={item.image} />
                  </div>
                  <div className="flex flex-col justify-around">
                    <div className="flex gap-60">
                      <h2 className="text-main-army font-2xl font-bold">{item.title}</h2>
                      <i
                        className="fa-solid fa-trash-can text-red-600"
                        onClick={() => handleRemoveItem(item.id)}
                      ></i>
                    </div>
                    <div className="flex gap-60">
                      <span className="text-main-army font-bold font-2xl">${item.price}</span>
                      <div className="bg-gray-100 rounded-full flex w-[130px] h-9 items-center">
                        <button
                          className="py-2 px-4 text-main-army fa-solid fa-minus"
                          onClick={() => handleQuantityChange(item, -1)}
                        ></button>
                        <span className="py-2 px-4 text-main-army">{item.quantity}</span>
                        <button
                          className="py-2 px-4 text-main-army fa-solid fa-plus"
                          onClick={() => handleQuantityChange(item, 1)}
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-gray-300 w-[40rem] my-10"></div>
              </div>
            ))}
            </div>
          </div>
          {/*end of cart item*/}

          {/*summary price*/}
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
                    {/* <div className='flex justify-between'>
                        <span className='text-gray-500'>Discount</span>
                        <span className='text-red-600 font-bold'>-Rp. 399.000</span>
                    </div> */}
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
          {/*end of summary price*/}
        </>
      )}
    </div>
  );
}

export default CartSection;
