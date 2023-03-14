import { Container, Redes, FooterInfo, Sugestao} from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import React from "react";

function Footer() {
  const toastId = React.useRef(null);  
  useEffect(() => {
    if(toastId.current === null && toastId !== 0) {
      toastId.current =  toast('Mensagem do dia: Acordar pela manhã foi só o primeiro milagre do seu dia! Viva com fé, esperança e amor pelo próximo: a felicidade nunca irá faltar! Tenha um bom dia! A cada novo dia, a cada momento, temos à nossa disposição a maravilhosa possibilidade do encontro, que traz em si infinitas oportunidades.', {
        position: "bottom-right",
        limit: 1,
        progress: undefined,
        theme: "light",
        autoClose: 20000,
        }, {
          toastId: Math.random()
        }); ;
    }
  }, [])
    return (
    <FooterInfo>
      <Container>
        <img src="/Logo-Multimarcas-Branca.png" alt="logo multimarcas branco"/>
        <Redes>
        <a href="https://www.instagram.com/multimarcasconsorcios/" target="_blank" rel="noreferrer"><img src="http://multimarcasconsorcios.com.br/wp-content/uploads/2022/11/instagram.png" alt="insta"/></a>
        <a  href="https://www.instagram.com/multimarcasconsorcios/" target="_blank" rel="noreferrer"><img src="http://multimarcasconsorcios.com.br/wp-content/uploads/2022/11/webosite-icon.png" alt="portal"/></a>
        </Redes>
      </Container>
      <hr />
     <h4>Esta é uma página confidencial e restrita. Se você recebeu este link por engano, não o encaminhe a mais ninguém. Saia do link e nos informe pelo compliance@multimarcasconsorcios.com.br que ele foi enviado para a pessoa errada. 
    </h4> 
    <ToastContainer
            style={{ width: "30%", color: 'black', fontWeight: '400'}}
            position= "bottom-right"
            limit= {1}
            progress="undefined"
            theme= "light"
    />
    </FooterInfo>
    );
  }
  
  export default Footer;
