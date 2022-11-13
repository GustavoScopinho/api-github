import styled from "styled-components";

export const ContainerRepo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TituloRepositorios = styled.h2`
  color: var(--detail-color);
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 30px;
  margin-bottom: 30px;
  user-select: none;
`

export const ContainerRepositorios = styled.div`
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 60%;
  gap: 20px;
  .box-repo {
    cursor: pointer;
    transition: 0.8s;
    &:hover {
      transition: 0.8s;
      transform: scale(1.05);
    }
  }
  .caixa-repositorio {
    background-color: var(--secondary-color);
    border: 1px solid var(--border-secondary-color);
    position: relative;
    width: 200px;
    max-width: 200px;
    height: 200px;
    max-height: 200px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .repo-icons {
      position: absolute;
      bottom: 15px;
      display: flex;
      gap: 130px;
      transition: 0.5s;
      &:hover{
        color: var(--detail-color);
        transition: 0.5s;
      }
    }
    h5 {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 18px;
    }    
    .descricao {
      text-align: center;
      width: 200px;
      height: 120px;
      max-height: 120px;
      padding: 10px;
      margin-bottom: 5px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .linguagem {
      color: var(--detail-color);
      height: 10px;
      opacity: 0.8;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
`