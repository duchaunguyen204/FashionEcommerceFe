

const ProductsLimited = () => {
    const products = [
        {
            category: "Dresses",
            name: "Hub Accent Mirror",
            price: "$17",
            image: "https://placehold.co/300x300",
            alt: "Black bracelet with a metallic clasp"
        },
        {
            category: "Dresses",
            name: "Hosking Blue Area Rug",
            price: "$29",
            image: "https://placehold.co/300x300",
            alt: "Black baseball cap",
            reviews: "8k+ reviews"
        },
        {
            category: "Dresses",
            name: "Hanneman Pouf",
            price: "$62",
            image: "https://placehold.co/300x300",
            alt: "Black duffle bag with blue and white stripes"
        },
        {
            category: "Dresses",
            name: "Cushion Futon Slipcover",
            price: "$62",
            image: "https://placehold.co/300x300",
            alt: "Black leather belt with a metallic buckle"
        }
    ];


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-4">
                <button className="text-gray-500">
                    <i className="fas fa-chevron-left"></i>
                </button>
                {products.map((product, index) => (
                    <div key={index} className="text-left">
                        <div className="relative">
                            <img src={product.image} alt={product.alt} className="w-64 h-64 object-cover mb-4" />
                            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2">
                                ADD TO CART
                            </button>
                        </div>

                        <p className="text-gray-500">{product.category}</p>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-gray-700">{product.price}</p>
                        {product.reviews && (
                            <div className="flex items-center text-yellow-500">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span className="text-gray-500 ml-2">{product.reviews}</span>
                            </div>
                        )}
                        <button className="text-gray-500 mt-2">
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                ))}
                <button className="text-gray-500">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="absolute bottom-16 flex space-x-2">
                <span className="w-3 h-3 bg-pink-200 rounded-full"></span>
                <span className="w-3 h-3 bg-pink-200 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            </div>
        </div>
    );
}



export default ProductsLimited
