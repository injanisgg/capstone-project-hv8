import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import renderStars from '../redux/actions/render-stars.js';
import { useNavigate } from 'react-router-dom';
import LoadingGif from '../img/loading.gif'; 

function CardPictShop() {
  const products = useSelector((state) => state.allProducts.products);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isLogin = localStorage.getItem('authToken');

  //handle login 
  const handleRedirectLogin = () => {
    if(!isLogin){
      navigate('/signup')
    } else {
      navigate('/shop/id:')
    }
  }

  const handleRedirect = (id) => {
    navigate(`/shop/${id}`);
  };

  // Periksa jika data sudah tersedia, lalu hentikan loading
  useEffect(() => {
    if (products && products.length > 0) {
      setIsLoading(false);
    }
  }, [products]);

  // Merender data dari API dalam products
  const renderList = products.map((product) => {
  const { id, title, image, category, price, rating: { rate } } = product;

  // Membatasi panjang title hingga 20 karakter
  const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

    return (
      <div
        className="flex flex-col gap-3 border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer"
        key={id}
      >
        <div className="bg-white rounded-3xl overflow-hidden" onClick={() => handleRedirect(id)}>
          <div className="relative p-8 w-64 h-72">
            <img src={image} className="w-full h-full object-contain" alt={title} />
          </div>
        </div>
        <div className="flex flex-col gap-2 my-2 mx-2">
          <div className="text-black bg-landing py-1 px-2 rounded-lg w-fit">{category}</div>
          <div className="text-main-army font-bold text-lg">{truncatedTitle}</div>
          <div className="flex gap-1 items-center">
            <span className="flex gap-1">{renderStars(rate)}</span>
            <span className="text-main-army text-sm font-light">{rate}</span>
          </div>
          <div className="text-main-army font-bold text-md">$ {price}</div>
          <button className="rounded-3xl w-42 bg-main-yellow h-10 font-semibold" onClick={handleRedirectLogin}>Add to cart</button>
        </div>
      </div>
    );
  });

  return (
    <>
      {isLoading ? (
        <div>
          <img src={LoadingGif} alt="Loading..." className='my-44 mx-96'/>
        </div>
      ) : (
        renderList
      )}
    </>
  );  
}

export default CardPictShop;
