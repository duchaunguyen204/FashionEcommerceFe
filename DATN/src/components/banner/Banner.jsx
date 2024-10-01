

const Banner = () => {
    return (
        <div>
            <main className="relative">
                <div className="container mx-auto flex items-center justify-between py-20 px-6">
                    <div className="space-y-4">
                        <p className="text-red-500">
                            NEW TREND
                        </p>
                        <h1 className="text-6xl font-bold">
                            SUMMER SALE STYLISH
                        </h1>
                        <h2 className="text-6xl font-bold">
                            WOMENS
                        </h2>
                        <a className="text-black underline" href="#">
                            DISCOVER MORE
                        </a>
                    </div>
                    <div>
                        <img alt="Woman in stylish brown sweater looking down" className="w-full h-auto" height="700" src="https://placehold.co/500x796" width="500" />
                    </div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-4 text-gray-700">
                    <a className="block" href="#">
                        <i className="fab fa-facebook-f">
                        </i>
                    </a>
                    <a className="block" href="#">
                        <i className="fab fa-twitter">
                        </i>
                    </a>
                    <a className="block" href="#">
                        <i className="fab fa-instagram">
                        </i>
                    </a>
                    <a className="block" href="#">
                        <i className="fab fa-pinterest">
                        </i>
                    </a>
                    <p className="rotate-90 transform origin-left">
                        FOLLOW US
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 transform rotate-90 origin-bottom-right text-gray-700">
                    <p>
                        SCROLL
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Banner
