import react from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios';
import { ContainerRepositorios } from './RepoAPI.style'
import { useParams } from "react-router-dom"

interface Repositorio {
  name: string;
  description: string;
  language: string;
  url: string;
}

const api = {
  baseUrl: 'https://api.github.com/users/',
  clientId:'71a06d13a50934b40060',
  clientSecret: 'd1a974fde9b5329a942a865eb89a3f4a97264fce'
  }

const RepoAPI:React.FC = () => {

  const [repositorios, setRepositorios] = useState<Repositorio[]>([])

  const {username} = useParams()
  
 const buscarRepositorios = async () => {
  const {data} = await axios.get(`${api.baseUrl}${username}/repos?client_id=${api.clientId}?client_secret=${api.clientSecret}`)
  setRepositorios(data)
  console.log(data)
 }

 useEffect(() => {
  buscarRepositorios()
 },[])


  return (
    <>
    <ContainerRepositorios>
    <div> <h2> Repositórios</h2></div>
    <div className='box-repo'>
    <ul className='container-menor-repo'>
      {repositorios.slice(0, 8).map(user => {
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