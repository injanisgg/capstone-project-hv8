import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/search-actions";
import renderStars from "../redux/actions/render-stars";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

function SearchPage() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.search.product);
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    // Ambil semua produk saat komponen dimuat
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    // Filter produk berdasarkan query
    useEffect(() => {
        if (query) {
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(allProducts);
        }
    }, [query, allProducts]);

    // Fungsi untuk menangani pencarian dari komponen Search
    const handleSearch = (searchQuery) => {
        console.log("Search query received:", searchQuery);
        setQuery(searchQuery);
    };

    const handleRedirect = (productId) => {
        navigate(`/product/${productId}`);
    };

    // Render produk yang difilter
    const renderList = filteredProducts.length > 0 ? (
        filteredProducts.map((item) => {
            const { id, title, image, category, price, rating: { rate } } = item;
            const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

            return (
                <div 
                    key={id} 
                    className="flex flex-col gap-3 border-0 hover:border-2 border-main-army rounded-3xl ease-in-out cursor-pointer w-64"
                    onClick={() => handleRedirect(id)}
                >
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
                        <div className="text-main-army font-bold text-lg">
                            {truncatedTitle}
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="flex gap-1">{renderStars(rate)}</span>
                            <span className="text-main-army text-sm font-light">{rate}</span>
                        </div>
                        <div className="text-main-army font-bold text-md">
                            $ {price}
                        </div>
                        <button className="rounded-3xl w-42 bg-main-yellow h-10 font-semibold">
                            Add to cart
                        </button>
                    </div>
                </div>
            );
        })
    ) : (
        <p className="text-main-army font-bold text-center">
            Tidak ada hasil pencarian
        </p>
    );

    return (
        <div className='flex flex-col justify-center items-center mb-6'>
            {/* Komponen Search dengan prop onSearch */}
            <Search onSearch={handleSearch} />
            
            {query && (
                <h1 className='text-main-army font-extrabold text-4xl leading-tight text-center my-5'>
                    Hasil untuk "{query}"
                </h1>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {renderList}
            </div>
        </div>
    );
}

export default SearchPage;