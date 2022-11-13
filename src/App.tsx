import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { Buscar } from './pages/Buscar';
import { UsuarioPage } from './pages/Usuario';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Buscar/>} />
      <Route path='/usuario/:username' element={<UsuarioPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
