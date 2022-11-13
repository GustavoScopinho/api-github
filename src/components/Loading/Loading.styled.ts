import styled from "styled-components";

export const LoadingContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: var(--background-color);
color: var(--primary-color);
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 2;

h1 {
    margin-top: 10px;
    user-select: none;
}

.container {
  width: 450px;
  height: auto;
  margin: 0 auto;
}
`