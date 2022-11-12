import axios from "axios"
import { useEffect, useState } from 'react'
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

export const BuscarUsuario: React.FC = () => {

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
            <h1>GitStats</h1>
          </ContainerTexto>
          <iframe src="https://lottie.host/?file=85748a8a-782c-47b8-9821-ba2022e0281e/2hRENtiwvm.json"></iframe>
          <ContainerPesquisar>
            <input type="text" onChange={(e) => setUsuarios(e.target.value)} placeholder="username" id="" />
            <button type="button" onClick={BuscarApi}>Enviar</button>
          </ContainerPesquisar>
            <h2>Digite seu nome de usuário
              e veja informações sobre seu
              perfil e seus repositórios!</h2>
        </ContainerBusca>
      </ContainerGeral>
    </>
  )
}
