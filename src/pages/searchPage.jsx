import React, { useEffect, useState } from "react"; // Tambahkan useState
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/search-actions";
import renderStars from "../redux/actions/render-stars";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from '../img/loading.gif';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchPage() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.search.product);
    const query = useQuery().get("query");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Tambahkan state loading

    useEffect(() => {
        if (query) {
            setLoading(true); // Set loading menjadi true saat memulai pencarian
            dispatch(searchProducts(query)).finally(() => {
                setLoading(false); // Set loading menjadi false setelah pencarian selesai
            });
        }
    }, [query, dispatch]);

    if (loading) { // Tampilkan loading jika loading true
        return (
            <div className='flex justify-center'>
                <img src={Loading} alt="Loading..." className='text-main-army my-48' />
            </div>
        );
    }

    const renderList = allProducts.length > 0 ? (
        allProducts.map((item) => {
            const { id, title, image, category, price, rating: { rate } } = item;
            const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

            return (
                <div 
                    key={id} 
                    className="flex flex-col gap-3 border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer w-64"
                    onClick={() => handleRedirect(id)}>
                    <div className="bg-white rounded-3xl overflow-hidden">
                        <div className="relative p-8 w-64 h-72">
                            <img 
                                src={image} 
                                className="w-full h-full object-contain" 
                                alt={title} 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 my-2 mx-2">
                        <div className="text-black bg-landing py-1 px-2 rounded-lg w-fit">
                            {category}
                        </div>
                        <div className="text-lg font-semibold">{truncatedTitle}</div>
                        <div className="text-main-army font-bold">${price}</div>
                        <div>{renderStars(rate)}</div>
                        <button className="rounded-3xl w-42 bg-main-yellow h-10 font-semibold">Add to cart</button>
                    </div>
                </div>
            );
        })
    ) : (
        <p className="text-main-army font-extrabold text-2xl leading-tight col-start-2 my-5">No products found😓</p>
    );

    const handleRedirect = (id) => {
        navigate(`/shop/${id}`);
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className='text-main-army font-extrabold text-4xl leading-tight text-center my-5'>Result for {query}</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {renderList}
            </div>
        </div>
    );
}

export default SearchPage;