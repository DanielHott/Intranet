import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    color: black;
    display: flex;
    height: 10vh;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px) {
        height: 20vh;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled.div`
    background-color: white;
    color: black;
    display: flex;
    height: 10vh;
    justify-content: space-around;
    align-items: center;
`;

export const Navegation = styled.div`
    a {
        color: gray;
        text-decoration: none;
        margin-right: 10px;
    }
    
    a:hover {
        color: black;
    }
    color: black;
    display: flex;
    height: 3vh;
    justify-content: center;
    align-items: center;
`;