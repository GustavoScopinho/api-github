import styled from "styled-components";

export const ContainerGeral = styled.div`
background: var(--background-color);
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
color: var(--primary-color);
`

export const ContainerBusca = styled.div`
margin: 90px auto;
width: 600px;

h2{
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  margin-top: 50px;
  user-select: none;
}
`

export const ContainerTexto = styled.div`
h1{
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 4rem;
  user-select: none;
}

`

export const ContainerPesquisar = styled.div`
display: flex;
justify-content: center;
input {
  width: 304px;
  height: 45px;
  background: rgba(254, 253, 253, 0.05);
  border-radius: 6px;
  border: none;
  margin-right: 10px;
  

  ::placeholder{
    color: rgba(204, 204, 204, 0.8);
    font-size: 20px;
    padding: 16px 12px;
  }
}
`