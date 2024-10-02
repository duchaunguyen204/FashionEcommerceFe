

const Headers = () => {
  return (
    <div> 
      <header className="bg-white ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            UQMO
          </div>
          <nav className="space-x-8">
            <a className="text-red-500 hover:text-red-500" href="#">
              HOME
            </a>
            <a className="text-gray-700 hover:text-red-500" href="#">
              SHOP
            </a>
            <a className="text-gray-700 hover:text-red-500" href="#">
              BLOG
            </a>
            <a className="text-gray-700 hover:text-red-500" href="#">
              PAGES
            </a>
            <a className="text-gray-700 hover:text-red-500" href="#">
              ABOUT
            </a>
            <a className="text-gray-700 hover:text-red-500" href="#">
              CONTACT
            </a>
          </nav>
          <div className="space-x-4">
            <a className="text-gray-700" href="#">
              <i className="fas fa-search"></i>
            </a>
            <a className="text-gray-700" href="#">
              <i className="fas fa-user"></i>
            </a>
            <a className="text-gray-700" href="#">
              <i className="fas fa-heart"></i>
            </a>
            <a className="text-gray-700" href="#">
              <i className="fas fa-shopping-bag"></i>
            </a>
            <a className="text-gray-700" href="#">
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Headers