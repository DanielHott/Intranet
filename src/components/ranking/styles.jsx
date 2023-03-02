import styled from "styled-components";


export const Container = styled.div`
    color: white;
    flex-direction: column;
    display: flex;
    height: 60vh;
    background-color: #1b3e6c;
    img {
        width: 400px;
        max-width: 500px;
        margin-right: -500px;
    }
    h1 {
        margin-bottom: 5px;
        
    }
    h3 {
        margin-top: 80px;    
    }
`;

export const Positions = styled.div`
    display: flex;
    margin-top: 2vh;
    flex-direction: row;
    justify-content: space-around;

`;

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2:nth-child(1) {
        color: gold;
    }
    h2:nth-child(2) {
        color: silver;
    }
    h2:nth-child(3) {
        color: #f2b784;
    }
    color: #9f565d;
`