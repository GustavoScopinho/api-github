import React from 'react'
import RepoAPI from '../components/RepoAPI/RepoAPI'
import { UsuarioAPI } from '../components/UsuarioAPI/UsuarioAPI'

export const Usuario:React.FC = () => {
  return (
    <>
    <UsuarioAPI/>
    <RepoAPI/>
    </>
  )
}
