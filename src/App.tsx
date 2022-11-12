import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'


import { Buscar } from './pages/Buscar';
import { Usuario } from './pages/Usuario';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Buscar/>} />
      <Route path='/usuario/:username' element={<Usuario/>} />
    </Routes>
    </BrowserRouter> 
    
     
    </>
  );
}

export default App;
