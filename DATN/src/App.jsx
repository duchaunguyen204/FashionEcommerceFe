
import './App.css'
import Banner from './components/banner/Banner';
import BlogCards from './components/blogcards/BlogCards';
import Footers from './components/footers/Footers';
import Headers from './components/headers/Headers';
import Products from './components/Products';

function App() {


  return (
    <div>
      <Headers />
      <Banner/>
      <Products/>
      <BlogCards/>
      <Footers/>
    </div>
  )
}

export default App
