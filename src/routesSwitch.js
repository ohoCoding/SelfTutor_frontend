import React from 'react';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

import Home from './pages/Home.js';
import Register from './pages/Register.js';

function RoutesSwitch (){
  return(
    
      <BrowserRouter>
        <Routes>

           <Route path = "/" element={<Home/>}/>
           <Route path = "/register" element ={<Register/>}/>

        </Routes>
       
      </BrowserRouter>
      
       
     
   
  );
};

export default RoutesSwitch;
