import styled from "styled-components";

export const ContainerGeral = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
color: var(--primary-color);
`

export const ContainerBusca = styled.div`
margin: 90px auto;
width: 600px;
@media screen and (max-width: 790px) {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
h2 {
  font-weight: 400;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 50px;
  padding-bottom: 50px;
  user-select: none;
}
.container {
  width: 250px;
  height: auto;
  margin: 0 auto;
}
`

export const ContainerTexto = styled.div`
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 3.5rem;
  user-select: none;
  color: var(--detail-color);
}
`

export const ContainerPesquisar = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
margin-top: 50px;
input {
  width: 330px;
  height: 45px;
  text-transform: uppercase;
  font-size: 0.95rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: var(--primary-color);
  background: var(--border-secondary-color);
  border: 2px solid var(--border-primary-color);
  border-radius: 6px;
  padding: 0 15px;
  transition: 1s;
  @media screen and (max-width: 790px) {
    width: 250px;
  }
  ::placeholder {
    color: #6b6f73;
  }
  :focus {
    border: 2px solid #7b52b1;
    transition: 0.8s;
  }
  :active {
    border: 2px solid #7b52b1;
    transition: 0.8s;
  }
}
`

interface BProps {
  bg: 'default' | 'active'
}

const bgColor = {
  default: '#30363D',
  active: '#BC82FF'
}

export const ButtonSC = styled.button<BProps>`
  height: 45px;
  width: 45px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    transform: scale(1.05);
  }

  ${props =>
  `
    background-color: ${bgColor[props.bg]} 
  `
}
`