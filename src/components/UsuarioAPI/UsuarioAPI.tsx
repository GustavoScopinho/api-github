import axios from "axios"
import { useEffect, useState} from 'react'
import { ContainerUsuario, ContainerPerfilUsuario} from './Usuario.style'



interface Usuario {
  name: string;
  bio: string;
  location: string;
  followers: string;
  following: string;
  avatar_url: string;
}

export const UsuarioAPI:React.FC = () => {

  const nome_usuario = 'gustavoscopinho'
  let urlWeb = `https://api.github.com/users/${nome_usuario}`;
  let token = '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';
  axios.get(urlWeb, { headers:  {token} } );

  const [usuarios, setUsuarios] = useState<Usuario>()
  
  useEffect(() => {
    axios.get(urlWeb)
    .then(response => {
      setUsuarios(response.data)
    })
  }, [])




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
