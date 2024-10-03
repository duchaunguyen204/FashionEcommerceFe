import Banner from "../../components/banner/Banner"
import Headers from "../../components/headers/Headers"
import BlogCards from './../../components/blogcards/BlogCards';
import Products from './../../components/Products';
import CownDown from '../../components/cowndown/CownDown'
import ProductsLimited from './../../ProductsLimited/ProductsLimited';
import Support from '../../components/support/Support'
import Footers from '../../components/footers/Footers'

const HomePages = () => {
    return (
        <div>
            <Headers />        
            <Banner />          
            <BlogCards />          
            <Products />         
            <CownDown />
            <br /><br />
            <ProductsLimited />
            <Support />
            
            <Footers />
        </div>
    )
}

export default HomePages
