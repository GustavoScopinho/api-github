import { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { ContainerBusca, ContainerTexto, ContainerPesquisar, ContainerGeral, ButtonSC } from "./Buscar.styled"
import lottie from 'lottie-web';
import { BsSearch } from "react-icons/bs";
import { IconContext } from 'react-icons';

interface ButtonProps {
  bg?: 'default' | 'active';
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({ bg = 'default' }) => {
  return (
    <ButtonSC bg={bg}>
      <i><IconContext.Provider value={{ className: "shared-class", size: '24' }}>
        <BsSearch />
      </IconContext.Provider></i>
    </ButtonSC>
  )
}

export const BuscarUsuario: React.FC = () => {
  const container: any = useRef(null);
  const [usuarios, setUsuarios] = useState('');
  const [inputFocus, setInputFocus] = useState<any>('default');

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../json/github.json')
    })
  }, [])

  function handleInputFocus() {
    inputFocus === 'default' ? setInputFocus('active') : setInputFocus('default')  
  }

  return (
    <>
      <ContainerGeral>
        <ContainerBusca>
          <ContainerTexto>
            <h1>GitStats</h1>
          </ContainerTexto>
          <div className="container" ref={container}></div>
          <ContainerPesquisar>
            <input type="text" onBlur={handleInputFocus} onFocus={handleInputFocus} onChange={(e) => setUsuarios(e.target.value)} placeholder="username" id="" />
            <Link to={`/usuario/${usuarios}`}>
              <Button bg={inputFocus}></Button>
            </Link>
          </ContainerPesquisar>
          <h2>Digite seu nome de usuário e veja informações sobre seu perfil e seus repositórios!</h2>
        </ContainerBusca>
      </ContainerGeral>
    </>
  )
}
