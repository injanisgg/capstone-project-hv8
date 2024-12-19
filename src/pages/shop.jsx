import React, { useEffect } from 'react'
import CardPictShop from '../components/CardPictShop';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/products-actions'
import PopupSignin from '../components/PopupSignin';

function Shop() {

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  {/* fetching api */}
  const fetchProducts = async() => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((error) => {
      console.log(error)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const isLoggedin = localStorage.getItem('authToken')
  const showPopupSignin = !isLoggedin

  return (
    <div>
      {showPopupSignin && <PopupSignin/>}
      <div className={`flex gap-5 mx-16 1xl:mt-36 ${isLoggedin ? 'xl:mt-32' : 'xl:mt-40'}`}>
        <FiltersBar />
        <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CardPictShop/>
        </div>
      </div>
    <Footer />    
    </div>
  )
}

export default Shop;
