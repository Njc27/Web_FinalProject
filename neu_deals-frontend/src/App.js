import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home.jsx'
import SignUpUi from './Components/SignUpUi/SignUpUi.jsx';
import Login from './Components/Login/login.jsx';
import Sell from './Components/Sell/sell.jsx';
import SellForm from "./Components/Sell/sellForm.jsx"
import Cart from './Components/Cart/cart.jsx';
import WishList from './Components/Wishlist/wishList.jsx';
import Help from './Components/Help/help.jsx'
import Categories from './Components/Categories/categories';
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/footer';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="container">
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/SignUpUi" element={<SignUpUi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell/form/:item" element={<SellForm/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/help" element={<Help />}  />
          <Route path="/categories" element={<Categories />}  />
          <Route path="/productDetails" element={<ProductDetails />}  />
         </Routes>
        {/* <Footer /> */}
        </div>
      </Router>
    </>
  )
}

export default App;
