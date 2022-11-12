import styled from "styled-components";

export const ContainerGeral = styled.div`
background: #1C203B;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

export const ContainerBusca = styled.div`
width: 600px;
margin-top: -100px;

`

export const ContainerTexto = styled.div`
h1{
  color: #68E7E7;
  text-align: center;
  margin-bottom: 20px;
  font-size: 48px;
}
h2{
  color: #fff;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
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