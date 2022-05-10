import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import App from './App';
import TShirts from './products/TShirts';
import Shirts from './products/Shirts';
import Hoodies from './products/Hoodies';
import Jackets from './products/Jackets';
import Pants from './products/Pants';
import Shorts from './products/Shorts';
import Hats from './products/Hats';
import Wallets from './products/Wallets';
import Bags from './products/Bags';
import AllPro from './products/AllPro';
import AboutUs from './products/AboutUs';
import DetailPro from './products/DetailPro';
import Search from './products/Search';
import Cart from './products/Cart';

import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { getTotals } from './redux/cartSlice';
import Footers from './componnents/footer';
import Navbar from './componnents/Navbar';

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter> 
      <Navbar/>
      <ToastContainer />
      <Routes>   
          <Route path='/' element={<App />} />

          <Route path='/tshirts' element={<TShirts itemsPerPage={9}/>} />
          <Route path='/shirts' element={<Shirts itemsPerPage={9}/>} />
          <Route path='/hoodies' element={<Hoodies itemsPerPage={9}/>} />
          <Route path='/jackets' element={<Jackets itemsPerPage={9}/>} />

          <Route path='/pants' element={<Pants itemsPerPage={9}/>} />
          <Route path='/shorts' element={<Shorts itemsPerPage={9}/>} />

          <Route path='/hats' element={<Hats itemsPerPage={9}/>} />
          <Route path='/wallets' element={<Wallets itemsPerPage={9}/>} />
          <Route path='/bags' element={<Bags itemsPerPage={9}/>} />

          <Route path='/allproducts' element={<AllPro itemsPerPage={9}/>} />

          <Route path='/:productId' element={<DetailPro />} /> 
          <Route path='/search' element={<Search />} /> 
          <Route path='/cart' element={<Cart />} /> 

      </Routes>  
      <Footers />
    </BrowserRouter>   
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
