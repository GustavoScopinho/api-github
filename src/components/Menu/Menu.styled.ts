import styled from "styled-components";

export const MenuContainer = styled.div`
    position: absolute;
    color: var(--primary-color);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 30px;
    font-size: 1.1rem;

    a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--primary-color);
        transition: 0.5s;

        &:hover {
            color: var(--detail-color);
            transform: scale(1.1);
            transition: 0.5s;
        }
    }
`