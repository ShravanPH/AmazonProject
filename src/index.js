import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Pages/Users';
import Products from './Pages/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="/users" element={<React.Fragment><App/><Users /></React.Fragment> }/>
          <Route path="/products" element={<React.Fragment><App/><Products /></React.Fragment>} />
        {/* </Route> */}
      </Routes>

      
    </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
