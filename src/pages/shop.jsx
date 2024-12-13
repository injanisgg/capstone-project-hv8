import React, { useEffect } from 'react'
import CardPictShop from '../components/CardPictShop';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/products-actions'

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

  return (
    <div className='mt-36'>
      <div className='flex gap-5 mx-16'>
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
