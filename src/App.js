import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import AboutUs from './Components/AboutUs';
import Checkout from './Components/Checkout';
function App() {
  return (
    <Router>
      <Navbar name="Chandu"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
      </Router>
  );
}

export default App;
