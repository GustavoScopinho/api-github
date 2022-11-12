import axios from "axios"
import { useEffect, useState} from 'react'
import { ContainerBusca, ContainerTexto, ContainerPesquisar, ContainerGeral } from "./UsuarioAPI.style"



export const UsuarioAPI:React.FC = () => {
  return (
    <>
      <ContainerGeral>
        <ContainerBusca>
          <ContainerTexto>
            <h1>Gitstats</h1>
            <h2>Digite seu nome de usuário
              e veja informações sobre seu perfil</h2>
          </ContainerTexto>
          <ContainerPesquisar>
          <input type="text" placeholder="username"  id="" />
          <button type="button">Enviar</button>
          </ContainerPesquisar>
          
        </ContainerBusca>
      </ContainerGeral>  
    </>
  )
}
