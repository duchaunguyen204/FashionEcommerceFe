
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePages from './pages/homepages/HomePages';
import ItemsCart from './ItemsCart';

function App() {

  return (

 
    <Router>
    

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/items" element={<ItemsCart />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App
