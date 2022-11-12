import axios from "axios"
import { useEffect, useState} from 'react'
import { ContainerUsuario, ContainerPerfilUsuario} from './Usuario.style'





export const UsuarioAPI:React.FC = () => {


  return (
    <>
  
    <ContainerUsuario>
      <ContainerPerfilUsuario>
        <div className='container-dados'>
          <p>Nome:</p>
          <h1>Nome do usuário</h1>
          <p>Descrição do perfil</p>
          <p>Localização</p>
          <div> <p>XX Seguidores</p> <p>XX Seguindo</p></div>

        </div>
        <div className="container-foto-usuario">
          Imagem
        </div>
      </ContainerPerfilUsuario>
    </ContainerUsuario>
    </>
  )
}
