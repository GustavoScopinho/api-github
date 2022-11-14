import styled from "styled-components";

export const ErroContainer = styled.div`
    background-color: var(--background-color);
    color: var(--primary-color);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .container {
    width: 450px;
    height: auto;
    margin: 0 auto;
    @media screen and (max-width: 790px) {
    width: 250px;
    }
    }
    h1 {
        font-weight: 600;
        user-select: none;
    }
    h2 {
        font-weight: 400;
        user-select: none;
        margin-bottom: 50px;
    }
    button {
        height: 45px;
        width: 210px;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        border-radius: 10px;
        background-color: var(--detail-color);
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(166, 89, 255, 0.28);
        border-color: rgba(166, 89, 255, 0.224);
        transition: 0.5s;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 20px rgba(166, 89, 255, 0.58);
            border-color: rgba(166, 89, 255, 0.224);
            transition: 0.5s;
        }
    }
`