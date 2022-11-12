import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import  RepoAPI  from './components/RepoAPI/RepoAPI';
import { UsuarioAPI } from './components/UsuarioAPI/UsuarioAPI';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UsuarioAPI/>} />
      <Route path='/RepoAPI' element={<RepoAPI/>} />
    </Routes>
    </BrowserRouter> 
    
     
    </>
  );
}

export default App;
