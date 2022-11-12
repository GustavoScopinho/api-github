import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { ContainerBusca, ContainerTexto, ContainerPesquisar, ContainerGeral } from "./Buscar.style"


export const BuscarUsuario:React.FC = () => {

  const [usuarios, setUsuarios] = useState('')


  return (
    <>
      <ContainerGeral>
        <ContainerBusca>
          <ContainerTexto>
            <h1>GitStats</h1>
          </ContainerTexto>
          <iframe src="https://lottie.host/?file=85748a8a-782c-47b8-9821-ba2022e0281e/2hRENtiwvm.json"></iframe>
          <ContainerPesquisar>
          <input type="text" onChange={(e) => setUsuarios(e.target.value)} placeholder="username"  id="" />
          <Link to={`/usuario/${usuarios}`}><button>Enviar</button></Link>
          
          </ContainerPesquisar>
            <h2>Digite seu nome de usuário
              e veja informações sobre seu
              perfil e seus repositórios!</h2>
        </ContainerBusca>
      </ContainerGeral>
    </>
  )
}
