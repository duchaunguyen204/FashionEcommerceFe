// eslint-disable-next-line no-unused-vars
import React from 'react'

const Headers = () => {
  return (
    <div>
      
      <nav className="flex items-center justify-between p-5">
   
        <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl">U</span>
            <span className="font-bold text-2xl">Q</span>
            <span className="font-bold text-2xl">M</span>
            <span className="bg-red-600 rounded-full w-4 h-4 inline-block"></span>
        </div>
        
        {/* <!-- Navigation Links --> */}
        <div className="flex items-center space-x-6">
            <a href="#" className="text-red-600 font-bold">HOME</a>
            <a href="#" className="text-black">SHOP</a>
            <a href="#" className="text-black">BLOG</a>
            <a href="#" className="text-black">PAGES</a>
            <a href="#" className="text-black">ABOUT</a>
            <a href="#" className="text-black">CONTACT</a>
        </div>
        
  
        <div className="flex items-center space-x-6">
            <a href="#" className="text-black"><i className="fas fa-search"></i></a>
            <a href="#" className="text-black"><i className="fas fa-user"></i></a>
            <a href="#" className="text-black"><i className="fas fa-heart"></i></a>
            <a href="#" className="relative text-black">
                <i className="fas fa-shopping-bag"></i>
                <span className="absolute top-0 right-0 bg-yellow-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </a>
            <a href="#" className="text-black"><i className="fas fa-bars"></i></a>
        </div>
    </nav>

      
    </div>
  )
}

export default Headers
