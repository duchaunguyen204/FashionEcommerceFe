
import './App.css'
import Banner from './components/banner/Banner';
import BlogCards from './components/blogcards/BlogCards';
import CownDown from './components/cowndown/CownDown';
import Footers from './components/footers/Footers';
import Headers from './components/headers/Headers';
import Products from './components/Products';
import ProductsLimited from './ProductsLimited/ProductsLimited';
import Support from './support/Support';

function App() {


  return (
    <div>
      <Headers />
      <br /><br />
      <Banner/>
      <Products/>
      <BlogCards/>
      <br />
      <CownDown/>
      <br /><br /><br />
      <ProductsLimited/>
      <br /><br /><br /><br />
      <Support/>
      <br /><br /><br /><br />
      <Footers/>
    </div>
  )
}

export default App
