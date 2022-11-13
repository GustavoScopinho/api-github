import react from 'react';
import { ContainerRepositorios } from './RepoAPI.style';

export const RepoAPI: React.FC | any = ({ repositorios }: any) => {
  return (
    <>
      <ContainerRepositorios>
        <div> <h2> Repositórios</h2></div>
        <div className='box-repo'>
          <ul className='container-menor-repo'>
            {repositorios.slice(0, 8).map((user: any) => {
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
      {/* <ContainerRepositorios>
        <div><h2>Repositórios</h2></div>
        <div className='box-repo'>
          <ul className='container-menor-repo'>
            <li className='caixa-repositorio'>
              <div>
                <h5>Repositório Teste</h5>
                <p className='descricao'>Ferramenta simples com o intuito de facilitar a verificação de seus seguidores no GitHub.</p>
              </div>
              <div>
                <p className='linguagem'>HTML</p>
              </div>
            </li>
          </ul>
        </div>
      </ContainerRepositorios>*/}
    </>
  )
}