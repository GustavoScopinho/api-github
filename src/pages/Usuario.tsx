import React from 'react'
import { Menu } from '../components/Menu/Menu'
import RepoAPI from '../components/RepoAPI/RepoAPI'
import { UsuarioAPI } from '../components/UsuarioAPI/UsuarioAPI'

export const Usuario: React.FC = () => {
  return (
    <>
      <Menu />
      <UsuarioAPI />
      <RepoAPI />
    </>
  )
}
