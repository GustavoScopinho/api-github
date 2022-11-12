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
const RepoAPI = () => {
  // Token github
  let urlWeb = `https://api.github.com/users/${nome_usuario}/repos`;
  let tokenStr = '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';
  axios.get(urlWeb, { headers: {"Authorization" : `Bearer ${tokenStr}`} });

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
      {repositorios.slice(0, 8).map(user => {
        return (
          <li className='caixa-repositorio' key={user.name}>
            <div>
            <h5>{user.name}</h5>
            <p>{user.description}</p>
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


    <ul>
      {repositorios.map(user => {
        return (
          <li key={user.name}>
            <h5>{user.name}</h5>
            <p>{user.description}</p>
            <p>{user.language}</p>
            
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default RepoAPI