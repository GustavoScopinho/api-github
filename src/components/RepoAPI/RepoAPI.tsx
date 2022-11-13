import { ContainerRepo, ContainerRepositorios, TituloRepositorios } from './RepoAPI.styled';
import { BsGithub, BsFillFolderSymlinkFill } from "react-icons/bs";

export const RepoAPI: React.FC | any = ({ repositorios }: any) => {
  return (
    <>
      <ContainerRepo>
        <TituloRepositorios>
          Repositórios
        </TituloRepositorios>
        <ContainerRepositorios>
          {repositorios.slice(0, 8).map((user: any) => {
            return (
              <div className='box-repo' key={user.name}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                <div className='caixa-repositorio'>
                  <div className='repo-icons'>
                    <BsGithub />
                    <BsFillFolderSymlinkFill />
                  </div>
                  <div className='titulo'>
                    <h5>{user.name}</h5>
                  </div>
                  <div>
                    <p className='descricao'>{user?.description ? user?.description : 'Repositório sem descrição.'}</p>
                  </div>
                  <div>
                    <p className='linguagem'>{user.language}</p>
                  </div>
                </div>
                </a>
              </div>
            )
          })}
        </ContainerRepositorios>
      </ContainerRepo>
    </>
  )
}