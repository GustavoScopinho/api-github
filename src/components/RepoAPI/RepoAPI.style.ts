import styled from "styled-components";

export const ContainerRepositorios = styled.div`
  color: var(--primary-color);
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
    text-align: center;    
    .descricao {
      text-align: center;
      width: 190px;
      margin-top: 10px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 100px;
    }
  }
`