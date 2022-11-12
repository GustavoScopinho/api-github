import axios from "axios"
import { useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom"
import { ContainerBusca, ContainerTexto, ContainerPesquisar, ContainerGeral } from "./Buscar.style"


export const BuscarUsuario:React.FC = () => {

  const [usuarios, setUsuarios] = useState('')


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
          <input type="text" onChange={(e) => setUsuarios(e.target.value)} placeholder="username"  id="" />
          <Link to={`/usuario/${usuarios}`}><button>Enviar</button></Link>
          
          </ContainerPesquisar>
          
        </ContainerBusca>
      </ContainerGeral>  
    </>
  )
}
