

const ItemsCart = () => {
    return (
       <div>
           <div className="container mx-auto p-4">
                    <div className="flex">
                        <div className=" px-4 w-80px h-80px">
                            <div className="flex flex-col items-center">
                                <img src="https://placehold.co/100x150" alt="Front view of red jacket" className="mb-4 w-80px h-80px"/>
                                <img src="https://placehold.co/100x150" alt="Back view of red jacket" className="mb-4 opacity-50"/>
                                <img src="https://placehold.co/100x150" alt="Side view of red jacket" className="mb-4 opacity-50"/>
                                <img src="https://placehold.co/100x150" alt="Red jacket laid flat" className="mb-4 opacity-50"/>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img src="https://placehold.co/400x600" alt="Large view of red jacket" className="w-200px h-200px"/>
                        </div>
                        <div className=" ">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-sm text-gray-500">HOME / THE SHOP</div>
                                <div className="flex space-x-2 text-sm text-gray-500">
                                    <div>&lt; PREV</div>
                                    <div>NEXT &gt;</div>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold mb-2">Hanneman Pouf</h1>
                            <div className="flex items-center mb-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="text-gray-500 ml-2">8k+ reviews</div>
                            </div>
                            <div className="text-2xl font-bold mb-4">$62</div>
                            <p className="text-gray-700 mb-4">
                                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. 
                                Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, 
                                ut aliquet magna posuere eget.
                            </p>
                            <div className="flex items-center mb-4">
                                <div className="mr-4">SIZES</div>
                                <div className="flex space-x-2">
                                    <button className="border px-4 py-2">XS</button>
                                    <button className="border px-4 py-2">S</button>
                                    <button className="border px-4 py-2">M</button>
                                    <button className="border px-4 py-2">L</button>
                                    <button className="border px-4 py-2">XL</button>
                                </div>
                                <div className="ml-4 text-gray-500">SIZE GUIDE</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="mr-4">COLOR</div>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 rounded-full border border-gray-300 bg-white"></button>
                                    <button className="w-6 h-6 rounded-full border border-gray-300 bg-red-500"></button>
                                    <button className="w-6 h-6 rounded-full border border-gray-300 bg-black"></button>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center border px-4 py-2">
                                    <button className="text-gray-500">-</button>
                                    <div className="mx-2">1</div>
                                    <button className="text-gray-500">+</button>
                                </div>
                                <button className="ml-4 bg-black text-white px-6 py-2">ADD TO CART</button>
                            </div>
                            <div className="flex items-center mb-4">
                                <button className="flex items-center text-gray-500">
                                    <i className="far fa-heart mr-2"></i> ADD TO WISHLIST
                                </button>
                                <button className="flex items-center text-gray-500 ml-4">
                                    <i className="fas fa-share mr-2"></i> SHARE
                                </button>
                            </div>
                            <div className="text-gray-500 mb-4">
                                <div>SKU: N/A</div>
                                <div>CATEGORIES: Casual & Urban Wear, Jackets, Men</div>
                                <div>TAGS: biker, black, bomber, leather</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
       </div>
    )
}

export default ItemsCart
