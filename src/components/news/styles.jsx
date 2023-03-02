import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    color: black;
    display: flex;
    height: 80vh;
    justify-content: space-around;
    align-items: center;
    background-color: #e3e3e3;
    padding-bottom: 30px;
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100vw;
        max-width: 100%;
        align-items: space-around;
        height: 120vh;
        justify-content: center;
        overflow-y: auto;
    }
`;

export const Campains = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentCampain = styled.div`
    background-color: white;
    width: 46vw;
    height: 70vh;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 15px 15px 30px #bebebe;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888; 
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100vw;
        align-items: space-around;
        height: 100vh;
        
    }
`;

export const EachCard = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    img {
        max-height: 220px;
        max-width: 300px;
    }
    border-bottom: 2px solid gray;
    border-radius: 10px;
    @media (max-width: 500px) {
        flex-direction: column;
        width: 80vw;
        align-items: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-top: 20vh;
        overflow-y: auto;
        img {
            max-height: 300px;
        }
    }
`;