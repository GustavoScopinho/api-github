import react from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios';
import { ContainerPerfilUsuario, ContainerUsuario, ContainerRepositorios } from './RepoAPI.style'

interface Repositorio {
  name: string;
  description: string;
  language: string;

}

const nome_usuario = 'gustavoscopinho'  // colocar o valor da variavel q for digitada
const RepoAPI:React.FC = () => {
  // Token github
  let urlWeb = `https://api.github.com/users/${nome_usuario}/repos`;
  let tokenStr = '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';
  axios.get(urlWeb, { headers:  {tokenStr} } );

  const [repositorios, setRepositorios] = useState<Repositorio[]>([])
  
  useEffect(() => {
    axios.get(urlWeb)
    .then(response => {
      setRepositorios(response.data)
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

    <ContainerRepositorios>
    <div> <h2> Repositórios</h2></div>
    <div className='box-repo'>
    <ul className='container-menor-repo'>
      {repositorios.slice(16, 24).map(user => {
        return (
          <li className='caixa-repositorio' key={user.name}>
            <div>
            <h5>{user.name}</h5>
            <p className='descricao'>{user?.description ? user?.description : 'Repositório sem descrição.'} </p>
            </div>
            <div>
            <p className='linguagem'>{user.language}</p>
            </div>
            
          </li>
        )
      })}
    </ul>
    </div>
    </ContainerRepositorios>

    </>
  )
}

export default RepoAPI