import axios from "axios"
import { useEffect, useState} from 'react'
import { ContainerBusca, ContainerTexto, ContainerPesquisar, ContainerGeral } from "./Buscar.style"

// interface Usuario {
//   //   name: string;
//   //   bio: string;
//   //   location: string;
//   //   followers: string;
//   //   following: string;
//   //   avatar_url: string;
//         usuarios: string;
//   }




export const BuscarUsuario:React.FC = () => {

  const [usuarios, setUsuarios] = useState('')

  const BuscarApi = () => {
    
    // let urlWeb = `https://api.github.com/users/${usuarios}`
    // let token = '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';
    // axios.get(urlWeb, { headers: {token} } );

    
    axios.get(`https://api.github.com/users/${usuarios}`)
    .then(response => {
      console.log(response.data)
    })
    
  }

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
          <button type="button" onClick={BuscarApi}>Enviar</button>
          </ContainerPesquisar>
          
        </ContainerBusca>
      </ContainerGeral>  
    </>
  )
}
