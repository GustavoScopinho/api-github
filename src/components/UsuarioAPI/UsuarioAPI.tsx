import axios from "axios"
import { useEffect, useState} from 'react'
import { ContainerUsuario, ContainerPerfilUsuario} from './Usuario.style'
import { useParams } from "react-router-dom"


interface Usuario {
    name: string;
    bio: string;
    location: string;
    followers: string;
    following: string;
    avatar_url: string;
  }

const api = {
  baseUrl: 'https://api.github.com/users/',
  clientId:'71a06d13a50934b40060',
  clientSecret: 'd1a974fde9b5329a942a865eb89a3f4a97264fce'
  }


export const UsuarioAPI:React.FC = () => {

  const [ usuarios, setUsuarios] = useState<Usuario>()
  const {username} = useParams()
  
 const buscarUsuario = async () => {
  const {data} = await axios.get(`${api.baseUrl}${username}?client_id=${api.clientId}?client_secret=${api.clientSecret}`)
  setUsuarios(data)
 }

 useEffect(() => {
buscarUsuario()

 },[])

  return (
    <>
  
    <ContainerUsuario>
      <ContainerPerfilUsuario>
        <div className='container-dados'>
          <p>Nome:</p>
          <h1>{usuarios?.name}</h1>
          <p>{usuarios?.bio? usuarios.bio : 'Biografia não encontrada'}</p>
          <p>{usuarios?.location ? usuarios?.location : 'Localização não encontrada'}</p>
          <div> <p>{usuarios?.followers} Seguidores</p> <p>{usuarios?.following} Seguindo</p></div>

        </div>
        <div className="container-foto-usuario">
          <img src={usuarios?.avatar_url} alt="" />
        </div>
      </ContainerPerfilUsuario>
    </ContainerUsuario>
    </>
  )
}
