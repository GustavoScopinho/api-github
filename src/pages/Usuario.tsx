import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu/Menu';
import { RepoAPI } from '../components/RepoAPI/RepoAPI';
import { UsuarioAPI } from '../components/UsuarioAPI/UsuarioAPI';
import { Loading } from '../components/Loading/Loading';

interface Usuario {
  name: string;
  bio: string;
  location: string;
  followers: string;
  following: string;
  avatar_url: string;
  html_url: string;
  login: string;
}

interface Repositorio {
  name: string;
  description: string;
  language: string;
  url: string;
}

const repositorioAPI = {
  baseUrl: 'https://api.github.com/users/',
  clientId: '71a06d13a50934b40060',
  clientSecret: 'd1a974fde9b5329a942a865eb89a3f4a97264fce'
}

const userAPI = {
  baseUrl: 'https://api.github.com/users/',
  clientId: '71a06d13a50934b40060',
  clientSecret: 'd1a974fde9b5329a942a865eb89a3f4a97264fce'
}

export const UsuarioPage = () => {
  const [repositorios, setRepositorios] = useState<Repositorio[]>([])
  const [usuarios, setUsuarios] = useState<Usuario | null>(null)
  const { username } = useParams()

  const buscarRepositorios = async () => {
    const { data } = await axios.get(`${repositorioAPI.baseUrl}${username}/repos?client_id=${repositorioAPI.clientId}?client_secret=${repositorioAPI.clientSecret}`)
    setRepositorios(data)
  }

  const buscarUsuario = async () => {
    const { data } = await axios.get(`${userAPI.baseUrl}${username}?client_id=${userAPI.clientId}?client_secret=${userAPI.clientSecret}`)
    setUsuarios(data)
  }

  useEffect(() => {
    buscarUsuario()
    buscarRepositorios()
  }, [])

  return (
    <div>
      {(usuarios && repositorios) ?
        (<>
          <Menu />
          <UsuarioAPI usuarios={usuarios} />
          <RepoAPI repositorios={repositorios} />
        </>) : (<>
          <Menu />
          <Loading />
        </>)}
    </div>)
}