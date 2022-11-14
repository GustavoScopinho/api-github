import styled from "styled-components";

export const ContainerUsuario = styled.div`
display: flex;
margin-bottom: -20px;
`

export const ContainerPerfilUsuario = styled.div`
display: flex;
align-items: center;
gap: 70px;
margin: 90px auto;
color: var(--primary-color);
padding-left: 5px;
  @media screen and (max-width: 790px) {
    flex-direction: column;
  }
  i {
    color: #78828e;
  }
  h1 {
    color: var(--detail-color);
    font-size: 3rem;
    font-weight: 600;
    user-select: none;
    margin-left: -5px;
    margin-bottom: 10px;
    @media screen and (max-width: 790px) {
    display: flex;
    flex-wrap: wrap;
    font-size: 2.3rem;
    width: 100%;
    margin-left: 0px;
    }
  }
  h4 {
    font-weight: 600;
  }
  .container-dados {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 15px;
      .container-info {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
      .bio-container {
        align-self: flex-start;
      }
      span {
        font-weight: 600;
      }
      @media screen and (max-width: 790px) {
        width: 80%;
        align-items: center;
        text-align: center;
      }
    }
  .container-foto-usuario {
    width: 300px;
    height: 300px;
    img {      
      width: 300px;
      height: 300px;
      border-radius: 50%;
      transition: 0.8s;
      border: 3px solid var(--border-secondary-color);
      &:hover {
        transition: 0.8s;
        box-shadow: 0px 0px 5px rgb(188, 130, 255, 0.50);
      }
    }
    @media screen and (max-width: 790px) {
      width: 100%;
      height: 100%;
      img {
        width: 250px;
        height: 250px;
      }
    }
  }
`