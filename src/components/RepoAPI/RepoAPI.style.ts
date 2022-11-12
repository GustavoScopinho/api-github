
import styled from "styled-components";


export const ContainerUsuario = styled.div`
  background: #1C203B;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerPerfilUsuario = styled.div`
display: flex;

p {
  color: #fff;
}
h1{
  color: 
#68E7E7;
}

.container-dados>div {
  display: flex;
  
  p {
    margin-right: 25px
  }
}

`

export const ContainerRepositorios = styled.div`
background: #1C203B;
  width: 100%;
  height: 400vh;
  color: #fff;
  display: flex;
 
  flex-direction: column;
  align-items: center;

  .box-repo {
    display: flex;
    justify-content: center;
    width: 1000px;
   
  }

  .container-menor-repo {
    display: flex;
    flex-wrap: wrap;
  }

  .caixa-repositorio {
    width: 200px;
    height: 200px;
    background-color: rgba(254, 253, 253, 0.05);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

  }
`