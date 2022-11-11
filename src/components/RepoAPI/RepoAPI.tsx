
import { useEffect, useState} from 'react'
import axios from 'axios';

interface Repositorio {
  name: string;
  description: string;
  languages_url: string;

}

const nome_usuario = 'gustavoscopinho'  // colocar o valor da variavel q for digitada
const RepoAPI = () => {
  // Token github
  let urlWeb = `https://api.github.com/users/${nome_usuario}/repos`;
  let tokenStr = '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';
  axios.get(urlWeb, { headers: {"Authorization" : `Bearer ${tokenStr}`} });

  const [repositorios, setRepositorios] = useState<Repositorio[]>([])
  
  useEffect(() => {
    axios.get('urlWeb')
    .then(response => {
      setRepositorios(response.data)
    })
  }, [])

  return (
    <>
    <ul>
      {repositorios.map(user => {
        return (
          <li key={user.name}>
            <h5>{user.name}</h5>
            <p>{user.description}</p>
            <p>{user.languages_url}</p>
            <p>aa</p>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default RepoAPI