import React, { useEffect } from 'react'
import CardPictShop from '../components/CardPictShop';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/products-actions'

function Shop() {

  const products = useSelector((state) => state);
  const dispacth = useDispatch();

  {/* fetching api */}
  const fetchProducts = async() => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((error) => {
      console.log(error)
    })
    dispacth(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div className='flex gap-5 mx-16 mt-6'>
      <FiltersBar />
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardPictShop/>
      </div>
    </div>
    <Footer />    
    </>
  )
}

export default Shop;
