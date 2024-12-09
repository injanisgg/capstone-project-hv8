import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import renderStars from '../redux/actions/render-stars';
import axios from 'axios'; 

function Category({ headTitle, categoryProduct }) {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]); 
    const isLogin = localStorage.getItem('authToken')

    const handleRedirect = () => {
        if(!isLogin){
            navigate('/signup')
        } else {
            navigate('/shop')
        }
    };

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryProduct}`);
            setCategory(response.data); 
        } catch (error) {
            console.error("Error fetching product category:", error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, [categoryProduct]); // Menambahkan categoryProduct sebagai dependency

    // Merender data dari API dalam products
    const renderList = category.map((product) => {
        const { id, title, image, category, price, rating: { rate } } = product;

        // Membatasi panjang title hingga 20 karakter
        const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

        return (
            <div
                className="flex flex-col gap-3 border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer w-64"
                key={id}
                onClick={handleRedirect}>
                <div className="bg-white rounded-3xl overflow-hidden">
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
                    <button className="rounded-3xl w-42 bg-main-yellow h-10 font-semibold">Add to cart</button>
                </div>
            </div>
        );
    });

    return (
        <div className='flex flex-col justify-center items-center mb-6'>
            <h1 className='text-main-army font-extrabold text-4xl leading-tight text-center my-5'>{headTitle}</h1>
            <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {renderList}
            </div>
            <button className="rounded-3xl w-40 bg-slate-100 h-10 font-black mt-12 mb-4 border-0 border-main-army hover:border-2" onClick={handleRedirect}>View All</button>
            <div className="border-b-2 border-gray-300 mx-20 w-[1380px] mt-14"></div>
        </div>
    );  
}

export default Category;