import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { BuscarUsuario } from '../components/Buscar/BuscarUsuario'

export const Buscar: React.FC = () => {
  return (
    <>
      <Menu />
      <BuscarUsuario />
    </>
  )
}
