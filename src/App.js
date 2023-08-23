import './App.css';
import { Suspense,useState} from "react";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Productdetails from './Components/Productdetails';
import AddProducts from "./Components/AddProducts";
import store from './Redux/store'; 
import Cart from './Components/Cart';
import Detail from './Components/Detail';
import Signup from './Components/Signup';
import About from './Components/About';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Notfound from './Components/Notfound';
import Contact from './Components/Contact';


function App() {
      const [ display, ShowNoN ] = useState( true );
   
  return (
    
    <HashRouter>
    <Suspense fallback={<div className='text-center mt-5'><div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></div>}></Suspense>
      <Provider store={store}>
          { display && <nav> <Navbar /> </nav> } 
        <Routes>
           {
              ['Login', '/'].map((path, index) => <Route path={path} element={<Login visibility={ShowNoN}/>} key={index} />)
            }
            <Route path="/add-products" element={<AddProducts />} />
          <Route path="/Home" element={<Home visibility={ShowNoN} />} />
          <Route path="/Signup" element={<Signup visibility={ShowNoN}/>} />
          <Route path="/Welcome" element={<Welcome visibility={ShowNoN}/>} />
          <Route path="/About" element={<About visibility={ShowNoN}/>} />
           <Route path="/Contact" element={<Contact visibility={ShowNoN}/>} />
           <Route path="*" element={<Notfound visibility={ShowNoN}/>} />
          <Route path="/Detail" element={<Detail visibility={ShowNoN}/>} />
          <Route path="/products" element={<Products visibility={ShowNoN}/>} />
          <Route path="/products/:id" element={<Productdetails visibility={ShowNoN}/>} />
          <Route path="/cart" element={<Cart visibility={ShowNoN}/>} />
         
        </Routes>
        
      </Provider>
      <Suspense/>
    </HashRouter>
  );
}

export default App;