import styled from "styled-components";

export const ContainerUsuario = styled.div`
display: flex;
margin-bottom: 30px;
`

export const ContainerPerfilUsuario = styled.div`
display: flex;
align-items: center;
gap: 70px;
margin: 90px auto;
color: var(--primary-color);
padding-left: 5px;
  i {
    color: #78828e;
  }
  h1 {
    color: var(--detail-color);
    font-size: 3.5rem;
    font-weight: 600;
    user-select: none;
    margin-left: -5px;
    margin-bottom: 10px;
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
    }
  .container-foto-usuario {
    width: 300px;
    height: 300px;
    img {      
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 3px solid var(--border-secondary-color);
    }
  }
`