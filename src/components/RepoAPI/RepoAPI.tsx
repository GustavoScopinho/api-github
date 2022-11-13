import react from 'react';
import { ContainerRepo, ContainerRepositorios, TituloRepositorios } from './RepoAPI.style';
import { BsGithub, BsFillFolderSymlinkFill } from "react-icons/bs";

export const RepoAPI: React.FC | any = ({ repositorios }: any) => {
  return (
    <>
      <ContainerRepo>
        <TituloRepositorios>
          Repositórios
        </TituloRepositorios>
        <ContainerRepositorios>
          <div className='box-repo'>
            {repositorios.slice(0, 8).map((user: any) => {
              return (
                <div className='caixa-repositorio' key={user.name}>
                  <div className='repo-icons'>
                    <BsGithub />
                    <BsFillFolderSymlinkFill />
                  </div>
                  <div>
                    <h5>{user.name}</h5>
                  </div>
                  <div>
                    <p className='descricao'>{user?.description ? user?.description : 'Repositório sem descrição.'}</p>
                  </div>
                  <div>
                    <p className='linguagem'>{user.language}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ContainerRepositorios>
      </ContainerRepo>
    </>
  )
}