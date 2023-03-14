import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 10vh;
    padding-left: 10vw;
    padding-right: 10vw;
    justify-content: space-between;
    align-items: center;
    background-color: #1b3e6c;
    color: white;
 
    @media (max-width: 600px) {
        height: 20vh;
        flex-direction: column;
        justify-content: center;
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

export const FooterInfo = styled.div`
    background-color: #1b3e6c;
    color: white;
    height: 18vh;
    h4 {
        font-family: open-sans;
        font-style: italic;
    }
`;
