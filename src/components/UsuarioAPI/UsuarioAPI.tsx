import axios from "axios"
import { ContainerUsuario, ContainerPerfilUsuario } from './Usuario.style'
import { BsRecordFill, BsPersonFill, BsPeopleFill, BsGeoAltFill } from "react-icons/bs";
import { IconContext } from 'react-icons';

export const UsuarioAPI: React.FC | any = ({ usuarios }: any) => {
  return (
    <>
      <ContainerUsuario>
        <ContainerPerfilUsuario>
          <div className='container-dados'>
            <a target="_blank" href={usuarios?.html_url}>
              <h1>{usuarios?.login}</h1>
            </a>
            <div className="container-info">
              <i><IconContext.Provider value={{ className: "shared-class", size: '20' }}><BsPersonFill /></IconContext.Provider></i>
              <h4>{usuarios?.name ? usuarios?.name : 'Sem nome definido'}</h4>
            </div>
            <div className="container-info">
              <i className="bio-container"><IconContext.Provider value={{ className: "shared-class", size: '20' }}><BsPeopleFill /></IconContext.Provider></i>
              <p>{usuarios?.bio ? usuarios.bio : 'Sem descrição definida'}</p>
            </div>
            <div className="container-info">
              <i><IconContext.Provider value={{ className: "shared-class", size: '20' }}><BsGeoAltFill /></IconContext.Provider></i>
              <p>{usuarios?.location ? usuarios?.location : 'Sem localidade definida'}</p>
            </div>
            <div className="container-info">
              <i><IconContext.Provider value={{ className: "shared-class", size: '20' }}><BsPeopleFill /></IconContext.Provider></i>
              <p><span>{usuarios?.followers}</span> Seguidores</p>
              <i><IconContext.Provider value={{ className: "shared-class", size: '5' }}><BsRecordFill /></IconContext.Provider></i>
              <p><span>{usuarios?.following}</span> Seguindo</p>
            </div>
          </div>
          <a target="_blank" href={usuarios?.html_url}>
            <div className="container-foto-usuario">
              <img src={usuarios?.avatar_url} alt="Foto de ${usuarios?.name}" />
            </div>
          </a>
        </ContainerPerfilUsuario>
      </ContainerUsuario>
    </>
  )
}