import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e0e0e0;
    padding-left: 10vw;
    padding-right: 10vw;
    justify-content: space-between;
    align-items: center;
    color: black;
    @media (max-width: 600px) {
        height: 20vh;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        margin-bottom: 5px;
        
    }
`;

export const Redes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    img {
        margin-left: 20px;
    }
`;

export const Sorteados = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    
    div {
        border-radius: 30px;
        display: flex;
        justify-content: center;
        background-color:  #1b3e6c;
        color: white;
        padding: 10px;
        align-items: center;
        box-shadow: 10px 5px 10px white;
        transition: transform .2s;
    }
    div:hover {
        transform: scale(1.2);
        box-shadow: 10px 5px 10px white;
    }
    margin-bottom: 60px;
`;


export const FooterInfo = styled.div`
    background-color: #1b3e6c;
    color: white;
    height: 18vh;
    h4 {
        font-family: open-sans;
        font-style: italic;
    }
`;
