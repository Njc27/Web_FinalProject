
import './App.css';
import Nav from './Components/Nav/nav.jsx'
import Home from './Components/Home/home.jsx'
import Login from './Components/Login/login.jsx'
import Signup from './Components/SignUp/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/footer'
import SideBar from './Components/SideBar/SideBar';
function App() {
  return (
    <>
      
      <Router>
      {/* <SideBar /> */}
      <Nav />

      <div className="container">
      <Routes>
      <Route exact path='/' element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          
        </Routes>
        
        </div>
        <Footer />
      </Router>
        
      
    </>
  )
}

export default App;
