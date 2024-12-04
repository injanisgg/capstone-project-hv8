import React from 'react'
import CardPictShop from '../components/CardPictShop';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer'

function Shop() {
  const cardData = [
    {
      picture: 'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000',
      alt: "Product 1",
      stars: 4.5,
      price: "39.000",
      title: "Classic White Shirt"
    },
    {
      picture: 'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000',
      alt: "Product 2",
      stars: 4,
      price: "29.000",
      title: "Elegant Black Trousers"
    },
    {
      picture: 'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000',
      alt: "Product 3",
      stars: 3.5,
      price: "24.000",
      title: "Casual Denim Jacket"
    },
    {
      picture: 'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000',
      alt: "Product 4",
      stars: 5,
      price: "49.000",
      title: "Stylish Red Dress"
    },
    {
      picture: 'https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000',
      alt: "Product 5",
      stars: 4.8,
      price: "19.000",
      title: "Trendy Summer Hat"
    }
  ];
    

  return (
    <>
    <div className='flex gap-5 mx-16 mt-6'>
      <FiltersBar />
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((items, index) => (
          <CardPictShop
            key={index}
            picture={items.picture}
            alt={items.alt}
            stars={items.stars}
            price={items.price}
            title={items.title}
          />
        ))}
      </div>
    </div>
    <Footer />    
    </>
  )
}

export default Shop;
